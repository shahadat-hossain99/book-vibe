import React from "react";
import { useNavigate } from "react-router";

const EmptyList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="empty cart"
        className="w-32 mb-4"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">Your List is Empty</h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        Looks like you haven't added any books yet. Start exploring and add your
        favorite books to your List.
      </p>

      {/* Button */}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
      >
        Browse Books
      </button>
    </div>
  );
};

export default EmptyList;
