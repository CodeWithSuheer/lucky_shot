import mongoose from "mongoose";
import { Accounts } from "../models/accountModel.js";

function setMongoose() {
  return mongoose.set("toJSON", {
    virtuals: true,
    transform: (doc, returnValue) => {
      delete returnValue._id;
      delete returnValue.__v;
    },
  });
}

export const createAccount = async (req, res, next) => {
  try {
    const {
      accountTitle,
      accountNumber,
      usedLimit,
      paymentMethod,
      limit,
      backupAccountCounter,
    } = req.body;
    await Accounts.create({
      accountTitle,
      accountNumber,
      paymentMethod,
      limit,
      usedLimit,
      backupAccountCounter,
    });

    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteAccount = async (req, res, next) => {
  try {
    const { id } = req.body;
    await Accounts.findByIdAndDelete(id);
    res.status(200).json({ message: "Account Deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getFilterdAccounts = async (req, res, next) => {
  try {
    const accounts = await Accounts.find({
      backupAccount: false,
      backupAccountCounter: { $ne: 4 },
    });
    setMongoose();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await Accounts.find();
    setMongoose();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
