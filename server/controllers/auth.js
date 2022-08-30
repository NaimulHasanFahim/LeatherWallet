import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/userSchema.js";
const router = express.Router();


export const signin = async (req, res) => {
  console.log(req.body);
  const { accountNumber, password } = req.body;
  if (!accountNumber || !password) {
    res.status(200).json({ message: "All field of data must be required" });
  }

  try {
    const existingUser = await User.findOne({ accountNumber });

    if (!existingUser)
      return res
        .status(404)
        .json({ message: "Please log in with a registered account number." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credintials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "KEY",
      { expiresIn: "1h" }
    );
    // res.cookie("token", token,{httpOnly:true}).send(username);  
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};


export const signout = (req, res) => {
  res.clearCookie("token").send("Successfully logged out.");
};



export const signup = async (req, res) => {
  console.log(req.body);
  const { address, email, username, password, phoneNumber, confirmPassword } =
    req.body;
  console.log(req.body);

  if (
    !username ||
    !address ||
    !email ||
    !password ||
    !phoneNumber ||
    !confirmPassword
  ) {
    res.status(200).json({ message: "All field of data must be required" });
    return;
  }

  try {
    // console.log(phoneNumber);
    const existingUser = await User.findOne({email})
    // console.log(existingUser);

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);
    // console.log(phoneNumber);
    const result = await User.create({
      email,
      password: hashedPassword,
      username,
      address,
      accountNumber : phoneNumber,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "KEY", {
      expiresIn: "1h",
    });
    // res.cookie("token", token,{httpOnly:true}).send('Successfully registration completed!');
    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }

};

export const  getUserInfo = async (req, res)=>{
  console.log(req.params.id);
  try {
    const existingUser = await User.findById(req.params.id); 
    if(existingUser !=null){
      return res.status(200).json(existingUser);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "User not found"});
  }
} 


// export const userinfo = (req, res) => {
//   .map((user) => {
//     if (user.username == req.params.username) {
//       res.send(user);
//     }
//   });
// };

export default router;
