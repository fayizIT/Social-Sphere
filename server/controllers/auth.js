import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/User";

export const register =async (req,res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            PicturePath,
            friends,
            location,
            occupation
        } = req.body

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            firstName,
            lastName,
            email,
            PicturePath,
            friends,
            location,
            occupation,
            viewProfile:Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random()*10000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error:err.message});
        console.log("error check the code");
    }

}