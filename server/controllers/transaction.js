import express from 'express';
// import mongoose from 'mongoose';
// import PostMessage from '../models/postMessage.js';
import fs from 'fs';
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


export const deposit = async (req, res)=>{
  console.log(req.body);
  const amount = parseInt(req.body.amount);
  const username = req.body.username;
  if(!amount){
    res.status(400).json({ message: 'Amount not to be nulled' });
  }
    // res.status(200).json({ message: 'Success' });
  USERS.map((user)=>{
    if(user.username == username ){
        user.balance +=amount;
        
        fs.writeFile('./../server/database/user.json', JSON.stringify(USERS), (err)=>{
            if(err){
                res.send('Amount not deposited');
            }
            else{
                res.status(200).send('Amount successfully deposited');
            }
        })
    }
  })
}


export const withdraw = async (req, res)=>{
    // console.log(req.body);
    const amount = parseInt(req.body.amount);
    const username = req.body.username;
    if(!amount){
      res.status(400).json({ message: 'Amount not to be nulled' });
    }
      // res.status(200).json({ message: 'Success' });
    USERS.map((user)=>{
      if(user.username == username ){
          if(amount>user.balance){
             return res.send("Not enough balance in the account");
          }  
        user.balance -=amount;
          
          fs.writeFile('./../server/database/user.json', JSON.stringify(USERS), (err)=>{
              if(err){
                  res.send('Amount not withdrawn');
              }
              else{
                  res.status(200).send('Amount successfully withdrawn');
              }
          })
      }
    })
  }

export default router;