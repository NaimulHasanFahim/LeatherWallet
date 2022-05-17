import express from "express";
import { deposit, withdraw } from './../controllers/transaction.js';
import authMiddle from './../middleware/auth.js';


const router = express.Router();


router.post('/deposit', authMiddle, deposit);
router.post('/withdraw', authMiddle, withdraw);
// router.get("/:username", authMiddle, userinfo);


export default router;