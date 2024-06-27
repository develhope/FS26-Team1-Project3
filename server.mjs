import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import dotenv from 'dotenv';
import initializePassport from './passport.config.js';
import { createEngine } from 'express-react-views';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();

const users = [];

initializePassport(passport, username => {
    return users.find(user => user.username === username);
});

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());
app.use(express.urlencoded({ extended: false }));
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
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        res.redirect('/login');
    } catch (error) {
        res.redirect('/iscriviti');
    }
    console.log(users);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
