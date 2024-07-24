import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import initializePassport from './passport.config.mjs';
import { User, petsCollection } from './db.mjs';


if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const distPath = path.join(__dirname, 'dist');


app.use(express.static(distPath));


app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "default-src": ["'self'"],
            "script-src": ["'self'", "https://cdnjs.cloudflare.com"],
            "style-src": ["'self'", "https://fonts.googleapis.com"],
            "font-src": ["'self'", "https://fonts.gstatic.com"],
            "img-src": ["'self'", "data:", "https:"],
            "connect-src": ["'self'", "http://localhost:5173/", "http://localhost:3000"],
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


app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.post('/iscriviti', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        console.log("Received data:", req.body);  // Log di debug

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email già utilizzata' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword,
        });
        await user.save();
        console.log("User saved:", user);  // Log di debug
        res.status(200).redirect('/login');
    } catch (error) {
        console.error('Errore durante la registrazione:', error);
        res.status(500).json({ error: 'Registrazione fallita' });
    }
});



app.get('/pets', async (req, res) => {
    try {
        const pets = await petsCollection.find({}).toArray();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pets' });
    }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});


app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
});
