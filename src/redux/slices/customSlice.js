import API from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ToastNotification from "@/controller/ToastNotification";

export const createShortLink = createAsyncThunk(
  "createShortLink",
  async (payload, { rejectWithValue }) => {
    try {
      const apiCall = await API({
        url: `/shortlink`,
        method: "post",
        data: payload,
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        ToastNotification.success(apiCall?.data?.message || "Shortlink generated successfully");
        return apiCall?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const customizeQR = createAsyncThunk(
  "addCustomizeQR",
  async (payload, { rejectWithValue }) => {
    try {
      const data = {
        customize: payload?.customize,
        is_default: payload?.is_default,
        name: payload?.name,
      };

      const apiCall = await API({
        url: `/customize-qr`,
        method: "post",
        data,
      });
      console.log(apiCall, "apiCall");
      if (apiCall.status === 201 || apiCall.status === 304) {
        ToastNotification.success(apiCall?.data?.message || "Customize QR created successfully");
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getCustomizeQR = createAsyncThunk(
  "getCustomizeQR",
  async (payload, { rejectWithValue }) => {
    try {
      const params = {
        is_default: payload?.is_default,
      };

      const apiCall = await API({
        url: `/customize-qr`,
        method: "get",
        params,
      });
      console.log(apiCall, "apiCall");
      if (apiCall.status === 200 || apiCall.status === 304) {
        // toast.success(apiCall?.data?.message || "Customize QR get successfully");
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getAllShortLinks = createAsyncThunk(
  "getAllShortLinks",
  async (payload, { rejectWithValue }) => {
    try {
      const { page, limit } = payload;

      const apiCall = await API({
        url: `/shortlinks?page=${page}&limit=${limit}`,
        method: "get",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getCustomizeQrById = createAsyncThunk(
  "getCustomizeQrById",
  async (id, { rejectWithValue }) => {
    try {
      const apiCall = await API({
        url: `/customize-qr/${id}`,
        method: "get",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getShortLinkById = createAsyncThunk(
  "getShortLinkById",
  async (id, { rejectWithValue }) => {
    try {
      const apiCall = await API({
        url: `/getshortlink/${id}`,
        method: "get",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const editShortLink = createAsyncThunk(
  "editShortLink",
  async (payload, { rejectWithValue }) => {
    const { id } = payload;
    try {
      const apiCall = await API({
        url: `/editshortlink/${id}`,
        method: "put",
        data: payload,
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        ToastNotification.success(apiCall?.data?.message || "Shortlink updated successfully");

        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const editCustomizeQr = createAsyncThunk(
  "editCustomizeQr",
  async (payload, { rejectWithValue }) => {
    const { id, customize, is_default, name } = payload;
    const data = {
      customize,
      is_default,
      name,
    };
    try {
      const apiCall = await API({
        url: `/customize-qr/${id}`,
        method: "patch",
        data,
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        ToastNotification.success(apiCall?.data?.message || "Customize QR updated successfully");

        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const deleteShortLink = createAsyncThunk(
  "deleteShortLink",
  async (id, { rejectWithValue }) => {
    try {
      const apiCall = await API({
        url: `/deleteshortlink/${id}`,
        method: "delete",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        ToastNotification.success(apiCall?.data?.message || "Shortlink Deleted successfully");
        return apiCall?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const deleteCustomizeQr = createAsyncThunk(
  "deleteCustomizeQr",
  async (id, { rejectWithValue }) => {
    try {
      const apiCall = await API({
        url: `/customize-qr/${id}`,
        method: "delete",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        ToastNotification.success(apiCall?.data?.message || "Customize QR Deleted successfully");
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getAnalytics = createAsyncThunk(
  "getAnalytics",
  async (payload, { rejectWithValue }) => {
    const { startDate, endDate } = payload;

    try {
      const apiCall = await API({
        url: `/view-analytics?startDate=${startDate}&endDate=${endDate}`,
        method: "get",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        return apiCall?.data?.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  value: 5,

  createShortLinkStatus: "idle",
  createShortLinkError: "",

  shortLinkStatus: "idle",
  shortLinkData: [],
  shortLinkError: "",

  customizeQRDataStatus: "idle",
  customizeQRData: [],
  customizeQRError: "",

  shortLinkByIdStatus: "idle",
  shortLinkByIdData: {},
  shortLinkByIdError: "",

  customizeQrByIdStatus: "idle",
  customizeQrByIdData: {},
  customizeQrByIdError: "",

  editShortLinkStatus: "idle",
  editShortLinkError: "",

  editCustomizeQrStatus: "idle",
  editCustomizeQrError: "",

  deleteShortLinkStatus: "idle",
  deleteShortLinkError: "",

  analyticsStatus: "idle",
  analyticsData: [],
  analyticsError: "error",
};

export const customSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetCreateShortLinkStatus: (state) => {
      state.createShortLinkStatus = "idle";
    },
    resetEditShortLinkStatus: (state) => {
      state.editShortLinkStatus = "idle";
    },
    resetEditCustomizeQrStatus: (state) => {
      state.editCustomizeQrStatus = "idle";
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShortLink.pending, (state, action) => {
        state.createShortLinkStatus = "pending";
      })
      .addCase(createShortLink.fulfilled, (state, action) => {
        state.createShortLinkStatus = "success";
      })
      .addCase(createShortLink.rejected, (state, action) => {
        state.createShortLinkStatus = "error";
        state.createShortLinkError = action.error;
        console.log("error in createShortLink", action.error);
      })

      .addCase(getAllShortLinks.pending, (state, action) => {
        state.shortLinkStatus = "pending";
      })
      .addCase(getAllShortLinks.fulfilled, (state, action) => {
        state.shortLinkStatus = "success";
        state.shortLinkData = action.payload;
      })
      .addCase(getAllShortLinks.rejected, (state, action) => {
        state.shortLinkStatus = "error";
        state.shortLinkError = action.error;
        console.log("error in getAllShortLink", action.error);
      })
      .addCase(getCustomizeQR.pending, (state, action) => {
        state.customizeQRDataStatus = "pending";
      })
      .addCase(getCustomizeQR.fulfilled, (state, action) => {
        state.customizeQRDataStatus = "success";
        state.customizeQRData = action.payload;
      })
      .addCase(getCustomizeQR.rejected, (state, action) => {
        state.customizeQRDataStatus = "error";
        state.customizeQRError = action.error;
        console.log("error in getAllShortLink", action.error);
      })

      .addCase(getShortLinkById.pending, (state, action) => {
        state.shortLinkByIdStatus = "pending";
      })
      .addCase(getShortLinkById.fulfilled, (state, action) => {
        state.shortLinkByIdStatus = "success";
        state.shortLinkByIdData = action.payload;
      })
      .addCase(getShortLinkById.rejected, (state, action) => {
        state.shortLinkByIdStatus = "error";
        state.shortLinkByIdError = action.error;
        console.log("error in getShortLinkById", action.error);
      })

      .addCase(getCustomizeQrById.pending, (state, action) => {
        state.customizeQrByIdStatus = "pending";
      })
      .addCase(getCustomizeQrById.fulfilled, (state, action) => {
        state.customizeQrByIdStatus = "success";
        state.customizeQrByIdData = action.payload;
      })
      .addCase(getCustomizeQrById.rejected, (state, action) => {
        state.customizeQrByIdStatus = "error";
        state.customizeQrByIdError = action.error;
        console.log("error in getCustomizeQrById", action.error);
      })

      .addCase(editShortLink.pending, (state, action) => {
        state.editShortLinkStatus = "pending";
      })
      .addCase(editShortLink.fulfilled, (state, action) => {
        state.editShortLinkStatus = "success";
      })
      .addCase(editShortLink.rejected, (state, action) => {
        state.editShortLinkStatus = "error";
        state.editShortLinkError = action.error;
        console.log("error in EditShortLink", action.error);
      })

      .addCase(editCustomizeQr.pending, (state, action) => {
        state.editCustomizeQrStatus = "pending";
      })
      .addCase(editCustomizeQr.fulfilled, (state, action) => {
        state.editCustomizeQrStatus = "success";
      })
      .addCase(editCustomizeQr.rejected, (state, action) => {
        state.editCustomizeQrStatus = "error";
        state.editCustomizeQrError = action.error;
        console.log("error in EditShortLink", action.error);
      })

      .addCase(deleteShortLink.pending, (state, action) => {
        state.deleteShortLinkStatus = "pending";
      })
      .addCase(deleteShortLink.fulfilled, (state, action) => {
        state.deleteShortLinkStatus = "success";
      })
      .addCase(deleteShortLink.rejected, (state, action) => {
        state.deleteShortLinkStatus = "error";
        state.deleteShortLinkError = action.error;
        console.log("error in deleteShortLink", action.error);
      })

      .addCase(getAnalytics.pending, (state, action) => {
        state.analyticsStatus = "pending";
      })
      .addCase(getAnalytics.fulfilled, (state, action) => {
        state.analyticsStatus = "success";
        state.analyticsData = action.payload;
      })
      .addCase(getAnalytics.rejected, (state, action) => {
        state.analyticsStatus = "error";
        state.analyticsError = action.error;
        console.log("error in getAnalytics", action.error);
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementByAmount,
  resetCreateShortLinkStatus,
  resetEditShortLinkStatus,
  resetEditCustomizeQrStatus,
} = customSlice.actions;

export default customSlice.reducer;
