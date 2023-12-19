import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
// import dotenv from 'dotenv' //? there is ths present in the main file


export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body
    console.log(`recieved pass:${password}`, `recieved email:${email}`, `recieved username:${username}`)
    // console.log('recieved name', username)
    // console.log('recieved email', email)
    const hashedPassword = bcryptjs.hashSync(password, 10) //10 here is salt that actually hashes that many times 
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json("user created successfully")

    } catch (err) {
        // res.status(500).send(err.message)
        // next(errorHandler(545, "error aaya hai"))
        next(err)

    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email: email })
        if (!validUser) {
            return next(errorHandler(404, "User Not found"))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "wrong credentials"))
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRETKEY)
        const { password: pass, ...rest } = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(rest)
        //?you can expire the cookie after whenever you want buy using new date and its calculation*/
    } catch (error) {
        next(error)
    }
}