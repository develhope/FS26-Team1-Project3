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
import { User, Pet, petsCollection } from './db.mjs';
import multer from 'multer';



if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');


app.use(express.static(distPath));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Cartella dove salvare le immagini
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Nome del file unico
    }
  });
  
  
  const upload = multer({ storage: storage });

  app.use(helmet());

// app.use(helmet({
//     contentSecurityPolicy: {
//         directives: {
//             defaultSrc: ["'self'"],
//             connectSrc: ["'self'", "http://localhost:3000/", "http://gc.kis.v2.scr.kaspersky-labs.com/"],
//             scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com/"],
//             styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com/"],
//             fontSrc: ["'self'", "https://fonts.gstatic.com/"],
//             imgSrc: ["'self'", "data:", "https:"],
//             frameSrc: ["'none'"]
//         }
//     }
// }));

const customCorsMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Sostituisci con il tuo origin frontend
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  };
  
  app.use(customCorsMiddleware);
  const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // Permette i cookie e le sessioni tra domini
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

// initializePassport(passport);

// app.use(session({
//   secret: 'segreto',
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());



app.post('/upload', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

      const newPet = new Pet({
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        city: req.body.location,
        description: req.body.description,
        imagePath: req.file.path,
        type: req.body.type,
        size: req.body.size,
        owner: {
          name: req.body.ownerName,
          phone: req.body.ownerPhone,
          email: req.body.ownerEmail
        }
      });

      await newPet.save();
      const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
      res.status(201).json({ newPet, imageUrl });
    } catch (error) {
      console.error('Failed to upload file and save data:', error);
      res.status(500).json({ error: 'Errore durante l\'upload del file e il salvataggio dei dati' });
    }
  });


// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }));

app.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
        }
        const user = await User.findOne({ email });
        if (!user) {            
            res.status(401).json({ message: "Email non trovata" });
            return;
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {            
            req.session.user = user;
            res.send("ok")
            console.log("login effettuato:", email);
            // res.redirect('/'); 
        } else {         
            res.status(401).json({ message: "Password errata" });
        }
    } catch (error) {
        console.error('Errore durante il login:', error);
        res.status(500).json({ message: "Errore interno del server durante il login" });
    }

    })



app.post('/iscriviti', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        console.log("Received data:", req.body);

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
        console.log("User saved:", user);
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
