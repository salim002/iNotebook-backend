const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://salim_md:mdsalim@cluster0.5lx7gov.mongodb.net/iNotebook?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;