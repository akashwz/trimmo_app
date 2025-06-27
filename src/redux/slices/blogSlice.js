import { decryptData, decryptDevData } from "@/utils/encryptionUtils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs = createAsyncThunk("getAllBlogs", async (payload, { rejectWithValue }) => {
  try {
    const { page, limit } = payload;

    const apiCall = await axios.get(
      `https://be-ad-store.shopeasy.ai/super/admin/se_site/blog/getSEBlogs?page=${page}&limit=${limit}&searchkey=&is_draft=false&published=true`,
    );
    if (apiCall.status === 200 || apiCall.status === 304) {
      console.log(apiCall, "apiCall");
      const response = decryptDevData(apiCall?.data?.encrypted);
      return response?.data;
    }
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  blogStatus: "idle",
  blogData: [],
  blogError: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state, action) => {
        state.blogStatus = "pending";
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogStatus = "success";
        state.blogData = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.blogStatus = "error";
        state.blogError = action.error;
        console.log("error in getAllShortLink", action.error);
      });
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
