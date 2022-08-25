import express from "express";
import { login, logout, userinfo } from './../controllers/auth.js';
import register from './../controllers/register.js';
import authMiddle from './../middleware/auth.js';


const router = express.Router();


router.post('/signup', register);
router.get('/signout', logout);
router.post('/signin', login);
router.get("/:username", authMiddle, userinfo);


export default router;