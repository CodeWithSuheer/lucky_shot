import express from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccounts,
  getFilterdAccounts,
} from "../controllers/accountController.js";

const accountRouter = express.Router();

accountRouter.post("/createAccount", createAccount);
accountRouter.post("/deleteAccount", deleteAccount);
accountRouter.post("/getFilterdAccounts", getFilterdAccounts);
accountRouter.post("/getAllAccounts", getAllAccounts);

export default accountRouter;
