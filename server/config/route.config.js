import JwtPassport from 'passport-jwt';

// database model

import { UserModel } from '../database/allmodels.js';

const JwtStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ZomatoApp',
}

export default (passport) => {
    passport.use(new JwtStratergy(options, async (jwt__payload, done) => {
        try {
            const doesUserExist = UserModel.findById(jwt__payload.user);
            if (!doesUserExist) return done(null, false);
            return done(null, doesUserExist);
        } catch (error) {
            throw new Error(error)
        }
    }))

}
