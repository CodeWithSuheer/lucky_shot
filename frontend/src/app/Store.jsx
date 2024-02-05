import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

import AccountSlice from "../Features/AccountSlice";
import BetSlice from '../Features/BetSlice'
import AuthSlice from "../Features/AuthSlice";
export const store = configureStore({
  reducer: {
   
    Account: AccountSlice,
    Bet:BetSlice,
    Auth:AuthSlice
  
  },
 
});


setupListeners(store.dispatch)