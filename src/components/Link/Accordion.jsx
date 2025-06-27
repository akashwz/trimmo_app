import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-800"
      >
        {title}
        <span>{isOpen ? "➖" : "➕"}</span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default Accordion;
