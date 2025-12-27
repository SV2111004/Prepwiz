import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-6">
      <p className="text-sm text-gray-700">{content}</p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
          onClick={() => window.location.reload()} // or close modal
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};


export default DeleteAlertContent;
