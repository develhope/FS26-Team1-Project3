// passport.config.mjs

import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

function initialize(passport, getUserByUsername) {
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username);
        if (!user) {
            return done(null, false, { message: 'Nessun utente esistente con questo username' });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password non corretta' });
            }
        } catch (error) {
            return done(error);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        getUserByUsername(id, (err, user) => {
            done(err, user);
        });
    });
}

export default initialize;

