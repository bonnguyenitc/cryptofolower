const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bittrex = require('./node.bittrex.api/node.bittrex.api');
// Config API Bittrex
bittrex.options({
  'apikey' : 'efc541127e1248c5967eb7a7c8516f18',
  'apisecret' : 'fe5f99de775d4cbdbd2911dae9ab1193',
  'verbose' : true,
  'cleartext' : false
});
//
// DB CONFIG
require('./config/db');

const app = express();
// im socket io
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// REALTIME
// io.on('connection', function (socket) {
//   bittrex.websockets.client(function() {
//     console.log('Websocket connected');
//     bittrex.websockets.subscribe(['USDT-BTC'], function(data) {
//       if (data.M === 'updateExchangeState') {
//         data.A.forEach(function(data_for) {
//           socket.emit('btcprice', data_for);
//         });
//       }
//     });
//   });
// });
io.on('connection', function(socket){
    setInterval(function(){
      var url = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=usdt-btc';
      bittrex.sendCustomRequest( url, function( data, err ) {
      if (err) {
          return console.error(err);
      }
      socket.emit('btcprice', data);
      });
      // get giá all sàn
      var url = 'https://bittrex.com/api/v1.1/public/getmarketsummaries';
      bittrex.sendCustomRequest( url, function( data, err ) {
      if (err) {
          return console.error(err);
      }
      socket.emit('allprice', data);
      });
    },3000);
});
// router
const index = require('./route/index');
const pull = require('./route/pull');
const api = require('./route/api');

var port = process.env.PORT || 3000;

// views
app.set('view engine','ejs');

app.use("/public",express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/', index);
app.use('/pull', pull);
app.use('/api',api);
// handle socket io
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

  server.listen(port, (req, res) => {
    console.log("tao đang chạy");
});