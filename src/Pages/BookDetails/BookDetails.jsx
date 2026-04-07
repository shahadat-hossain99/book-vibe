import React from "react";
import { useLoaderData, useParams } from "react-router";

//!Load-type-01: const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  //!   const books = use(booksPromise);
  //!   console.log(books, "books");

  const books = useLoaderData();
  console.log(books, "books");

  const { bookId } = useParams();
  console.log(bookId, "bookId");

  //   const expectedBook = books.find((book) => book.bookId == bookId);

  const expectedBook = books.find((book) => book.bookId === Number(bookId));
  console.log(expectedBook);
  //?   Must use double equal bcoz useParams providing us string value and and we are getting number value from our json file.datatype didn't match

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto bg-base-100 shadow-lg rounded-2xl md:my-10 m-2">
      <figure className="w-full rounded-xl flex items-center justify-center bg-gray-100 p-4 ">
        <img className="h-100" src={image} alt={bookName} />
      </figure>
      <div className="card-body space-y-3 ">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <h2 className="font-semibold">By: {author}</h2>
        <p className="py-2 border-y border-gray-200 font-semibold ">
          {category}
        </p>
        <p>
          <span className="font-extrabold"> Review: </span>
          {review}
        </p>
        <div className="flex gap-4 items-center">
          <span className="font-extrabold"> Tag: </span>{" "}
          {tags.map((tag, i) => (
            <div
              key={i}
              className="badge badge-soft badge-success p-2 font-semibold text-[18px]"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-20">
            <span className="font-extrabold"> Number of Pages:</span>{" "}
            <span className="font-semibold">{totalPages}</span>
          </div>

          <div className="flex gap-34">
            <span className="font-extrabold">Publisher:</span>{" "}
            <span className="font-semibold">{publisher}</span>
          </div>

          <div className="flex gap-18">
            <span className="font-extrabold">Year of Publishing:</span>{" "}
            <span className="font-semibold">{yearOfPublishing}</span>
          </div>

          <div className="flex gap-39">
            <span className="font-extrabold">Rating:</span>{" "}
            <span className="font-semibold">{rating}</span>
          </div>

          <div className=" space-x-2">
            <button className="btn btn-soft btn-ghost font-bold">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
