const mongoose = require('mongoose');

const urlMongoDb = 'mongodb://127.0.0.1/aepi';

mongoose.connect(urlMongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});