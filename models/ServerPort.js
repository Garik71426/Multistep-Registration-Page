const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
    generalInfo : {
        firstName : {type : String},
        lastName : {type : String},
        city : {type : String},
        country : {type : String},
        address : {type : String},
        email : {type : String},
        password : {type : String}
    },
    packageInfo : {type : String},
    cardInfo : {
        cardNumber : {type : String},
        cardName : {type : String},
        cardCvc : {type : Number},
        cardExpiration : {type : String}
    }
},{
    collection: 'users'
});

module.exports = mongoose.model('ServerPort', ServerPort);