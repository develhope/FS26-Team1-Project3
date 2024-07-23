import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import dotenv from 'dotenv';
import helmet from "helmet";
import initializePassport from './passport.config.mjs';
import { createEngine } from 'express-react-views';
import cors from 'cors';
import './passport.config.mjs';
import path from 'path'
import { fileURLToPath } from 'url';
import { User, petsCollection } from './db.mjs'; // Importa il db.js

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const viewsPath = path.join(__dirname, 'src');

app.set('views', viewsPath);
app.use(express.static(path.join(__dirname, 'dist')));

app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'"],
        "style-src": ["'self'", "https://fonts.googleapis.com"],
        "font-src": ["'self'", "https://fonts.gstatic.com"],
        "img-src": ["'self'", "data:"],
        "connect-src": ["'self'"],
        "frame-src": ["'none'"]
      }
    }
  }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

initializePassport(passport, async email => {
    return await User.findOne({ email });
}, async id => {
    return await User.findById(id);
});

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/login', (req, res) => {
    res.render('LoginForm');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/iscriviti', (req, res) => {
    res.render('SignUpForm');
});

app.post('/iscriviti', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword,
        });
        await user.save();
        res.status(200).redirect('/login');
    } catch (error) {
        console.error("Errore durante la registrazione", error);
        res.status(500).redirect('/iscriviti');
    }
});



// // MongoDB connection setup
// const uri = "mongodb+srv://FurFind:chitarrablu@clusterfurfind.ljcgcss.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFurFind";
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// let petsCollection;

// async function connectToMongoDB() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//         const database = client.db("furfindDB");
//         petsCollection = database.collection("pets");
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//         process.exit(1);
//     }
// }

// connectToMongoDB();

// Route for fetching pets
app.get('/pets', async (req, res) => {
    try {
        const pets = await petsCollection.find({}).toArray();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pets' });
    }
});



app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});





app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
});
