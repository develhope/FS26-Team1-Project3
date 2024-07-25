import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';


dotenv.config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

  
  const upload = multer({ storage: storage });



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


const petSchema = new mongoose.Schema({
    name: String,
    age: String,
    city: String,
    description: String,
    razza: String,
    type: String,
    size: String,
    image: String, 
    nameImage: String
  });


const User = mongoose.model('User', userSchema);
const Pet = mongoose.model('Pet', petSchema);


// Configurazione MongoClient per altre operazioni di database
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

export { User, Pet, petsCollection, upload };


