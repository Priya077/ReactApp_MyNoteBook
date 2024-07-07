const mongoose=require('mongoose');

const mongoURI = "mongodb://localhost:27017/?directConnection=true&readPreference=primary"

const connectToMongo = () => {

    mongoose.connect(mongoURI).then(() => console.log("Connection established successfully")).catch((e) => console.log(e.message))
}


module.exports = connectToMongo;