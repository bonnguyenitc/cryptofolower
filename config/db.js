const mongoose = require('mongoose');

// Map global promise
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect('mongodb://bonnguyenitc:0546533836@ds119268.mlab.com:19268/cryptodata')
.then(() => {
    console.log('MongoDB Connected');
})
.catch(err => {
    console.log(err);
});
