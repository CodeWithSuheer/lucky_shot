import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const Url = "http://localhost:8080/api/bets";

export const createBetWiners = createAsyncThunk("Bets/createBetWinners", async (ids) => {
  try {
    const response = await axios.post(`${Url}/createBetWinners`,ids);
    toast.success(response.data.message);
    console.log(response.data);
    console.log(ids);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}
);

  export const GetBets = createAsyncThunk("Bets/getAllBets", async () => {
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