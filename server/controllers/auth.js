import express from 'express';
// import mongoose from 'mongoose';
// import PostMessage from '../models/postMessage.js';
import fs from 'fs';
import jwt from 'jsonwebtoken';
const router = express.Router();

///DATABASEE
let USERS = [];


fs.readFile('./../server/database/user.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  USERS = JSON.parse(data);
  // console.log(data);
});


///DATABASE


export const login = async (req, res)=>{
  // console.log(req.body);
  const {username, password} = req.body;
  if(!username || !password ){
    res.status(200).json({ message: 'All field of data must be required' });
  }
    // res.status(200).json({ message: 'Success' });
  USERS.map((user)=>{
    if(user.username == username && user.password == password){
      const token = jwt.sign({username : username }, "KEY");
      try {
        res.cookie("token", token,{httpOnly:true}).send(username);  
      } catch (error) {
        console.log(error.message);
        res.status(400).json({message : 'Token failed'});
      }
      
    }else{
      res.status(400).json({ message: 'Login failed!' });
    }
  })
}

export const logout = (req, res)=>{
  res.clearCookie('token').send("Successfully logged out.")
}

export const userinfo = (req, res)=>{
  USERS.map((user)=>{
    if(user.username == req.params.username ){
      res.send(user);
    }
  })
}



export default router;