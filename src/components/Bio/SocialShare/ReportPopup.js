"use client";

import { Dialog, Tooltip } from "@mui/material";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Transition } from "@/controller/Transitions";
import { addReportUser } from "@/redux/slices/authSlice";

const ReportPopup = ({ showReportPopup, url, closeReportPopup }) => {
  const { userData } = useSelector((state) => state?.authSlice || {});
  const dispatch = useDispatch();

  const [reportData, setReportData] = useState({
    email: "",
    reportedUrl: url || "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReportAdd = async (e) => {
    e.preventDefault();
    if (!reportData.email || !reportData.comments) {
      alert("Please fill in all required fields.");
      return;
    }
    const payload = {
      email: reportData.email,
      report_url: reportData.url || url,
      report: reportData.comments,
    };
    const response = await dispatch(addReportUser(payload));

    setReportData({
      email: "",
      reportedUrl: url || "",
      comments: "",
    });
    closeReportPopup();
  };

  return (
    <Dialog
      open={showReportPopup}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => closeReportPopup()}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        sx: {
          maxWidth: "700px !important",
          width: "100%",
          borderRadius: "12px",
        },
      }}
    >
      <div className="bg-white w-full p-6 rounded-md">
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">Report a Violation</h2>
              <p className="text-sm text-gray-600 mt-1">
                Seen something wrong in this bio? Report it here — we’ll review it shortly.
              </p>
            </div>
            <button onClick={closeReportPopup}>
              <Tooltip title="Close">
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </Tooltip>
            </button>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleReportAdd}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={reportData.email}
              onChange={handleChange}
              className="w-full bg-transparent rounded-lg border border-black focus:border-black focus:bg-white focus:ring-0 text-sm outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out peer"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL of Trimmo Bio Profile you are reporting*
            </label>
            <input
              type="text"
              name="reportedUrl"
              value={reportData.reportedUrl}
              readOnly
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your report</label>
            <textarea
              name="comments"
              value={reportData.comments}
              onChange={handleChange}
              placeholder="Your report..."
              rows="4"
              className="w-full bg-transparent rounded-lg border border-black focus:border-black focus:bg-white focus:ring-0 text-sm outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out peer"
              required
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#26D367] text-white px-8 py-2 rounded-full text-sm font-medium transition"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default ReportPopup;
