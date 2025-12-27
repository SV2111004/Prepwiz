import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-5">
      <p className="text-[14px] text-slate-700">
        {content}
      </p>

      <div className="flex justify-end mt-6 gap-3">
        <button
          type="button"
          className="btn-small bg-red-500 text-white"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
