import express from "express";
import { getAllTransactionById, payment, verifyTransaction } from './../controllers/transaction.js';
// import authMiddle from './../middleware/auth.js';


const router = express.Router();


router.get('/alltransaction/:id', getAllTransactionById);
router.post('/payment', payment);
router.get('/verify/:id', verifyTransaction);
// router.post('/deposit', authMiddle, deposit);
// router.post('/withdraw', withdraw);
// router.get("/:username", authMiddle, userinfo);


export default router;