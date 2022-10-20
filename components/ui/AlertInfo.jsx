import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const AlertInfo = ({ message }) => {
  return (
    <div className="flex items-center gap-3 py-5 border-4 shadow-xl border-opacity-30 mx-7 bg-opacity-20 bg-buttons_main px-7 rounded-xl border-buttons_main my-7">
      <FiAlertTriangle className="w-5 h-5" />
      <p className="font-semibold text-center">{message}</p>
    </div>
  );
};

export default AlertInfo;