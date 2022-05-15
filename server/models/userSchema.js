import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    phone : String,
    address : String,
    balance : Number,
    emial : String,
});

const UserDetail = mongoose.model('UserDetail', userSchema);
export default UserDetail;