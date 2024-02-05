import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const Url = "http://localhost:8080/api/admin";




export const Loginadmin = createAsyncThunk("admin/Login", async (formdata) => {
  try {
   

    const response = await axios.post(`${Url}/login`,formdata);
    
    toast.success('login Successful');
    return response.data;
  } catch (error) {
 
    toast.error(error.response.data.msg);
  }
}
);


  export const Logout = createAsyncThunk("admin/Logout", async () => {
    try {

      const response = await axios.delete(`${Url}/logout`);
      toast.success(response.data.msg);
    
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  );
 

  export const authUserAsync = createAsyncThunk("admin/authAdminSessionEverytime", async () => {
    try {

        const response = await axios.post(`${Url}/authAdminSessionEverytime`);
      console.log('response get Auths',response)
        return response.data;
      } catch (error) {
        toast.error(error.response.data.msg);
      }
  });


// INITIAL STATE
const initialState = {
  loading: false,
  data: [],
  User:null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

     
      // allFormDataAsync
      .addCase(Loginadmin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Loginadmin.fulfilled, (state, action) => {
        state.loading = false;
        state.User = action.payload;

      })
     
      .addCase(Logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Logout.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(authUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.User = action.payload;
      });
  },
});

export default AuthSlice.reducer;