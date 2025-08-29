"use client";

import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ===== Chart Data with Months ===== */
const data = [
  { name: "January", uv: 400, pv: 2400, amt: 2400 },
  { name: "February", uv: 300, pv: 2210, amt: 2210 },
  { name: "March", uv: 200, pv: 2290, amt: 2290 },
  { name: "April", uv: 278, pv: 2000, amt: 2000 },
  { name: "May", uv: 189, pv: 2181, amt: 2181 },
  { name: "June", uv: 239, pv: 2500, amt: 2500 },
];

/* ===== Triangle Bar ===== */
const TriangleBar = ({ fill, x, y, width, height }) => {
  const path = `M${x},${y + height}L${x + width / 2},${y}L${x + width},${
    y + height
  }Z`;
  return <path d={path} stroke="none" fill={fill} />;
};

/* ===== Tooltip ===== */
function getIntroOfPage(label) {
  switch (label) {
    case "January":
      return "January stats overview";
    case "February":
      return "February stats overview";
    case "March":
      return "March stats overview";
    case "April":
      return "April stats overview";
    case "May":
      return "May stats overview";
    case "June":
      return "June stats overview";
    default:
      return "";
  }
}

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-custom rounded-lg p-3 shadow-md">
        <p className="font-medium text-gray-800">{`${label} : ${payload[0].value}`}</p>
        <p className="text-sm text-gray-600">{getIntroOfPage(label)}</p>
      </div>
    );
  }
  return null;
}

/* ===== Chart ===== */
const RenderBarChart = ({ color }) => (
  <div className="w-full h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="uv" shape={<TriangleBar />} radius={[4, 4, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

/* ===== Alerts Card ===== */
const RecentAlerts = () => {
  const alerts = [
    { name: "Muhamamd Ali", date: "August 25, 12:02", status: "lead" },
    { name: "Jawad", date: "August 06, 15:09", status: "lead" },
    { name: "Ahad Ali", date: "August 06, 15:09", status: "lead" },
    { name: "Test02", date: "July 14, 13:06", status: "lead" },
    { name: "Jawad Ahmed", date: "July 14, 12:59", status: "lead" },
  ];

  return (
    <div className="border-custom rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Recent Alerts</h2>
        <button className="text-sm font-bold text-gray-800">View All</button>
      </div>

      <div className="flex flex-col gap-3">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-none"
          >
            {/* Left: avatar + info */}
            <div className="flex items-center gap-3">
              <img
                src="/images/lead-default-profile.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="text-sm font-medium text-gray-800">
                  {alert.name}
                </span>
                <span className="block text-xs text-gray-500">
                  {alert.date}
                </span>
              </div>
            </div>
            {/* Right: badge */}
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
              {alert.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===== Main Panel ===== */
const RecentAlertsPanel = () => {
  const YELLOW = "var(--bg-tapwise-yellow)";
  const GREEN = "#22c55e";

  const [selected, setSelected] = useState("green");
  const chartColor = useMemo(
    () => (selected === "yellow" ? YELLOW : GREEN),
    [selected]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      {/* LEFT: Chart */}
      <div className="md:col-span-2 border-custom rounded-lg p-4 bg-white shadow-sm">
        {/* Switcher row */}
        <div className="w-full flex justify-center items-center gap-4 mb-4">
          <button
            onClick={() => setSelected("green")}
            className={`rounded-md transition-transform hover:scale-105 focus:outline-none ${
              selected === "green"
                ? "ring-2 ring-offset-2 ring-[#22c55e]"
                : "ring-0"
            }`}
          >
            <img
              src="/images/greenbox.png"
              alt="Green"
              className="h-6 w-10 object-contain rounded"
            />
          </button>
          <h2 className="text-sm font-semibold text-gray-800">Leads</h2>

          <button
            onClick={() => setSelected("yellow")}
            className={`rounded-md transition-transform hover:scale-105 focus:outline-none ${
              selected === "yellow"
                ? "ring-2 ring-offset-2 ring-[var(--bg-tapwise-yellow)]"
                : "ring-0"
            }`}
          >
            <img
              src="/images/yellowbox.png"
              alt="Yellow"
              className="h-6 w-10 object-contain rounded"
            />
          </button>
          <h2 className="text-sm font-semibold text-gray-800">Top</h2>
        </div>

        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          Stats Last 6 Months
        </h2>
        <RenderBarChart color={chartColor} />
      </div>

      {/* RIGHT: Alerts */}
      <RecentAlerts />
    </div>
  );
};

export default RecentAlertsPanel;
