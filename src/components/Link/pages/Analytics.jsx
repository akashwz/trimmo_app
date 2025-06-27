"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { getAnalytics } from "@/store/slices/customSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const dispatch = useDispatch();
  const { analyticsStatus, analyticsData, analyticsError } = useSelector(
    (state) => state.customSlice
  );
  const [fromDate, setFromDate] = useState("2020-01-25");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setToDate(formattedDate);
  }, []);

  useEffect(() => {
    if (fromDate && toDate) {
      const payload = {
        startDate: fromDate,
        endDate: toDate,
      };
      dispatch(getAnalytics(payload));
    }
  }, [fromDate, toDate]);

  // const data = {
  //   labels: analyticsData.map((item) => item.date), // Dates (X-axis)
  //   datasets: [
  //     {
  //       label: "Clicks",
  //       data: analyticsData.map((item) => item.clicks), // Clicks (Y-axis)
  //       borderColor: "#10B981", // Tailwind green-500
  //       backgroundColor: "rgba(16, 185, 129, 0.2)",
  //       tension: 0.4, // Curved lines
  //       fill: true, // Make it filled under the curve
  //     },
  //     {
  //       label: "Scans",
  //       data: analyticsData.map((item) => item.scans), // Scans (Y-axis)
  //       borderColor: "#3B82F6", // Tailwind blue-500
  //       backgroundColor: "rgba(59, 130, 246, 0.2)",
  //       tension: 0.4, // Curved lines
  //       fill: true, // Make it filled under the curve
  //     },
  //   ],
  // };

  // Sample data with dates and click values

  const allData = [
    { date: "2023-11-20", clicks: 10, scans: 5 },
    { date: "2022-11-21", clicks: 20, scans: 15 },
    { date: "2024-11-22", clicks: 15, scans: 10 },
    { date: "2024-11-23", clicks: 30, scans: 25 },
    { date: "2024-11-24", clicks: 25, scans: 20 },
  ];

  const filterData = () => {
    const filtered = allData.filter(
      (item) =>
        (fromDate ? item.date >= fromDate : true) &&
        (toDate ? item.date <= toDate : true)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [fromDate, toDate]);

  // Chart data - Replace filteredData with analyticsData 
  const data = {
    labels: filteredData.map((item) => item.date), // Dates (X-axis)
    datasets: [
      {
        label: "Clicks",
        data: filteredData.map((item) => item.clicks), // Clicks (Y-axis)
        borderColor: "#10B981", // Tailwind green-500
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Scans",
        data: filteredData.map((item) => item.scans), // Scans (Y-axis)
        borderColor: "#3B82F6", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4, // Curved lines
        fill: true, // Make it filled under the curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Analytics Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        min: 0, // Start Y-axis from 0
      },
    },
  };

  return (
    <div className="h-[93vh] flex flex-col w-full">
      <div className="max-w-6xl mx-auto p-4 w-full">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-primarycolor">
          Analytics
        </h1>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 text-black">
          <div className="flex flex-col">
            <label htmlFor="from-date" className="text-sm font-medium mb-1">
              From:
            </label>
            <input
              id="from-date"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-primarycolor"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to-date" className="text-sm font-medium mb-1">
              To:
            </label>
            <input
              id="to-date"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-primarycolor"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-6" />

        {/* Chart */}
        <div
          className="w-full bg-white rounded shadow-sm p-1 sm:p-4"
          style={{ height: "400px" }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
