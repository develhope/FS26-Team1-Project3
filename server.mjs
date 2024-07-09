import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import dotenv from 'dotenv';
import initializePassport from './passport.config.mjs';
import { createEngine } from 'express-react-views';
import { mongoose, User } from './mongo.mjs';
import cors from 'cors';
import './passport.config.mjs';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();

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
    res.render('App.jsx');
});

app.get('/login', (req, res) => {
    res.render('Login.jsx');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/iscriviti', (req, res) => {
    res.render('Iscrivitiform.jsx');
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
