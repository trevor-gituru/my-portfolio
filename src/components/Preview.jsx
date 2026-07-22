// @/components/Preview.jsx
import React from 'react';
const Preview = ({ imgUrl, title, onClose }) => {
  return (
    <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 max-w-lg w-full mx-4 max-h-[90vh] flex flex-col">
        <h2 className="text-center font-semibold text-lg mb-3 text-black">
          {title}
        </h2>
        <div className="overflow-y-auto flex-1">
          <img
            src={imgUrl}
            alt={title}
            className="w-full rounded-lg object-contain"
          />
        </div>
        <button
          onClick={onClose}
          className="mt-3 text-sm font-semibold border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 hover:shadow-md transition self-center"
        >
          Close
        </button>
      </div>
    </section>
  );
};
export default Preview;
