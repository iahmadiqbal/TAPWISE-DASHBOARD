"use client";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMapPin,
  FiCamera,
  FiLock,
  FiBell,
  FiShield,
} from "react-icons/fi";

const AccountComponents = () => {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Profile Information */}
      <div className="border border-gray-200  rounded-lg bg-white shadow-soft">
        <div className="p-6 pb-3 ">
          <h3 className="text-tapwise-black font-semibold flex items-center">
            <FiUser className="h-5 w-5 mr-2" />
            Profile Information
          </h3>
        </div>
        <div className="p-6 pt-3 space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center space-x-6 border-b border-gray-200 pb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center  bg-[var(--bg-tapwise-yellow)]">
              <span className="text-2xl font-bold text-tapwise-black ">JD</span>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-gray-300 text-sm transition-colors hover:bg-[var(--tapwise-yellow-hover)]"
              >
                <FiCamera className="h-4 w-4 mr-2" />
                Change Photo
              </button>

              <p className="text-xs text-tapwise-gray mt-1 ">
                JPG, PNG up to 2MB
              </p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-tapwise-black">
                First Name
              </label>
              <input
                id="firstName"
                defaultValue="John"
                className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm px-3 placeholder:text-tapwise-gray focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-tapwise-black">
                Last Name
              </label>
              <input
                id="lastName"
                defaultValue="Doe"
                className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm px-3 placeholder:text-tapwise-gray focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-tapwise-black">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
                <input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
                  className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm pl-10 pr-3 placeholder:text-tapwise-gray focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-tapwise-black">
                Phone
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
                <input
                  id="phone"
                  defaultValue="+1 234-567-8900"
                  className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm pl-10 pr-3 placeholder:text-tapwise-gray focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-soft">
        <div className="p-6 pb-3 border-b border-gray-200">
          <h3 className="text-tapwise-black font-semibold flex items-center">
            <FiBriefcase className="h-5 w-5 mr-2" />
            Company Information
          </h3>
        </div>
        <div className="p-6 pt-3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="company" className="text-tapwise-black">
                Company Name
              </label>
              <input
                id="company"
                defaultValue="Tech Solutions Inc."
                className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm px-3 placeholder:text-tapwise-gray focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="position" className="text-tapwise-black">
                Position
              </label>
              <input
                id="position"
                defaultValue="CEO"
                className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm px-3 placeholder:text-tapwise-gray focus:outline-none"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="address" className="text-tapwise-black">
                Address
              </label>
              <div className="relative">
                <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
                <input
                  id="address"
                  defaultValue="123 Business St, City, State 12345"
                  className="h-9 w-full rounded-md border border-gray-200 bg-white text-sm pl-10 pr-3 placeholder:text-tapwise-gray focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-soft">
        <div className="p-6 pb-3 ">
          <h3 className="text-tapwise-black font-semibold flex items-center">
            <FiShield className="h-5 w-5 mr-2" />
            Security Settings
          </h3>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <FiLock className="h-5 w-5 text-tapwise-gray" />
              <div>
                <p className="font-medium text-tapwise-black">
                  Change Password
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-gray-200 text-sm transition-colors hover:bg-[var(--tapwise-yellow-hover)]"
            >
              Change
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <FiShield className="h-5 w-5 text-tapwise-gray" />
              <div>
                <p className="font-medium text-tapwise-black">
                  Two-Factor Authentication
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-gray-200 text-sm transition-colors hover:bg-[var(--tapwise-yellow-hover)]"
            >
              Enable
            </button>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-soft">
        <div className="p-6 pb-3 ">
          <h3 className="text-tapwise-black font-semibold flex items-center">
            <FiBell className="h-5 w-5 mr-2" />
            Notification Preferences
          </h3>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="flex items-center justify-between pb-4">
            <p className="font-medium text-tapwise-black">
              Email Notifications
            </p>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>

          <div className="flex items-center justify-between pb-4 ">
            <p className="font-medium text-tapwise-black">Lead Alerts</p>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>

          <div className="flex items-center justify-between">
            <p className="font-medium text-tapwise-black">Card Activity</p>
            <input type="checkbox" className="rounded" />
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div className="flex space-x-4">
        <button
          type="button"
          className="text-tapwise-black border border-gray-200 h-9 px-4 rounded-md transition-colors bg-[var(--bg-tapwise-yellow)] hover:bg-[var(--tapwise-yellow-hover)]"
        >
          Save Changes
        </button>

        <button
          type="button"
          className="h-9 px-4 rounded-md border border-gray-200 text-sm transition-colors hover:bg-[var(--bg-tapwise-yellow)]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AccountComponents;
