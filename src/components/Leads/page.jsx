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
  // -------- Mock data (JS) --------
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

  // -------- State --------
  const [leads, setLeads] = useState(mockLeads);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list"); // "list" | "card"
  const [filterStatus, setFilterStatus] = useState("all");

  // -------- Helpers --------
  const filteredLeads = leads.filter((lead) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      lead.name.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      lead.businessName.toLowerCase().includes(q);
    const matchesFilter =
      filterStatus === "all" || lead.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "interested":
        return "bg-green-100 text-green-800";
      case "converted":
        return "bg-tapwise-yellow text-tapwise-black";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusChange = (leadId, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const handleDelete = (leadId) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== leadId));
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-64 pl-10 rounded-md border border-border bg-white text-sm placeholder:text-tapwise-gray focus:outline-none"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm"
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
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border"
            aria-label="Toggle View"
          >
            {viewMode === "list" ? (
              <FiGrid className="h-4 w-4" />
            ) : (
              <FiList className="h-4 w-4" />
            )}
          </button>

          <button className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-tapwise-yellow text-tapwise-black hover:bg-tapwise-yellow-hover transition-colors">
            <FiPlus className="h-4 w-4 mr-2" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Leads Display */}
      {viewMode === "list" ? (
        <div className="border border-border rounded-lg bg-white shadow-soft">
          {/* CardHeader mimic */}
          <div className="p-6 pb-3">
            <h2 className="text-base font-semibold text-tapwise-black">
              Leads ({filteredLeads.length})
            </h2>
          </div>

          {/* CardContent mimic */}
          <div className="p-6 pt-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
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
                      className="border-b border-border hover:bg-tapwise-gray-light"
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
                        <div className="flex items-center space-x-2">
                          <button
                            className="h-8 w-8 rounded-md inline-flex items-center justify-center hover:bg-gray-100"
                            title="Edit"
                          >
                            <FiEdit className="h-4 w-4" />
                          </button>

                          <button
                            className="h-8 w-8 rounded-md inline-flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                            onClick={() =>
                              handleStatusChange(lead.id, "converted")
                            }
                            disabled={lead.status === "converted"}
                            title="Mark Converted"
                          >
                            <FiUserCheck className="h-4 w-4" />
                          </button>

                          <button
                            className="h-8 w-8 rounded-md inline-flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                            onClick={() =>
                              handleStatusChange(lead.id, "interested")
                            }
                            disabled={
                              lead.status === "interested" ||
                              lead.status === "converted"
                            }
                            title="Mark Interested"
                          >
                            <FiHeart className="h-4 w-4" />
                          </button>

                          <button
                            className="h-8 w-8 rounded-md inline-flex items-center justify-center hover:bg-gray-100"
                            onClick={() => handleDelete(lead.id)}
                            title="Delete"
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
        // Card grid view
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
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

                <div className="flex items-center space-x-2">
                  <button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border">
                    <FiEdit className="h-4 w-4" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border disabled:opacity-50"
                    onClick={() => handleStatusChange(lead.id, "converted")}
                    disabled={lead.status === "converted"}
                    title="Mark Converted"
                  >
                    <FiUserCheck className="h-4 w-4" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border"
                    onClick={() => handleDelete(lead.id)}
                    title="Delete"
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
