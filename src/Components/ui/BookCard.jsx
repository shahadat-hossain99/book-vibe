import React from "react";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-200 shadow-sm p-3 m-3">
      <figure className="p-6">
        <img
          src={book.image}
          alt={book.bookName}
          className=" rounded-xl h-64"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-4 items-center">
          {" "}
          {book.tags.map((tag, i) => (
            <div
              key={i}
              className="badge badge-soft badge-success p-2 font-semibold text-[18px]"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
        <p className="font-semibold text-lg">By: {book.author}</p>

        <div className="divider before:border-dotted after:border-dotted before:border-t-2 after:border-t-2 text-gray-300"></div>

        <div className="card-actions justify-between">
          <div className="font-semibold text-xl">{book.category}</div>
          <div className="flex justify-between items-center gap-2.5 font-semibold text-xl">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
