import googleOAuth from 'passport-google-oauth20'

import { UserModel } from '../database/allmodels'

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
            async (accessToken, refreshToken, profile, done) => {
                // creating a new user object
                const newUser = {
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,
                };

                try {
                     // check if user exist
                    const user = await UserModel.findOne({ email: newUser.email })
                   
                    // generate token
                    const token = user.generateToken();
                    if (user) {
                        // return user
                        done(null, { user, token })
                    }

                    else {
                        // creating a new user
                        const user = await UserModel.create(newUser)
                        // return user
                        done(null, { user, token })
                    }

                } catch (error) {
                    done(error,null)
                }

            }
        )
    )

    passport.serializeUser=((userData,done)=>done(null,{...userData}))
    passport.deserializeUser=((id,done)=>done(null,id))
}