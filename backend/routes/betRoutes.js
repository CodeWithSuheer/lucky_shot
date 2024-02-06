import express from "express";
import {
  createBet,
  createBetWinners,
  getAllBets,
  getBetWinners,
  getBetsOF24Hours,
  publishWinners,
} from "../controllers/betController.js";

const betRouter = express.Router();

betRouter.post("/createBet", createBet);
betRouter.post("/getAllBets", getAllBets);
betRouter.post("/createBetWinners", createBetWinners);
betRouter.post("/publishWinners", publishWinners);
betRouter.post("/getBetWinners", getBetWinners);
betRouter.post("/getBetsOF24Hours", getBetsOF24Hours);

export default betRouter;
