"use client";

import API from "@/api";
import ToastNotification from "@/controller/ToastNotification";
import { GET_BIO } from "@/redux/action.type";
import { clearBio } from "@/redux/Action/auth.action";
import { decryptData } from "@/utils/encryptionUtils";
import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { setCookie } from "cookies-next/client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Bio = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const { loader } = useSelector((state) => state.errorReducer);
  const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);
  useEffect(() => {
    dispatch(clearBio());
  }, []);
  useEffect(() => {
    if (uid) {
      getBioDetails(uid);
    } else {
      router.push(`/`);
    }
  }, [uid, dispatch]);
  const getBioDetails = async (data) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}bio/${data}`);
      const apiCall =
        process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD"
          ? { data: decryptData(response.data.encrypted), status: response.status }
          : response;
      if (apiCall?.data?.data) {
        dispatch({
          type: GET_BIO,
          payload: apiCall?.data?.data,
        });
        router.push(`/${apiCall?.data?.data?.username}`);
      } else {
        const validId = isValidObjectId(uid);
        if (validId) {
          setCookie("mongodb_id", uid);
          router.push("/register");
        }
      }
    } catch (error) {
      const errorLog =
        process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD"
          ? decryptData(error?.response?.data?.encrypted)
          : error?.response?.data;
      console.log(errorLog);
      const validId = isValidObjectId(uid);
      if (validId) {
        setCookie("mongodb_id", uid);
        router.push("/register");
      }
    }
  };
  return (
    <div>
      {loader && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
          className="flex flex-col"
        >
          <CircularProgress color="inherit" />
          <p>Loading...</p>
        </Backdrop>
      )}
    </div>
  );
};

export default Bio;
