import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/api";
import ToastNotification from "@/controller/ToastNotification";

// Async Thunks
export const viewAnalytics = createAsyncThunk(
  "analytics/viewAnalytics",
  async ({ startDate, endDate }, { rejectWithValue }) => {
    try {
      const res = await API({
        url: `/analytics/view-analytics?startDate=${startDate}&endDate=${endDate}`,
        method: "get",
      });
      return res?.data?.data;
    } catch (err) {
      ToastNotification.error(err);
      return rejectWithValue(err);
    }
  },
);

export const viewAnalyticsIds = createAsyncThunk(
  "analytics/viewAnalyticsIds",
  async ({ startDate, endDate, id }, { rejectWithValue }) => {
    try {
      const res = await API({
        url: `/analytics/view-analytics?startDate=${startDate}&endDate=${endDate}&link=${id}`,
        method: "get",
      });
      return res?.data?.data;
    } catch (err) {
      ToastNotification.error(err);
      return rejectWithValue(err);
    }
  },
);

export const viewBioLinks = createAsyncThunk(
  "analytics/viewBioLinks",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API({
        url: `bio/getAllLinks`,
        method: "get",
      });
      return res?.data?.data;
    } catch (err) {
      ToastNotification.error(err);
      return rejectWithValue(err);
    }
  },
);

export const totalAnalytics = createAsyncThunk(
  "analytics/totalAnalytics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API({
        url: `/analytics/total-analytics`,
        method: "get",
      });
      return res?.data?.data;
    } catch (err) {
      ToastNotification.error(err);
      return rejectWithValue(err);
    }
  },
);

export const totalClickAnalytics = createAsyncThunk(
  "analytics/totalClickAnalytics",
  async ({ startDate, endDate }, { rejectWithValue }) => {
    try {
      const res = await API({
        url: `/analytics/click-rate-analytics?startDate=${startDate}&endDate=${endDate}`,
        method: "get",
      });
      return res?.data?.data;
    } catch (err) {
      ToastNotification.error(err);
      return rejectWithValue(err);
    }
  },
);

// Initial State
const initialState = {
  loader: false,
  analyticsData: null,
  analyticsIdData: null,
  bioLinks: [],
  totalAnalytics: null,
  totalClickAnalytics: null,
  error: null,
};

// Slice
const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // viewAnalytics
      .addCase(viewAnalytics.pending, (state) => {
        state.loader = true;
      })
      .addCase(viewAnalytics.fulfilled, (state, action) => {
        state.loader = false;
        state.analyticsData = action.payload;
      })
      .addCase(viewAnalytics.rejected, (state, action) => {
        state.loader = false;
        state.analyticsData = null;
        state.error = action.payload;
      })

      // viewAnalyticsIds
      .addCase(viewAnalyticsIds.pending, (state) => {
        state.loader = true;
      })
      .addCase(viewAnalyticsIds.fulfilled, (state, action) => {
        state.loader = false;
        state.analyticsIdData = action.payload;
      })
      .addCase(viewAnalyticsIds.rejected, (state, action) => {
        state.loader = false;
        state.analyticsIdData = null;
        state.error = action.payload;
      })

      // viewBioLinks
      .addCase(viewBioLinks.pending, (state) => {
        state.loader = true;
      })
      .addCase(viewBioLinks.fulfilled, (state, action) => {
        state.loader = false;
        state.bioLinks = action.payload;
      })
      .addCase(viewBioLinks.rejected, (state, action) => {
        state.loader = false;
        state.bioLinks = [];
        state.error = action.payload;
      })

      // totalAnalytics
      .addCase(totalAnalytics.pending, (state) => {
        state.loader = true;
      })
      .addCase(totalAnalytics.fulfilled, (state, action) => {
        state.loader = false;
        state.totalAnalytics = action.payload;
      })
      .addCase(totalAnalytics.rejected, (state, action) => {
        state.loader = false;
        state.totalAnalytics = null;
        state.error = action.payload;
      })

      // totalClickAnalytics
      .addCase(totalClickAnalytics.pending, (state) => {
        state.loader = true;
      })
      .addCase(totalClickAnalytics.fulfilled, (state, action) => {
        state.loader = false;
        state.totalClickAnalytics = action.payload;
      })
      .addCase(totalClickAnalytics.rejected, (state, action) => {
        state.loader = false;
        state.totalClickAnalytics = null;
        state.error = action.payload;
      });
  },
});

export default analyticsSlice.reducer;
