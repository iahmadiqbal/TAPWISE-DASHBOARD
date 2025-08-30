"use client";
import React, { useMemo, useState, useEffect } from "react";

const RAW_LEADS = [
  {
    name: "Ahad Ali",
    phone: "09876543456",
    email: "ahadali@gmail.com",
    company: "Loopiq Studio",
    datetime: "2025-08-06 18:09:34",
    sharedWith: ["Abdul Ahad"],
  },
  {
    name: "jawad",
    phone: "03337283682",
    email: "jawadrafique42@gmail.com",
    company: "Hikenseek.digital",
    datetime: "2025-08-06 18:09:51",
    sharedWith: ["Abdul Ahad"],
  },
  {
    name: "Muhamamd Ali",
    phone: "03455601448",
    email: "mali.cuwah@gmail.com",
    company: "Loopiq",
    datetime: "2025-08-25 15:02:10",
    sharedWith: ["Saad Rafique"],
  },
  {
    name: "Sohial",
    phone: "0512529267",
    email: "mahamjabbar2015@gmail.com",
    company: "",
    datetime: "2025-06-26 02:59:59",
    sharedWith: ["Abdul Ahad"],
  },
  {
    name: "Sohial",
    phone: "0512529267",
    email: "mahamjabbar2015@gmail.com",
    company: "",
    datetime: "2025-06-26 02:59:59",
    sharedWith: ["Abdul Ahad"],
  },
  {
    name: "Sohial",
    phone: "0512529267",
    email: "mahamjabbar2015@gmail.com",
    company: "",
    datetime: "2025-06-26 02:59:59",
    sharedWith: ["Abdul Ahad"],
  },
];

export default function LeadsTableHeadersStyled() {
  const [pageSize, setPageSize] = useState(5);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // 🎯 Only for headers
  const headerStyle = {
    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "normal",
    color: "#000000",
  };

  // 🎯 Only for data rows (middle content)
  const rowCellStyle = {
    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "normal",
    color: "#000000",
  };

  const handleSort = (field) => {
    if (sortField === field)
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let data = [...RAW_LEADS];
    if (q) {
      data = data.filter((r) =>
        [
          r.name,
          r.phone,
          r.email,
          r.company,
          r.datetime,
          ...(r.sharedWith || []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    if (sortField) {
      data.sort((a, b) => {
        const A = Array.isArray(a[sortField])
          ? a[sortField].join(", ")
          : a[sortField] || "";
        const B = Array.isArray(b[sortField])
          ? b[sortField].join(", ")
          : b[sortField] || "";
        return sortOrder === "asc"
          ? String(A).localeCompare(String(B))
          : String(B).localeCompare(String(A));
      });
    }
    return data;
  }, [query, sortField, sortOrder]);

  const total = filtered.length;
  const effectivePageSize = pageSize === -1 ? total || 1 : pageSize;
  const pageCount = Math.max(1, Math.ceil(total / effectivePageSize));
  const currentPage = Math.min(page, pageCount);
  const startIdx = (currentPage - 1) * effectivePageSize;
  const endIdx = Math.min(startIdx + effectivePageSize, total);
  const rows = filtered.slice(startIdx, endIdx);

  useEffect(() => setPage(1), [query, pageSize]);

  const SortIcon = ({ active, order }) => (
    <span className="ml-2 inline-flex flex-col leading-none">
      <svg
        className={`w-4 h-4 ${
          active && order === "asc" ? "text-black" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 5l5 5H5l5-5z" />
      </svg>
      <svg
        className={`w-4 h-4 -mt-1 ${
          active && order === "desc" ? "text-black" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 15l-5-5h10l-5 5z" />
      </svg>
    </span>
  );

  const downloadCSV = () => {
    const csvRows = [
      [
        "Name",
        "Phone no.",
        "Email Address",
        "Company",
        "Date & Time",
        "Shared with",
      ],
      ...filtered.map((r) => [
        r.name,
        r.phone,
        r.email,
        r.company,
        r.datetime,
        (r.sharedWith || []).join(" | "),
      ]),
    ];
    const csv = csvRows
      .map((row) =>
        row.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full">
      <h1 className="mb-4 text-2xl font-semibold">Leads</h1>

      <div className="rounded-xl border border-gray-300 bg-white p-4 sm:p-5">
        {/* Toolbar */}
        <div className="mb-5 rounded-xl border border-gray-300 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Show Entries */}
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-800">Show</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm outline-none focus:border-gray-400"
              >
                {[5, 10, 25, 50].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
                <option value={-1}>All</option>
              </select>
              <span className="text-sm text-gray-800">entries</span>
            </label>

            {/* Download + Search */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
              <button
                onClick={downloadCSV}
                className="h-10 rounded-lg bg-[var(--bg-tapwise-yellow,#FFD900)] px-4 text-sm font-medium text-black hover:bg-[var(--tapwise-yellow-hover,#ffe657)]"
              >
                Download CSV
              </button>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search leads..."
                className="h-10 w-72 rounded-lg border border-black px-3 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead style={{ borderBottom: "1px solid #000" }}>
              <tr>
                {[
                  "Name",
                  "Phone no.",
                  "Email Address",
                  "Company",
                  "Date & Time",
                  "Shared with",
                ].map((label, idx) => (
                  <th
                    key={idx}
                    onClick={() =>
                      handleSort(label.toLowerCase().replace(/\s+/g, ""))
                    }
                    className="px-6 py-4 cursor-pointer"
                    style={headerStyle} // headers bold
                  >
                    <div className="flex items-center">
                      {label}
                      <SortIcon
                        active={
                          sortField === label.toLowerCase().replace(/\s+/g, "")
                        }
                        order={sortOrder}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={idx}
                  className="[&>td]:px-6 [&>td]:py-4"
                  style={rowCellStyle}
                >
                  <td>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.email}</td>
                  <td>{r.company}</td>
                  <td>{r.datetime}</td>
                  <td>
                    <div className="flex flex-col">
                      {(r.sharedWith || []).map((s, i) => (
                        <span key={i}>{s}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ borderTop: "1px solid #000" }} />
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-700">
            {total === 0
              ? "Showing 0 to 0 of 0 entries"
              : `Showing ${startIdx + 1} to ${endIdx} of ${total} entries`}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-md border border-gray-300 px-3 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={currentPage === pageCount || total === 0}
              className="rounded-md border border-gray-300 px-3 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
