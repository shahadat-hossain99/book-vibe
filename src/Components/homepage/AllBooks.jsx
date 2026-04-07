import React, { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  //   console.log(books, "books");

  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold mb-7 text-3xl text-center">Books</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book, i) => (
          <BookCard book={book} key={i}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
