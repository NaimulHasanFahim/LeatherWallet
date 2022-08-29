import bcrypt from "bcryptjs";
import express from "express";
import Transaction from "../models/transactionSchema.js";
import User from "../models/userSchema.js";
const router = express.Router();


export const getAllTransactionById = async (req, res) => {
  const { id} = req.params;
  console.log(id);
  let transactionList = [];
  try {
    Transaction.find()
      .populate("sender")
      .populate("reciever")
      .exec(function (err, all_transaction) {
        if (err) return handleError(err);
        var output =  all_transaction.filter( transaction=> transaction.sender.accountNumber == id, transaction=> transaction.reciever.accountNumber == id);
        transactionList = output;
        // console.log(output);
        return res.status(200).send(transactionList);
      });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

function getData(data) {
  let { username, password, address, email, balance, accountNumber } = data;
  let newData = { username, password, address, email, balance, accountNumber };
  return newData;
}

export const payment = async (req, res) => {
  console.log(req.body);
  const amount = parseInt(req.body.amount);
  const { sender, reciever } = req.body;
  // res.status(400).json("hello");

  try {
    if (!sender || !reciever || !req.body.password) {
      return res.send({ message: "All field of data must be required" });
    }

    if (!amount) {
      return res.send({ message: "Amount not to be nulled" });
    }

    // find( { "name.last": "Hopper" } )
    let temp = await User.find({ accountNumber: sender });
    const senderExist = temp[0];

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      senderExist.password
    );
    if (!isPasswordCorrect) {
      return res.send({ message: "Incorrect password" });
    } else if (!senderExist) {
      return res.send({
        message: "No account with the sender account number.",
      });
    } else if (senderExist.balance < amount) {
      return res.send({ message: "Not a valid ammount !" });
    }

    temp = await User.find({ accountNumber: reciever });
    const recieverExist = temp[0];

    if (!recieverExist) {
      return res.send({
        message: "No account with the reciever account number.",
      });
    }
    // console.log(senderExist);
    // console.log(recieverExist);

    let senderTemp = getData(senderExist);
    let recieverTemp = getData(recieverExist);
    // console.log(senderTemp);
    // console.log(recieverTemp);

    senderTemp.balance = senderTemp.balance - amount;
    recieverTemp.balance = recieverTemp.balance - amount;

    const senderUpdated = { ...senderTemp };
    const recieverUpdated = { ...recieverTemp };
    // console.log(temp1);
    // console.log(temp2);
    // console.log(senderExist._doc._id.toString());
    console.log(senderUpdated);
    console.log(recieverUpdated);

    await User.findByIdAndUpdate(
      senderExist._doc._id.toString(),
      senderUpdated,
      { new: true }
    );
    await User.findByIdAndUpdate(
      recieverExist._doc._id.toString(),
      recieverUpdated,
      { new: true }
    );

    const data = {
      sender: senderExist._doc._id,
      reciever: recieverExist._doc._id,
      amount,
    };
    // console.log(data);
    const result = await Transaction.create(data);
    console.log(result);
    res.status(200).send({
      message: "Transaction Successfully",
      Transaction_ID: result._doc._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};
export default router;
