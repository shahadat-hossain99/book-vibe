/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const bookContext = useContext(BookContext);
  const { storedBooks, wishlist } = bookContext;
  console.log(bookContext, "BookContext");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {storedBooks.map((book, ind) => (
          <BookCard book={book} key={ind}></BookCard>
        ))}
      </div>
    </div>
  );
};
export default ListedReadList;
