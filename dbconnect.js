const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:admin123@cluster0.bxo9m.mongodb.net/libmgmt_demo?retryWrites=true&w=majority';

function init() {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.on('error', () => {
        console.log('Error in connecting with the db'); 
    });

    connection.on('open', () => {
        console.log('db connection successful');
    });
}

module.exports = {
    init,
}