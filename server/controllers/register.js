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

const register = async (req, res)=>{

  console.log(req.body);

  const {name, address, email, username, password} = req.body;
  
  if(!name|| !address || !email || !username || !password ){
    res.status(200).json({ message: 'All field of data must be required' });
    return;
  }
    // res.status(200).json({ message: 'Success' });
  let exists = false;
  USERS.map((user)=>{
    if(user.username == username){
      res.status(200).json({ message: 'Username already exists!' });
      exists=true;
      return;
    }
  })

  const USER = {
    name : name,
    address : address,
    email : email,
    username : username,
    password : password,
    balance: 0,
  }

  if(!exists){
    USERS.push(USER);
  fs.writeFile('./../server/database/user.json', JSON.stringify(USERS), (err) => {
    if (err){
      res.status(400).json({ message: 'Username registration unsuccessful!' });
      return;
    }
    else {
      console.log("File written successfully");
      // res.status(200).json({ message: 'Successfully registration completed!' });
      // console.log("The written has the following contents:");
      // console.log(fs.readFileSync("books.txt", "utf8"));

      const token = jwt.sign({
      username : USER.username
    },"KEY");
    
    try {
      res.cookie("token", token,{httpOnly:true}).send('Successfully registration completed!');
    } catch (error) {
      console.log(error.message);
      // res.status(400).json({message : 'Token failed'});
    }

    }
  });
  }


  
  
}

export default register;