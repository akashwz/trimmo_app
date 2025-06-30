import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api";
import ToastNotification from "@/controller/ToastNotification";
import { setCookie, deleteCookie } from "cookies-next";

// ----------- Thunks -----------

export const checkUserName = createAsyncThunk(
  "auth/checkUserName",
  async (username, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/users/username/${username}`, method: "get" });
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const checkEmailPhone = createAsyncThunk(
  "auth/checkEmailPhone",
  async (identifier, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/users/identifier/${identifier}`, method: "get" });
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const socialLogin = createAsyncThunk(
  "auth/socialLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/users/social-login`, method: "post", data: payload });
      if (res?.data?.data?.token) {
        setCookie("token", res?.data?.data?.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        localStorage.setItem("username", res?.data?.data?.username);
      }
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const thirdPartyAuth = createAsyncThunk(
  "auth/thirdPartyAuth",
  async ({ encrypted, username }, { dispatch, rejectWithValue }) => {
    try {
      const res = await API({ url: `/app/auth/${encrypted}`, method: "get" });
      ToastNotification.success(res?.data?.message);
      dispatch(getBio(username));
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res = await API({ url: `/users/edit`, method: "patch", data });
      dispatch(getUser());
      dispatch(getBio(res?.data?.data?.username));
      ToastNotification.success("User details updated successfully!");
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const addReportUser = createAsyncThunk(
  "auth/addReportUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/reports`, method: "post", data });
      if (res?.data?.code === 201 || res?.data?.status === 304) {
        ToastNotification.success("Add report successfully!");
      }
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const addBio = createAsyncThunk("auth/addBio", async (data, { rejectWithValue }) => {
  try {
    const res = await API({ url: `/bio`, method: "post", data });
    return res?.data?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const emailLogin = createAsyncThunk("auth/emailLogin", async (data, { rejectWithValue }) => {
  try {
    const res = await API({ url: `users/login`, method: "post", data });
    if (res?.data?.data?.token) {
      setCookie("token", res?.data?.data?.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      localStorage.setItem("username", res?.data?.data?.username);
    }
    return res?.data?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API({ url: `users/forgot-password`, method: "patch", data });
      if (res?.data?.data?.profile) {
        ToastNotification.success("Forgot password successfully!");
      }
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const getShopData = createAsyncThunk(
  "auth/getShopData",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API({ url: `app/shop/${data}`, method: "get" });
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const registration = createAsyncThunk(
  "auth/registration",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API({ url: `users/register`, method: "post", data });
      if (res?.data?.code === 201) {
        ToastNotification.success(res?.data?.message);
      }
      return res?.data;
    } catch (error) {
      ToastNotification.error(error?.message || "An error occurred");
      return rejectWithValue(error);
    }
  },
);

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (data, { rejectWithValue }) => {
  try {
    const res = await API({ url: `users/verify-otp`, method: "post", data });
    if (res?.data?.data) {
      ToastNotification.success("OTP verify successfully!");
      if (!localStorage.getItem("forgetPassword") === true) {
        setCookie("token", res?.data?.data?.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
      }
    }
    return res?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const passwordChange = createAsyncThunk(
  "auth/passwordChange",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API({ url: `users/change-password`, method: "patch", data });
      if (res?.data?.data) {
        ToastNotification.success("Password change successfully!");
      }
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const resetOtp = createAsyncThunk("auth/resetOtp", async (data, { rejectWithValue }) => {
  try {
    const res = await API({ url: `users/otp_send`, method: "post", data });
    if (res?.data) {
      ToastNotification.success("OTP sent in your email!");
    }
    return res?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const getAnalytics = createAsyncThunk(
  "auth/getAnalytics",
  async ({ userId, linkId }, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/analytics/${userId}?link=${linkId}`, method: "get" });
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const getNewslatter = createAsyncThunk(
  "auth/getNewslatter",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/bio/getLinkDataById/${id}`, method: "get" });
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const getBio = createAsyncThunk("auth/getBio", async (id, { rejectWithValue }) => {
  try {
    const res = await API({ url: `/bio/${id}`, method: "get" });
    return res?.data?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(null);
  }
});

export const updateBio = createAsyncThunk(
  "auth/updateBio",
  async ({ id, data, userName }, { rejectWithValue, dispatch }) => {
    try {
      const res = await API({ url: `/bio/${id}`, method: "patch", data });
      dispatch(getBio(userName));
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const updateWidget = createAsyncThunk(
  "auth/updateWidget",
  async ({ id, data, userName }, { rejectWithValue, dispatch }) => {
    try {
      const res = await API({ url: `/bio/widget/${id}`, method: "patch", data });
      dispatch(getBio(userName));
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const deleteWidget = createAsyncThunk(
  "auth/deleteWidget",
  async ({ id, userName }, { rejectWithValue, dispatch }) => {
    try {
      const res = await API({ url: `/bio/widget/${id}`, method: "delete" });
      dispatch(getBio(userName));
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const getSingleAppInfo = createAsyncThunk(
  "auth/getSingleAppInfo",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await API({ url: `/plateforms/${id}`, method: "get" });
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const createBio = createAsyncThunk(
  "auth/createBio",
  async ({ userName, data }, { rejectWithValue, dispatch }) => {
    try {
      const res = await API({ url: `/bio`, method: "put", data });
      dispatch(getBio(userName));
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const createWidget = createAsyncThunk(
  "auth/createWidget",
  async ({ userName, data }, { rejectWithValue, dispatch }) => {
    try {
      const res = await API({ url: `/bio/widget`, method: "post", data });
      dispatch(getBio(userName));
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const deleteBio = createAsyncThunk(
  "auth/deleteBio",
  async ({ id, userName, type }, { rejectWithValue, dispatch }) => {
    try {
      const res = await API({ url: `/bio/${id}`, method: "delete", data: { type: type } });
      dispatch(getBio(userName));
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const clearEditData = createAsyncThunk("auth/clearEditData", async (data) => data);

export const getUser = createAsyncThunk("auth/getUser", async ({ rejectWithValue }) => {
  try {
    const res = await API({ url: `/users`, method: "get" });
    return res?.data?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(null);
  }
});

export const deleteAccount = createAsyncThunk("auth/deleteAccount", async ({ rejectWithValue }) => {
  try {
    const res = await API({ url: `/users/delete-account`, method: "delete" });
    return res?.data?.data;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(null);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    if (typeof window !== "undefined") {
      deleteCookie("token");
      localStorage.removeItem("selectedCard");
      localStorage.removeItem("username");
    }
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const clearBio = createAsyncThunk("auth/clearBio", async (_, { rejectWithValue }) => {
  try {
    return null;
  } catch (error) {
    ToastNotification.error(error);
    return rejectWithValue(error);
  }
});

export const getAllPlateform = createAsyncThunk(
  "auth/getAllPlateform",
  async (types, { rejectWithValue }) => {
    try {
      const res = await API({
        url: `/plateforms?type[0]=${types[0]}&type[1]=${types[1]}&type[2]=${types[2]}&type[3]=${types[3]}&status=true`,
        method: "get",
      });
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

export const getProductCategory = createAsyncThunk(
  "auth/getProductCategory",
  async ({ type, id, search }, { rejectWithValue }) => {
    try {
      const res = await API.get(`/app/shop/${type}/${id}?search=${search}`);
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const deleteAuthorizedApp = createAsyncThunk(
  "auth/deleteAuthorizedApp",
  async ({ id, userName }, { dispatch, rejectWithValue }) => {
    try {
      const res = await API.delete(`/app/auth/remove/${id}`);
      ToastNotification.success("Authorization Remove successfully!");
      dispatch(getBio(userName));
      return res?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(error);
    }
  },
);

export const faceBookItem = createAsyncThunk(
  "auth/faceBookItem",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`/app/fb/pages`);
      return res?.data?.data;
    } catch (error) {
      ToastNotification.error(error);
      return rejectWithValue(null);
    }
  },
);

// ----------- Slice -----------

const initialState = {
  userNames: null,
  userData: null,
  editData: null,
  platformData: null,
  bioData: null,
  anylaticsData: null,
  loginData: null,
  checkEmailPhoneData: null,
  registerData: null,
  otpData: null,
  otpResetData: null,
  allPlateformItems: null,
  searchDataApp: null,
  faceBookData: null,
  getThemeData: null,
  getSingleAppData: null,
  newslatterData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUserName.fulfilled, (state, action) => {
        state.userNames = action.payload;
      })
      .addCase(checkUserName.rejected, (state) => {
        state.userNames = null;
      })

      .addCase(checkEmailPhone.fulfilled, (state, action) => {
        state.checkEmailPhoneData = action.payload;
      })
      .addCase(checkEmailPhone.rejected, (state) => {
        state.checkEmailPhoneData = null;
      })

      .addCase(socialLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(socialLogin.rejected, (state) => {
        state.loading = false;
      })

      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      })
      .addCase(editUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(addReportUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addReportUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addReportUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(addBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBio.fulfilled, (state, action) => {
        state.loading = false;
        state.bioData = action.payload;
      })
      .addCase(addBio.rejected, (state) => {
        state.loading = false;
      })

      .addCase(emailLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(emailLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.loginData = action.payload;
      })
      .addCase(emailLogin.rejected, (state) => {
        state.loading = false;
      })

      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(forgetPassword.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getShopData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShopData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getShopData.rejected, (state) => {
        state.loading = false;
      })

      .addCase(registration.pending, (state) => {
        state.loading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.registerData = action.payload;
      })
      .addCase(registration.rejected, (state) => {
        state.loading = false;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpData = action.payload;
      })
      .addCase(verifyOtp.rejected, (state) => {
        state.loading = false;
      })

      .addCase(passwordChange.pending, (state) => {
        state.loading = true;
      })
      .addCase(passwordChange.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(passwordChange.rejected, (state) => {
        state.loading = false;
      })

      .addCase(resetOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpResetData = action.payload;
      })
      .addCase(resetOtp.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getAnalytics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.anylaticsData = action.payload;
      })
      .addCase(getAnalytics.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getNewslatter.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewslatter.fulfilled, (state, action) => {
        state.loading = false;
        state.newslatterData = action.payload;
      })
      .addCase(getNewslatter.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBio.fulfilled, (state, action) => {
        state.loading = false;
        state.bioData = action.payload;
      })
      .addCase(getBio.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBio.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(updateBio.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateWidget.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateWidget.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(updateWidget.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteWidget.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWidget.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(deleteWidget.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getSingleAppInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleAppInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.getSingleAppData = action.payload;
      })
      .addCase(getSingleAppInfo.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBio.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createBio.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createWidget.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWidget.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createWidget.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBio.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteBio.rejected, (state) => {
        state.loading = false;
      })

      .addCase(clearEditData.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearEditData.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = null;
      })
      .addCase(clearEditData.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(deleteAccount.rejected, (state) => {
        state.loading = false;
      })

      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(logOut.rejected, (state) => {
        state.loading = false;
      })

      .addCase(clearBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearBio.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(clearBio.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getAllPlateform.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPlateform.fulfilled, (state, action) => {
        state.loading = false;
        state.allPlateformItems = action.payload;
      })
      .addCase(getAllPlateform.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getProductCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.searchDataApp = action.payload;
      })
      .addCase(getProductCategory.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteAuthorizedApp.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAuthorizedApp.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(deleteAuthorizedApp.rejected, (state) => {
        state.loading = false;
      })

      .addCase(faceBookItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(faceBookItem.fulfilled, (state, action) => {
        state.loading = false;
        state.faceBookData = action.payload;
      })
      .addCase(faceBookItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
