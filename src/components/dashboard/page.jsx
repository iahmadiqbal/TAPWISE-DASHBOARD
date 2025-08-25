"use client";

import React from "react";
import {
  FiUsers,
  FiTrendingUp,
  FiZap,
  FiCreditCard,
  FiUserPlus,
  FiBarChart2,
  FiShare2,
  FiThumbsUp,
  FiMessageSquare,
} from "react-icons/fi";

/* ---------- Stats Cards ---------- */
const StatsCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow p-4">
      <div className="flex items-center justify-between">
        <div className="bg-color-ahmad">
          <p
            className="text-sm text-tapwise-gray"
            style={{ color: "var(--color-ahamad)" }}
          >
            Total Leads
          </p>
          <p className="text-2xl font-bold text-ahmad">1,248</p>
        </div>
        <FiUsers className="h-8 w-8 text-tapwise-yellow" />
      </div>
      <p className="text-xs text-green-500 mt-1">+5% this week</p>
    </div>

    <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-tapwise-gray">Scans</p>
          <p className="text-2xl font-bold text-tapwise-black">8,940</p>
        </div>
        <FiTrendingUp className="h-8 w-8 text-green-500" />
      </div>
      <p className="text-xs text-green-500 mt-1">+12% this month</p>
    </div>

    <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-tapwise-gray">Active Cards</p>
          <p className="text-2xl font-bold text-tapwise-black">42</p>
        </div>
        <FiZap className="h-8 w-8 text-blue-500" />
      </div>
      <p className="text-xs text-tapwise-gray mt-1">of 60 available</p>
    </div>

    <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-tapwise-gray">MRR</p>
          <p className="text-2xl font-bold text-tapwise-black">$3,276</p>
        </div>
        <FiCreditCard className="h-8 w-8" />
      </div>
      <p className="text-xs text-tapwise-gray mt-1">Professional plan</p>
    </div>
  </div>
);

/* ---------- Leads Overview ---------- */
const LeadsOverview = () => (
  <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow">
    <div className="p-6 pb-3">
      <h3 className="text-tapwise-black font-semibold">Leads Overview</h3>
    </div>
    <div className="p-6 pt-0">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-tapwise-gray">
                Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-tapwise-gray">
                Email
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-tapwise-gray">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-tapwise-gray">
                Scans
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                n: "Sarah Johnson",
                e: "sarah@techsolutions.com",
                s: "interested",
                c: 54,
              },
              {
                n: "Michael Chen",
                e: "michael@creative.com",
                s: "pending",
                c: 23,
              },
              {
                n: "Emily Davis",
                e: "emily@marketing.com",
                s: "converted",
                c: 89,
              },
              { n: "James Wilson", e: "james@startup.com", s: "new", c: 12 },
            ].map((r, i) => (
              <tr
                key={i}
                className="border-b border-border hover:bg-tapwise-gray-light"
              >
                <td className="py-3 px-4 font-medium text-tapwise-black">
                  {r.n}
                </td>
                <td className="py-3 px-4 text-tapwise-gray">{r.e}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      r.s === "converted"
                        ? "bg-tapwise-yellow text-tapwise-black"
                        : r.s === "interested"
                        ? "bg-green-100 text-green-800"
                        : r.s === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {r.s}
                  </span>
                </td>
                <td className="py-3 px-4 text-tapwise-gray">{r.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ---------- Quick Actions ---------- */

/* ---------- Quick Actions (updated loveable) ---------- */
const QuickActions = () => (
  <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow">
    <div className="p-6 pb-3">
      <h3 className="text-tapwise-black font-semibold">Quick Actions</h3>
    </div>

    <div className="p-6 pt-0 grid gap-3">
      {/* 1 - Add New Lead */}
      <button className="w-full inline-flex items-center justify-center h-10 px-5 rounded-xl bg-tapwise-yellow text-tapwise-black font-medium shadow-sm hover:bg-tapwise-yellow-hover hover:shadow transition-all">
        <FiUserPlus className="h-4 w-4 mr-2" />
        Add New Lead
      </button>

      {/* 2 - Customize Card */}
      <button className="w-full inline-flex items-center justify-center h-10 px-5 rounded-xl border border-border text-tapwise-black hover:bg-tapwise-gray-light/60 transition-colors">
        <FiCreditCard className="h-4 w-4 mr-2" />
        Customize Card
      </button>

      {/* 3 - View Analytics */}
      <button className="w-full inline-flex items-center justify-center h-10 px-5 rounded-xl border border-border text-tapwise-black hover:bg-tapwise-gray-light/60 transition-colors">
        <FiBarChart2 className="h-4 w-4 mr-2" />
        View Analytics
      </button>

      {/* 4 - Export Data */}
      <button className="w-full inline-flex items-center justify-center h-10 px-5 rounded-xl border border-border text-tapwise-black hover:bg-tapwise-gray-light/60 transition-colors">
        <FiShare2 className="h-4 w-4 mr-2" />
        Export Data
      </button>
    </div>
  </div>
);

/* ---------- Client Feedback ---------- */
const ClientFeedback = () => (
  <div className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow">
    <div className="p-6 pb-3">
      <h3 className="text-tapwise-black font-semibold">Client Feedback</h3>
    </div>
    <div className="p-6 pt-0 space-y-3">
      {[
        {
          name: "Aisha Khan",
          msg: "Great experience with the NFC card!",
          icon: <FiThumbsUp className="h-4 w-4" />,
        },
        {
          name: "Omar Farooq",
          msg: "Analytics look clean and useful.",
          icon: <FiMessageSquare className="h-4 w-4" />,
        },
      ].map((f, i) => (
        <div key={i} className="p-4 border border-border rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-tapwise-yellow flex items-center justify-center text-tapwise-black font-semibold">
              {f.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1">
              <p className="font-medium text-tapwise-black">{f.name}</p>
              <p className="text-sm text-tapwise-gray">{f.msg}</p>
            </div>
            <div className="text-tapwise-gray">{f.icon}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ---------- Main Dashboard Page ---------- */
const DashboardComponents = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <StatsCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <LeadsOverview />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <QuickActions />
          <ClientFeedback />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponents;
