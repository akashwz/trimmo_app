import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/api";
import ToastNotification from "@/controller/ToastNotification";
import { editUser } from "../slices/authSlice";

// -------------------- Async Thunks --------------------

export const updateAppreance = createAsyncThunk(
  "appreance/updateAppreance",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(editUser({ customize_theme: data }));
      return data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const updateAppreanceTheme = createAsyncThunk(
  "appreance/updateAppreanceTheme",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(editUser({ template: data }));
      return data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const getTheme = createAsyncThunk("appreance/getTheme", async (_, { rejectWithValue }) => {
  try {
    const apiCall = await API({
      url: `/themes`,
      method: "get",
    });
    return apiCall?.data?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const getSingleThemeData = createAsyncThunk(
  "appreance/getSingleThemeData",
  async (id, { rejectWithValue }) => {
    try {
      const apiCall = await API({
        url: `/themes/${id}`,
        method: "get",
      });
      return apiCall?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

// -------------------- Initial State --------------------

const initialState = {
  userNames: null,
  appreanceTheme: null,
  getThemeData: null,
  singleThemeData: null,
  loader: false,
  appreance: {
    bg_image: "",
    selectedBg: "flat_colour",
    basicColor: "#ffffff",
    buttonColor: "#f3f4f6",
    buttonFontColor: "#374151",
    buttonHoverBg: "#374151",
    buttonHoverFontColor: "#f3f4f6",
    shadowColor: "#1414b5",
    value: "gradient_up",
    selectedButton: "fill-2",
    form_color: "#d8b4fe",
    via_color: "#fbcfe8",
    to_color: "#fef08a",
    button_text_align: "center",
    username_text_color: "#000000",
    username_text_size: 18,
    description_text_color: "#000000",
    description_text_size: 14,
    bio_text_align: "center",
    bio_line_height: 20,
    profile_radius_top: 100,
    profile_radius_bottom: 100,
    profile_radius_left: 100,
    profile_radius_right: 100,
    social_media_show_as_a_button: false,
    background_box_shadow_spread: "#000000",
    profile_border_width: 2,
    profile_border_style: "solid",
    profile_border_color: "#ffffff",
  },
  error: null,
};

// -------------------- Slice --------------------

const appreanceSlice = createSlice({
  name: "appreance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAppreance.fulfilled, (state, action) => {
        state.appreance = action.payload;
      })
      .addCase(updateAppreanceTheme.fulfilled, (state, action) => {
        state.appreanceTheme = action.payload;
      })
      .addCase(getTheme.pending, (state) => {
        state.loader = true;
      })
      .addCase(getTheme.fulfilled, (state, action) => {
        state.loader = false;
        state.getThemeData = action.payload;
      })
      .addCase(getTheme.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(getSingleThemeData.pending, (state) => {
        state.loader = true;
      })
      .addCase(getSingleThemeData.fulfilled, (state, action) => {
        state.loader = false;
        state.singleThemeData = action.payload;
      })
      .addCase(getSingleThemeData.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      });
  },
});

export default appreanceSlice.reducer;
