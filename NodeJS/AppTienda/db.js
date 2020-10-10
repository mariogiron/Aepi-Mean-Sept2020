const mongoose = require('mongoose');

const urlMongoDb = process.env.MONGODB_URL;

mongoose.connect(urlMongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});