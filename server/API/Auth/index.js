import express from 'express'
import passport from 'passport';

//Models
import { UserModel } from '../../database/allmodels.js'

const Router = express.Router();


/*
Route    /signup
Des      signup with email and password
Access   Public
Params   None  
Method   POST
*/

Router.post("/signup", async (req, res) => {
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials)

        const newUser = await UserModel.create(req.body.credentials)

        const token = await newUser.generateToken();

        return res.status(200).json({ token, status: "Success" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})



/*
Route    /signin
Des      signin with email and password
Access   Public
Params   None  
Method   POST
*/

Router.post("/signin", async (req, res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(req.body.credentials)
        console.log(user);
        const token = await user.generateToken();

        return res.status(200).json({ token, status: "Success" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route    /google
Des      google signin
Access   Public
Params   None  
Method   Get
*/

Router.get(
    "/google",
    passport.authenticate('google', {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ]
    })
);

/*
Route    /google/callback
Des      google signin callback
Access   Public
Params   None  
Method   Get
*/

Router.get(
    "/google/callback",
    passport.authenticate('google', { failureRedirect: "/" }),
    (req, res) => {
        if (!req.session.passport || !req.session.passport.user) {
            return res.status(401).json({ error: "Authentication failed" });
        }
        res.json({ token: req.user.token });
    }
);


export default Router;