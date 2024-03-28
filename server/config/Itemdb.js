const mongoose = require("mongoose")
mongoose.set('strictQuery', false);


const ItemDB = async () => {
    try {
        mongoose.createConnection(process.env.MONGO_URI_ITEMS);
        console.log("Mongo ItemDB Connected")
    }
    catch(err) {
        console.log("Mongo DB NOT Connected: ")
        process.exit(1)
    }
}

module.exports = ItemDB