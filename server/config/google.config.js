import googleOAuth from 'passport-google-oauth20';
import { UserModel } from '../database/allmodels.js';

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
            async (accessToken, refreshToken, profile, done) => {
                // Creating a new user object
                const newUser = {
                    id: profile.id,
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,
                    token: accessToken,  // Store the Google access token
                };

                try {
                    // Check if the user exists
                    const user = await UserModel.findOne({ email: newUser.email });
                    if (user) {
                        // Generate token for the existing user
                        const token = user.generateToken();
                        // Pass both user and token to done
                        done(null, { user, token });  // Pass token along with the user
                    } else {
                        // Creating a new user
                        const user = await UserModel.create(newUser);
                        // Generate token for the new user
                        const token = user.generateToken();
                        // Pass both user and token to done
                        done(null, { user, token });  // Pass token along with the user
                    }

                } catch (error) {
                    console.error(error);  // Log the error for debugging
                    done(error, null);
                }
            }
        )
    );

    // Serialize user into session
passport.serializeUser((userData, done) => {
    console.log("Serializing user:", userData);  // Log user data
    done(null, { id: userData.user.id, token: userData.token });  // Store user ID and token in session
});

// Deserialize user from session
passport.deserializeUser((sessionData, done) => {
    console.log("Deserializing user with session data:", sessionData);
    UserModel.findById(sessionData.id, (err, user) => {
        if (err) {
            return done(err);
        }
        done(null, { ...user, token: sessionData.token });  // Attach token to user when deserialized
    });
});
};
