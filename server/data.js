const axios=require('axios');
const mongoose=require('mongoose');
const ItemModel=require('./models/itemsModel.js');
const url='https://shop-backend-two.vercel.app/api/items';

async function fetchDataAndPushToBackend() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://Aanchal:Aanchal123@cluster0.jfg08id.mongodb.net/Items', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const items=await ItemModel.find();

        // Send a POST request to the URL with the formatted data
        const response=await axios.post(url, items);
        console.log('Data successfully pushed to the backend:', response.data);
    } catch (error) {
        console.error('Error pushing data to the backend:', error.message);
    } finally {
        // Disconnect from MongoDB after the operation is complete
        await mongoose.disconnect();
    }
}

fetchDataAndPushToBackend();
