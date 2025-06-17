"use client";

import AnalyticsPanel from "@/components/Bio/analytics/AnalyticsPanel";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  totalAnalytics,
  totalClickAnalytics,
  viewAnalytics,
  viewAnalyticsIds,
} from "@/redux/Action/analytics.action";
import Timeline from "@/components/Bio/analytics/Timeline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentPanel from "@/components/Bio/analytics/ContentPanel";

const Analytics = () => {
  const dispatch = useDispatch();

  const today = new Date();
  const last7Days = new Date(today);
  last7Days.setDate(today.getDate() - 7);

  // Separate states for activity and content calendars
  const [isActivityCalendarOpen, setIsActivityCalendarOpen] = useState(false);
  const [isContentCalendarOpen, setIsContentCalendarOpen] = useState(false);

  // Separate date ranges for activity and content
  const [activityDateRange, setActivityDateRange] = useState([last7Days, today]);
  const [startDateActivity, endDateActivity] = activityDateRange;

  const [contentDateRange, setContentDateRange] = useState([last7Days, today]);
  const [startDateContent, endDateContent] = contentDateRange;

  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    if (startDateActivity && endDateActivity) {
      callAPIs(startDateActivity, endDateActivity);
    }
  }, []);

  const handleFilterClick = (type) => {
    if (type === "activity") {
      setIsActivityCalendarOpen((prev) => !prev);
      setIsContentCalendarOpen(false);
    } else if (type === "content") {
      setIsContentCalendarOpen((prev) => !prev);
      setIsActivityCalendarOpen(false);
    }
  };

  const handleActivityDateChange = (update) => {
    setActivityDateRange(update);
    if (update[0] && update[1]) {
      callAPIs(update[0], update[1]);
    }
  };

  const handleContentDateChange = (update) => {
    setContentDateRange(update);
    if (update[0] && update[1]) {
      callAPIsContentId(update[0], update[1]);
    }
  };

  const callAPIs = (start, end) => {
    const formattedStartDate = start.toISOString().split("T")[0];
    const formattedEndDate = end.toISOString().split("T")[0];
    setIsActivityCalendarOpen(false);
    dispatch(viewAnalytics(formattedStartDate, formattedEndDate));
    dispatch(totalAnalytics(formattedStartDate, formattedEndDate));
    dispatch(totalClickAnalytics(formattedStartDate, formattedEndDate));
  };

  const callAPIsContentId = (start, end) => {
    const formattedStartDate = start.toISOString().split("T")[0];
    const formattedEndDate = end.toISOString().split("T")[0];
    setIsContentCalendarOpen(false);
    if (selectedId) {
      dispatch(viewAnalyticsIds(formattedStartDate, formattedEndDate, selectedId));
    }
  };

  const handleDropdownChange = async (event) => {
    const [startDate, endDate] = contentDateRange;
    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];
    setSelectedId(event.target.value);
    dispatch(viewAnalyticsIds(formattedStartDate, formattedEndDate, event.target.value));
  };

  return (
    <div className="h-screen overflow-auto w-full">
      <div className="w-full flex items-center justify-between rounded-lg md:h-[6.25rem] p-6">
        <div className="w-full">
          <h1 className="sm:text-[1.75rem] text-lg font-semibold mr-4">Analytics</h1>
        </div>
      </div>
      <Timeline />
      <div className="flex-col gap-4 px-4 pb-[140px] md:pb-4 grid sm:grid-cols-2 grid-cols-1">
        {/* Activity Section */}
        <div className="p-8 bg-white rounded-lg w-full">
          <div className="flex items-start justify-between mb-4 sm:mb-3 relative">
            <h3 className="text-black text-md font-semibold !text-lg">Activity</h3>
            <button
              onClick={() => handleFilterClick("activity")}
              className="bg-white flex gap-2 items-center px-4 py-3 rounded-[12px] border border-1 border-sand hover:bg-chalk focus:ring-2 ring-black"
            >
              Filter
            </button>
            {isActivityCalendarOpen && (
              <div className="absolute top-12 right-0 z-50 bg-white shadow-lg p-4 rounded-lg">
                <label className="block text-sm font-medium mb-2">Select Date Range</label>
                <DatePicker
                  selected={startDateActivity}
                  onChange={handleActivityDateChange}
                  startDate={startDateActivity}
                  endDate={endDateActivity}
                  selectsRange
                  inline
                  maxDate={new Date()}
                />
              </div>
            )}
          </div>
          <AnalyticsPanel />
        </div>

        {/* Content Section */}
        <div className="p-8 bg-white rounded-lg w-full">
          <div className="flex items-start justify-between mb-4 sm:mb-3 relative">
            <h3 className="text-black text-md font-semibold !text-lg">Content</h3>
            <button
              onClick={() => handleFilterClick("content")}
              className="bg-white flex gap-2 items-center px-4 py-3 rounded-[12px] border border-1 border-sand hover:bg-chalk focus:ring-2 ring-black"
            >
              Filter
            </button>
            {isContentCalendarOpen && (
              <div className="absolute top-12 right-0 z-50 bg-white shadow-lg p-4 rounded-lg">
                <label className="block text-sm font-medium mb-2">Select Date Range</label>
                <DatePicker
                  selected={startDateContent}
                  onChange={handleContentDateChange}
                  startDate={startDateContent}
                  endDate={endDateContent}
                  selectsRange
                  inline
                  maxDate={new Date()}
                />
              </div>
            )}
          </div>
          <ContentPanel handleDropdownChange={handleDropdownChange} selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;