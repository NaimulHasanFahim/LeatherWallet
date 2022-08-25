import express from "express";


const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({message : "Hit the get point of register!"});
})

export default router;