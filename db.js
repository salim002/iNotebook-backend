const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;