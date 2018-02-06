const form = document.getElementById('vote-form');

// form Submit
form.addEventListener('submit',  (e) => {
    const choice = document.querySelector('input[name=crypto]:checked').value;
    const data = { crypto: choice };

    fetch('/pull', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    e.preventDefault();
});

fetch('/pull/dl')
.then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;
    document.querySelector('#chartTitle').textContent = `Total Votes: ${totalVotes}`;

    // Count vote points 
    const voteCounts = votes.reduce(
        (acc, vote) => (
          (acc[vote.crypto] = (acc[vote.crypto] || 0) + parseInt(vote.points)), acc
        ),
        {}
  );

  //
let dataPoints = [
    { label: 'BTC', y: voteCounts.BTC },
    { label: 'ETH', y: voteCounts.ETH },
    { label: 'DGB', y: voteCounts.DGB },
    { label: 'LTC', y: voteCounts.LTC }
];

const chartContainer = document.querySelector('#chartContainer');
if(chartContainer){
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnable: true,
        theme: 'theme1',
        title: {
            text: `Bạn thích đồng tiền nào`
        },
        data: [
            {
                type: 'column',
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('70dcdef847f814321f5a', {
      cluster: 'ap1',
      encrypted: true
    });

    var channel = pusher.subscribe('cryto-poll');
    channel.bind('crypto-vote', function(data) {
        dataPoints = dataPoints.map(x => {
            if (x.label == data.crypto) {
              x.y += data.points;
              return x;
            } else {
              return x;
            }
        });
        chart.render();
    });
}
});

