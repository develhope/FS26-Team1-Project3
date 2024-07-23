import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://FurFind:chitarrablu@clusterfurfind.ljcgcss.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFurFind";

// Connetti a MongoDB con Mongoose
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

// Definisci lo schema e il modello User
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

// Configurazione MongoClient
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

// Esporta le variabili
export { User, petsCollection };

