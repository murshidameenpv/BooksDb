/* eslint-disable react/prop-types */
import { useState } from "react";

const ListBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="shadow-lg p-0  h-[500px] flex-1 relative">
      <div className="text-end">
        <button
          className="px-2 py-2 bg-transparent border-none rounded-sm absolute right-0"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "➖" : "➕"}
        </button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ListBox;
