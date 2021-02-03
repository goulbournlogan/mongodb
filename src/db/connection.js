// const { MongoClient } = require("mongodb");

// const URI = "mongodb+srv://goulbournlogan:logan1000@cluster0.npm98.mongodb.net/tester?retryWrites=true&w=majority"

// const connection = async () => {
//     try {
//         const client = new MongoClient(URI);
//         await client.connect();
//         console.log('successfully connected to mongodb');
//         const db = client.db("people");
//         const collection = db.collection("emails");
//         await collection.insertOne({ email: "test@email.com"});
//         const response = await collection.find({}).toArray();
//         console.log(response[0]);
    
//         client.close();
//     } catch (error) {
//         console.log(error);
//     }
// };

// connection();

const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

connection();