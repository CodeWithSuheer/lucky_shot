import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

import AccountSlice from "../Features/AccountSlice";
import BetSlice from '../Features/BetSlice'
export const store = configureStore({
  reducer: {
   
    Account: AccountSlice,
    Bet:BetSlice
  
  },
 
});


setupListeners(store.dispatch)