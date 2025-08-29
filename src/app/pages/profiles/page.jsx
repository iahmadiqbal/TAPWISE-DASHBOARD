"use client";
import React from "react";

const profiles = [
  {
    name: "ALI ALAHMARI",
    status: "Expired",
    qr: 20,
    avatar: "/images/profilepicture-1.png",
  },
  {
    name: "Abdul Ahad",
    role: "Web Developer",
    email: "test123@gmail.com",
    phone: "+92121234545",
    status: "Active",
    qr: 49,
    avatar: "/images/profilepicture2.png",
  },
  { name: "Unnamed", status: "Active", qr: 0, avatar: "/images/unnamed.png" },
  {
    name: "Muhammad Ali 01",
    phone: "+387123",
    status: "Active",
    qr: 6,
    avatar: "/images/Ali.png",
  },
  {
    name: "Muhammad Ali 0679",
    phone: "+358181234",
    status: "Active",
    qr: 2,
    avatar: "images/11-packaging-logo.png",
  },
  {
    name: "Abdulah Alhokair",
    phone: "+933455601448",
    status: "Active",
    qr: 5,
    avatar: "/images/abdullah.png",
  },
  {
    name: "test phon ext",
    status: "Active",
    qr: 1,
    avatar: "/images/testphoneimage.png",
  },
  {
    name: "Image Issue",
    status: "Active",
    qr: 0,
    avatar: "/images/issueimage.png",
  },
  {
    name: "test image",
    status: "Active",
    qr: 1,
    avatar: "/images/testimage.png",
  },
  {
    name: "Ahad Ali",
    role: "Web developer",
    email: "ahadalimeer@gmail.com",
    status: "Active",
    qr: 2,
    avatar: "/images/ahadali.png",
  },
  { name: "Goods", status: "Active", qr: 0, avatar: "/images/good.png" },
  {
    name: "Saad Malik",
    role: "CEO",
    email: "saadmalikworld=1@gmail.com",
    phone: "+9203440512256",
    status: "Active",
    qr: 12,
    avatar: "/images/saadmalik.png",
  },
  {
    name: "Saad Rafique",
    role: "CEO",
    email: "info@hikenseek.ae",
    phone: "+9203335153038",
    status: "Active",
    qr: 18,
    avatar: "/images/profilepicture13.png",
  },
];

// Status badge
const StatusChip = ({ status }) => {
  const isActive = status === "Active";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
        isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
      }`}
    >
      <span
        className={`mr-1 h-2 w-2 rounded-full ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      />
      {status}
    </span>
  );
};

// QR code count badge
const QRBadge = ({ count = 0 }) => (
  <div className="flex items-center gap-1 text-gray-700">
    <i className="fi fi-rr-qrcode text-[18px]" />
    <span className="text-sm font-semibold">{count}</span>
  </div>
);

// Profile card
const ProfileCard = ({ p }) => (
  <div
    className="rounded-lg bg-white p-3 shadow-sm border-custom flex flex-col justify-between h-[220px] mt-3 
               font-sans text-[16px] leading-normal text-black font-normal"
  >
    <div>
      <div className="flex items-start gap-3">
        <img
          src={p.avatar}
          alt={p.name}
          className="h-10 w-10 rounded-full object-cover border-custom"
        />
        <div className="flex-1 min-w-0">
          <h3 className="truncate text-sm font-semibold text-gray-900">
            {p.name}
          </h3>
          {p.role && <p className="text-xs text-gray-600">{p.role}</p>}
        </div>
      </div>
      <div className="mt-2 space-y-0.5 text-xs text-gray-700">
        {p.email && <p className="truncate">{p.email}</p>}
        {p.phone && <p className="truncate">{p.phone}</p>}
      </div>
    </div>

    <div className="mt-2 flex items-center justify-between">
      <StatusChip status={p.status} />
      <QRBadge count={p.qr} />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <button className="flex-1 rounded-md border-custom px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
        <i className="fi fi-rr-eye mr-1" /> View
      </button>
      <button className="flex-1 rounded-md border-custom px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
        <i className="fi fi-rr-edit mr-1" /> Edit
      </button>
    </div>
  </div>
);

// Main profiles page
const Profile = () => {
  const available = 28;
  const consumed = 13;

  return (
    <div className="px-2 sm:px-3 lg:px-4 pt-0 pb-3">
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-900 mb-2">Profiles</h1>

      {/* Search + Add */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative sm:w-56">
          <i className="fi fi-rr-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search profiles..."
            className="w-full rounded-md border-custom pl-9 pr-3 py-2 
                       font-sans font-normal text-[13px] leading-normal text-[#737373] 
                       placeholder:text-[#737373] focus:outline-none"
          />
        </div>

        <button className="rounded-md bg-[var(--bg-tapwise-yellow)] px-4 py-2 text-sm font-semibold text-black hover:bg-[var(--tapwise-yellow-hover)] flex items-center gap-1">
          <i className="fi fi-rr-plus" /> Add Profile
        </button>
      </div>

      {/* Counters */}
      <div className="mt-2 flex justify-end gap-4">
        <div className="flex items-center gap-1 text-gray-800">
          <span className="h-4 w-4 rounded-full bg-[var(--bg-tapwise-yellow)]" />
          <span className="text-sm font-semibold">{available}</span>
          <span className="text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-1 text-gray-800">
          <span className="h-4 w-4 rounded-full bg-green-500" />
          <span className="text-sm font-semibold">{consumed}</span>
          <span className="text-gray-600">Consumed</span>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 justify-start items-start">
        {profiles.map((p, i) => (
          <ProfileCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
