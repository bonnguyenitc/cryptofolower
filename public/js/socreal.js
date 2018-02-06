var socket = io.connect('https://cryptofolower.herokuapp.com/');
  socket.on('btcprice', function (data) {
       //console.log(data.result[0].Last);
       var txt = document.getElementById('pricebtc');
      //  txt.innerHTML = "Giá BTC - High: "+ data.result[0].High+" - Last: "+ data.result[0].Last + " - Low: " +data.result[0].Low;
      txt.innerHTML = "Giá BTC - Last: "+ data.result[0].Last.toFixed(3) + " $";
  });

  socket.on('allprice', function(data) {
       // console.log(data); 
  })