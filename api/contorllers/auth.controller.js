import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'


export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10) //10 here is salt that actually hashes that many times 
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).send("user created successfully")

    } catch (err) {
        // res.status(500).send(err.message)
        // next(errorHandler(545, "error aaya hai"))
        next(err)

    }
}
