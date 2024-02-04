
import moment from "moment";
import { Accounts } from "../models/accountModel.js";

const updateBackupAccount = async () => {
  try {
    const currentDate = moment();
    const thirtyOneDaysAgo = moment().subtract(31,'days');
    const accountsToUpdate = await Accounts.find({
        backupAccount: true,
        backupAccountCounter: 4,
        updatedAt: { $gte: thirtyOneDaysAgo },
    });
    if (accountsToUpdate.length > 0) {
        await Accounts.updateMany(
            { _id: { $in: accountsToUpdate.map(account => account._id) } },
            { $set: { backupAccount: false, usedLimit: 0 , backupAccountCounter : 0} }
          );
    } 
      await Accounts.updateMany(
        { backupAccount: true, backupAccountCounter: { $lt: 4 } },
        { $set: { backupAccount: false, usedLimit: 0  } }
      );
    
  } catch (error) {
    throw new Error({ msg: error.message });
  }
};


export { updateBackupAccount };
