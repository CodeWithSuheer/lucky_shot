import mongoose from "mongoose";
import { uploadImageToCloudinary } from "../middleware/cloudinary.js";
import { Accounts } from "../models/accountModel.js";
import { Bets } from "../models/betModel.js";


function setMongoose() {
  return mongoose.set("toJSON", {
    virtuals: true,
    transform: (doc, returnValue) => {
      delete returnValue._id;
      delete returnValue.__v;
    },
  });
}

export const createBet = async (req, res, next) => {
  try {
    const {
      betAmount,
      betNumber,
      name,
      mobileNumber,
      image,
      accountUsed,
      prizeAcntInfo,
    } = req.body;

    const result = await uploadImageToCloudinary(image,"Payment ScreenShots");
    const imageData = {
      public_id:result.public_id,
      secure_url:result.secure_url
    }

    try {
      const account = await Accounts.findOne({ _id: accountUsed.Id });
      account.usedLimit += betAmount;
      if (account.usedLimit === account.limit) {
        account.backupAccount = true;
        account.backupAccountCounter += 1;
      }
      await account.save();
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }

    await Bets.create({
      betAmount,
      betNumber,
      name,
      image:imageData,
      accountUsed,
      prizeAcntInfo,
      mobileNumber,
    });
    res.status(200).json({ msg: "Bet Placed Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllBets = async (req, res, next) => {
  try {
    const accounts = await Bets.find().sort({ createdAt: -1 });
    setMongoose();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createBetWinners = async (req, res, next) => {
  try {
    const { ids } = req.body;
    if (!ids || ids.length === 0) {
      return res.status(404).json({ msg: "No Bets Selected" });
    }
    await Bets.updateMany(
      { _id: { $in: ids } },
      { $set: { isBetWinner: true } }
    );
    res.status(200).json({ message: "Winners Selected." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBetWinners = async (req, res, next) => {
  try {
    const bets = await Bets.find({ isBetWinner: true });
    setMongoose();
    res.status(200).json(bets);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const publishWinners = async (req, res, next) => {
  try {
    const { ids } = req.body;
    if (!ids || ids.length === 0) {
      return res.status(404).json({ msg: "No Winners Selected" });
    }
    
    // Check if any of the selected winners already have the published flag set to true
    const winnersWithPublishedFlag = await Bets.find({ _id: { $in: ids }, published: true });
    
    // Update the winners
    const updatePromises = [];
    ids.forEach((id) => {
      const updatePromise = Bets.updateOne(
        { _id: id, isBetWinner: true },
        { $set: { published: !winnersWithPublishedFlag.includes(id), isBetWinner: true } }
      );
      updatePromises.push(updatePromise);
    });
    
    // Execute all update promises
    await Promise.all(updatePromises);
    
    // Fetch and log the updated data
    const updatedData = await Bets.find({ _id: { $in: ids } });
    console.log("Updated data:", updatedData);
    
    res.status(200).json({ message: "Winners will be revealed in 30 minutes." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const getBetsOF24Hours = async (req, res, next) => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const bets = await Bets.find({ createdAt: { $gte: twentyFourHoursAgo } }).sort({ createdAt: -1 });

    res.status(200).json(bets);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};