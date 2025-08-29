"use client";

const FilterBar = () => {
  return (
    <div className="mt-6 w-full rounded-lg bg-white p-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 border-custom">
      {/* User Select */}
      <select
        defaultValue="select"
        className="flex-1 min-w-0 rounded-lg border-custom py-2 px-3 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFD900] h-10"
      >
        <option value="select" disabled>
          Select user
        </option>
        <option value="abdul">Abdul Ahad</option>
        <option value="saad1">Saad Rafique</option>
        <option value="saad2">Ahmad</option>
        <option value="saad3">Ali</option>
        <option value="saad4">Ahmer</option>
        <option value="saad5">Saad</option>
      </select>

      {/* Date Range */}
      <div className="flex-1 min-w-0 flex items-center gap-2 rounded-lg border-custom bg-white text-sm px-3 py-2 h-10 focus-within:outline-none focus-within:ring-0">
        <input
          type="text"
          placeholder="Select your range"
          className="flex-1 min-w-0 h-full focus:outline-none"
          readOnly
        />
        <svg
          className="w-5 h-5 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path
            d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 
            32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 
            48 48l0 48L0 160l0-48C0 85.5 21.5 64 
            48 64l48 0 0-32c0-17.7 14.3-32 
            32-32zM0 192l448 0 0 272c0 
            26.5-21.5 48-48 48L48 512c-26.5 
            0-48-21.5-48-48L0 192z"
          />
        </svg>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-end gap-3 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none min-w-[100px] rounded-md bg-[#FFD900] px-4 py-2 text-sm font-medium text-black hover:bg-[#ffe657] transition-colors">
          Apply
        </button>
        <button className="flex-1 sm:flex-none min-w-[100px] rounded-md border-custom px-4 py-2 text-sm font-medium text-gray-700 bg-white transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
