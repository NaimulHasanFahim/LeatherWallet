import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    accountNumber : {type: String, required: true, unique: true},
    address : {type: String, required: true},
    balance : {type: Number, default : 10000},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);
export default User;