import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    sender : { type: mongoose.Types.ObjectId, ref: 'User' },
    reciever : { type: mongoose.Types.ObjectId, ref: 'User' },
    amount : {type: Number, required: true},
});

const Transaction = mongoose.model('Transactions', transactionSchema);
export default Transaction;