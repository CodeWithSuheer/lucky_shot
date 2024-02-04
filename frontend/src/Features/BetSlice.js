import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const Url = "http://localhost:8080/api/bets";




export const AddBetSLice = createAsyncThunk("admin/AddBetSLice", async (formdata) => {
  try {
   

    const response = await axios.post(`${Url}/createBet`,formdata);
    
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
 
    toast.error(error.response.data.msg);
  }
}
);

export const RemoveBetSlice = createAsyncThunk("admin/RemoveBetSlice", async (id) => {
    try {
     
  
      const response = await axios.post(`${Url}/deleteBet`,id);
      console.log('dleter Bet',response)
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  );
  export const GetBets = createAsyncThunk("admin/getAllBets", async () => {
    try {

      const response = await axios.post(`${Url}/getAllBets`);
    
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  );
 

// INITIAL STATE
const initialState = {
  loading: false,
  data: [],
};

const BetSlice = createSlice({
  name: "BetSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

     
      // allFormDataAsync
      .addCase(AddBetSLice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddBetSLice.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(RemoveBetSlice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(RemoveBetSlice.fulfilled, (state, action) => {
        state.loading = false;
        
      })
      .addCase(GetBets.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetBets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
      })
  },
});

export default BetSlice.reducer;