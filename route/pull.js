const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

const Vote = require('../model/Vote');

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '465905',
  key: '70dcdef847f814321f5a',
  secret: '02601d8747105bcd8ad8',
  cluster: 'ap1',
  encrypted: true
});

route.get('/dl', (req, res) => {
    Vote.find().then( votes => res.json({
        success: true,
        votes: votes
    }))
})

route.get('/', (req, res) => {
    res.render('pull');
});
route.post('/', (req, res) => {
    const newVote = {
        crypto: req.body.crypto,
        points: 1
    }
new Vote(newVote).save().then(vote => {
    pusher.trigger('cryto-poll', 'crypto-vote', {
        points : parseInt(vote.points),
        crypto : vote.crypto
    });
}); 
    return res.json({ success: true, message: 'Thank you for voting' });
})

module.exports = route;