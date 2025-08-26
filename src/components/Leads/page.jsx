"use client";
import React, { useState } from "react";
import {
  FiSearch,
  FiGrid,
  FiList,
  FiEdit,
  FiTrash2,
  FiUserCheck,
  FiHeart,
  FiPlus,
} from "react-icons/fi";

const Leads = () => {
  const mockLeads = [
    {
      id: "1",
      name: "John Smith",
      email: "john@techcorp.com",
      businessName: "Tech Corp",
      phoneNumber: "+1 234-567-8901",
      status: "new",
      dateAdded: "2024-01-15",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@marketing.com",
      businessName: "Marketing Pro",
      phoneNumber: "+1 234-567-8902",
      status: "interested",
      dateAdded: "2024-01-14",
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "michael@design.com",
      businessName: "Creative Studio",
      phoneNumber: "+1 234-567-8903",
      status: "pending",
      dateAdded: "2024-01-13",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@startup.com",
      businessName: "Startup Hub",
      phoneNumber: "+1 234-567-8904",
      status: "converted",
      dateAdded: "2024-01-12",
    },
  ];

  const [leads, setLeads] = useState(mockLeads);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredLeads = leads.filter((lead) => {
    const q = searchTerm.toLowerCase();
    return (
      (lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.businessName.toLowerCase().includes(q)) &&
      (filterStatus === "all" || lead.status === filterStatus)
    );
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 hover:bg-[var(--tapwise-yellow-hover)]";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-[var(--tapwise-yellow-hover)]";
      case "interested":
        return "bg-green-100 text-green-800 hover:bg-[var(--tapwise-yellow-hover)]";
      case "converted":
        return "bg-[var(--bg-tapwise-yellow)] text-tapwise-black hover:bg-[var(--tapwise-yellow-hover)]";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-[var(--tapwise-yellow-hover)]";
    }
  };

  const handleStatusChange = (id, status) =>
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  const handleDelete = (id) =>
    setLeads((prev) => prev.filter((l) => l.id !== id));

  return (
    <div className="space-y-6 overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-full pl-10 rounded-md border border-gray-200 bg-white text-sm placeholder:text-tapwise-gray focus:outline-none focus:border-[var(--tapwise-yellow-hover)] focus:ring-1 focus:ring-[var(--tapwise-yellow-hover)] transition-colors"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border border-gray-200 rounded-lg text-sm"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="pending">Pending</option>
            <option value="interested">Interested</option>
            <option value="converted">Converted</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === "list" ? "card" : "list")}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200"
          >
            {viewMode === "list" ? (
              <FiGrid className="h-4 w-4" />
            ) : (
              <FiList className="h-4 w-4" />
            )}
          </button>

          <button className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-[var(--bg-tapwise-yellow)] text-tapwise-black hover:bg-[var(--tapwise-yellow-hover)] transition-colors">
            <FiPlus className="h-4 w-4 mr-2" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Leads Display */}
      {viewMode === "list" ? (
        <div className="border border-gray-200 rounded-lg bg-white shadow-soft">
          <div className="p-6 pb-3 border-b border-gray-200">
            <h2 className="text-base font-semibold text-tapwise-black">
              Leads ({filteredLeads.length})
            </h2>
          </div>

          <div className="p-6 pt-0">
            {/* Mobile Cards */}
            <div className="space-y-3 sm:hidden">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-tapwise-gray-light"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-gray-200 pb-2">
                    <div className="min-w-0">
                      <p className="font-medium text-tapwise-black">
                        {lead.name}
                      </p>
                      <p className="text-sm text-tapwise-gray">{lead.email}</p>
                      <p className="text-sm text-tapwise-gray">
                        {lead.businessName}
                      </p>
                      <p className="text-sm text-tapwise-gray">
                        {lead.phoneNumber}
                      </p>
                      <p className="text-xs text-tapwise-gray mt-1">
                        Added: {lead.dateAdded}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2 mt-3">
                    <button className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center">
                      <FiEdit className="h-4 w-4" />
                    </button>
                    <button
                      className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center disabled:opacity-50"
                      onClick={() => handleStatusChange(lead.id, "converted")}
                      disabled={lead.status === "converted"}
                    >
                      <FiUserCheck className="h-4 w-4" />
                    </button>
                    <button
                      className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center disabled:opacity-50"
                      onClick={() => handleStatusChange(lead.id, "interested")}
                      disabled={
                        lead.status === "interested" ||
                        lead.status === "converted"
                      }
                    >
                      <FiHeart className="h-4 w-4" />
                    </button>
                    <button
                      className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center"
                      onClick={() => handleDelete(lead.id)}
                    >
                      <FiTrash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="hidden sm:block">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-tapwise-gray">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-tapwise-gray">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-tapwise-gray">
                      Business
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-tapwise-gray">
                      Phone
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-tapwise-gray">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-tapwise-gray">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-gray-200 hover:bg-tapwise-gray-light align-top"
                    >
                      <td className="py-3 px-4 font-medium text-tapwise-black">
                        {lead.name}
                      </td>
                      <td className="py-3 px-4 text-tapwise-gray">
                        {lead.email}
                      </td>
                      <td className="py-3 px-4 text-tapwise-gray">
                        {lead.businessName}
                      </td>
                      <td className="py-3 px-4 text-tapwise-gray">
                        {lead.phoneNumber}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center">
                            <FiEdit className="h-4 w-4" />
                          </button>
                          <button
                            className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center disabled:opacity-50"
                            onClick={() =>
                              handleStatusChange(lead.id, "converted")
                            }
                            disabled={lead.status === "converted"}
                          >
                            <FiUserCheck className="h-4 w-4" />
                          </button>
                          <button
                            className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center disabled:opacity-50"
                            onClick={() =>
                              handleStatusChange(lead.id, "interested")
                            }
                            disabled={
                              lead.status === "interested" ||
                              lead.status === "converted"
                            }
                          >
                            <FiHeart className="h-4 w-4" />
                          </button>
                          <button
                            className="h-8 w-8 rounded-md hover:bg-[var(--tapwise-yellow-hover)] flex items-center justify-center"
                            onClick={() => handleDelete(lead.id)}
                          >
                            <FiTrash2 className="h-4 w-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="border border-gray-200 rounded-lg bg-white shadow-soft hover:shadow-medium"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-2">
                  <div>
                    <h3 className="font-semibold text-tapwise-black">
                      {lead.name}
                    </h3>
                    <p className="text-sm text-tapwise-gray">
                      {lead.businessName}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-tapwise-gray">{lead.email}</p>
                  <p className="text-sm text-tapwise-gray">
                    {lead.phoneNumber}
                  </p>
                  <p className="text-xs text-tapwise-gray">
                    Added: {lead.dateAdded}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 hover:bg-[var(--tapwise-yellow-hover)]">
                    <FiEdit className="h-4 w-4" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 hover:bg-[var(--tapwise-yellow-hover)] disabled:opacity-50"
                    onClick={() => handleStatusChange(lead.id, "converted")}
                    disabled={lead.status === "converted"}
                  >
                    <FiUserCheck className="h-4 w-4" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 hover:bg-[var(--tapwise-yellow-hover)]"
                    onClick={() => handleDelete(lead.id)}
                  >
                    <FiTrash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leads;
