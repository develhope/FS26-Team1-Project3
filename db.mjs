import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config();




const uri = process.env.MONGO_URI;



async function connectMongoose() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB (Mongoose) connected");
    } catch (err) {
        console.error("MongoDB (Mongoose) connection error:", err);
        process.exit(1);
    }
}

connectMongoose();

const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
  });


const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    breed: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: String, required: true },
    owner: { type: ownerSchema, required: true }
  });  


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});



const User = mongoose.model('User', userSchema);
const Pet = mongoose.model('Pet', petSchema);



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let petsCollection;

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db("furfindDB");
        petsCollection = database.collection("pets");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
}

connectToMongoDB();

export { User, Pet, petsCollection};


