import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { User } from './db.mjs'

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        try {
            // Trova l'utente per email
            const user = await User.findOne({ email });
            if (user == null) {
                return done(null, false, { message: 'No user with that email' });
            }

            // Verifica la password
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

    // Serializza l'ID dell'utente nella sessione
    passport.serializeUser((user, done) => done(null, user.id));

    // Deserializza l'utente dalla sessione
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
}

export default initialize;


