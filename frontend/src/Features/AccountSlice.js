import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const Url = "http://localhost:8080/api/accounts";




export const AddAccountSLice = createAsyncThunk("admin/AddAccountSLice", async (formdata) => {
  try {
   

    const response = await axios.post(`${Url}/createAccount`,formdata);
    
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
 
    toast.error(error.response.data.msg);
  }
}
);

export const RemoveAccountSlice = createAsyncThunk("admin/RemoveAccountSlice", async (id) => {
    try {
     
  
      const response = await axios.post(`${Url}/deleteAccount`,id);
      console.log('dleter account',response)
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  );
  export const GetAccounts = createAsyncThunk("admin/getAllAccounts", async () => {
    try {

      const response = await axios.post(`${Url}/getAllAccounts`);
    console.log('response get accounts',response)
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

const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

     
      // allFormDataAsync
      .addCase(AddAccountSLice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddAccountSLice.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(RemoveAccountSlice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(RemoveAccountSlice.fulfilled, (state, action) => {
        state.loading = false;
        
      })
      .addCase(GetAccounts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
      })
  },
});

export default AccountSlice.reducer;