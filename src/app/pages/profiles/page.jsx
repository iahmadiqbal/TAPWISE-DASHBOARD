"use client";
import React from "react";
import {
  FiSearch,
  FiPlus,
  FiEdit,
  FiEye,
  FiTrash2,
  FiMoreHorizontal,
  FiActivity,
} from "react-icons/fi";
import { LuQrCode } from "react-icons/lu";

const Profiles = () => {
  // ------- Dummy data -------
  const mockProfiles = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@techsolutions.com",
      company: "Tech Solutions Inc.",
      cardId: "NFC-001",
      status: "active",
      lastActivity: "2 hours ago",
      scans: 145,
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@creativeagency.com",
      company: "Creative Agency",
      cardId: "NFC-002",
      status: "active",
      lastActivity: "5 hours ago",
      scans: 89,
    },
    {
      id: "3",
      name: "Emily Davis",
      email: "emily@marketingpro.com",
      company: "Marketing Pro",
      cardId: "NFC-003",
      status: "pending",
      lastActivity: "1 day ago",
      scans: 34,
    },
    {
      id: "4",
      name: "James Wilson",
      email: "james@startup.com",
      company: "Startup Hub",
      cardId: "NFC-004",
      status: "inactive",
      lastActivity: "3 days ago",
      scans: 267,
    },
  ];

  // ------- Status-------
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
          <input
            type="text"
            placeholder="Search profiles..."
            className="
              h-9 w-64 pl-10 rounded-md border border-border bg-white
              text-sm placeholder:text-tapwise-gray focus:outline-none
              focus:ring-2 focus:ring-[var(--bg-tapwise-yellow)]
              focus:border-[var(--bg-tapwise-yellow)]
              transition-colors
            "
          />
        </div>

        {/* Add Profile */}
        <button
          className="
            inline-flex items-center justify-center h-9 px-4 rounded-md
            text-[color:var(--tapwise-black,#1E1E1E)]
            bg-[var(--bg-tapwise-yellow)]
            border border-border
            hover:bg-[var(--tapwise-yellow-hover)]
            hover:border-[var(--bg-tapwise-yellow)]
            active:border-[var(--bg-tapwise-yellow)]
            active:ring-2 active:ring-[var(--bg-tapwise-yellow)]
            transition-colors
          "
        >
          <FiPlus className="h-4 w-4 mr-2" />
          Add Profile
        </button>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfiles.map((profile) => (
          <div
            key={profile.id}
            className=" rounded-lg 
    bg-white 
    shadow-soft 
         border border-[var(--color-gray-200)]
    transition-shadow "
          >
            {/* CardHeader */}
            <div className="p-6 pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-tapwise-yellow)]">
                    <span className="font-semibold text-tapwise-black">
                      {getInitials(profile.name)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-tapwise-black">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-tapwise-gray">
                      {profile.cardId}
                    </p>
                  </div>
                </div>

                <button
                  className="
                    h-8 w-8 rounded-md inline-flex items-center justify-center
                    hover:bg-[var(--tapwise-yellow-hover)]
                    hover:border hover:border-[var(--bg-tapwise-yellow)]
                    transition-colors
                  "
                  aria-label="More"
                >
                  <FiMoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* CardContent */}
            <div className="p-6 pt-3 space-y-4">
              <div>
                <p className="text-sm text-tapwise-gray">{profile.email}</p>
                <p className="text-sm text-tapwise-gray">{profile.company}</p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`
                    inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                    border border-transparent cursor-pointer transition-colors
                    ${getStatusColor(profile.status)}
                    hover:bg-[var(--bg-tapwise-yellow)] hover:text-tapwise-black
                    active:border-[var(--bg-tapwise-yellow)]
                  `}
                >
                  {profile.status}
                </span>

                <div className="flex items-center space-x-1 text-sm text-tapwise-gray">
                  <LuQrCode className="h-4 w-4" />
                  <span>{profile.scans} scans</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-xs text-tapwise-gray">
                <FiActivity className="h-3 w-3" />
                <span>Last activity: {profile.lastActivity}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                {[
                  { label: "View", icon: FiEye },
                  { label: "Edit", icon: FiEdit },
                ].map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="
                      flex-1 inline-flex items-center justify-center h-8 px-3 rounded-md
                      border text-sm transition-colors
                      bg-white border-border text-tapwise-black
                      hover:bg-[var(--tapwise-yellow-hover)]
                      hover:border-[var(--bg-tapwise-yellow)]
                      active:border-[var(--bg-tapwise-yellow)]
                      active:ring-2 active:ring-[var(--bg-tapwise-yellow)]
                    "
                  >
                    <Icon className="h-4 w-4 mr-1" />
                    {label}
                  </button>
                ))}

                <button
                  title="Delete"
                  className="
                    inline-flex items-center justify-center h-8 px-2 rounded-md
                    border text-sm transition-colors
                    bg-white border-border text-tapwise-black
                    hover:bg-[var(--tapwise-yellow-hover)]
                    hover:border-[var(--bg-tapwise-yellow)]
                    active:border-[var(--bg-tapwise-yellow)]
                    active:ring-2 active:ring-[var(--bg-tapwise-yellow)]
                  "
                >
                  <FiTrash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-[color:var(--bg-tapwise-yellow)]">
              4
            </div>
            <div className="text-sm text-tapwise-gray">Total Profiles</div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-tapwise-gray">Active</div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-tapwise-gray">Pending</div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-tapwise-black">535</div>
            <div className="text-sm text-tapwise-gray">Total Scans</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
