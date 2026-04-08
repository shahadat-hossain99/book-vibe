/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const bookContext = useContext(BookContext);
  const { storedBooks, wishlist } = bookContext;
  console.log(bookContext, "BookContext");

  const [filteredReadList, setFilteredReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadList(sortedData);
        console.log(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        setFilteredReadList(sortedData);
        console.log(sortedData);
      }
    }
  }, [sortingType, storedBooks]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredReadList.map((book, ind) => (
          <BookCard book={book} key={ind}></BookCard>
        ))}
      </div>
    </div>
  );
};
export default ListedReadList;
