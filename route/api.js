const express = require('express');
const route = express.Router();
const bittrex = require('../node.bittrex.api/node.bittrex.api');
// Config API Bittrex
bittrex.options({
  'apikey' : 'efc541127e1248c5967eb7a7c8516f18',
  'apisecret' : 'fe5f99de775d4cbdbd2911dae9ab1193',
  'verbose' : true,
  'cleartext' : false
});

route.get('/listcoin', (req, res) => {
    var url = 'https://bittrex.com/api/v1.1/public/getcurrencies';
    bittrex.sendCustomRequest( url, function( data, err ) {
    if (err) {
        return console.error(err);
    }
    res.json(data);
    });
});

route.get('/btcprice', (req, res) => {
    var url = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=usdt-btc';
    bittrex.sendCustomRequest( url, function( data, err ) {
    if (err) {
        return console.error(err);
    }
    res.json(data);
    });
});

route.get('/allprice', (req, res) => {
    var url = 'https://bittrex.com/api/v1.1/public/getmarketsummaries';
    bittrex.sendCustomRequest( url, function( data, err ) {
    if (err) {
        return console.error(err);
    }
    res.json(data);
    });
});


module.exports = route;