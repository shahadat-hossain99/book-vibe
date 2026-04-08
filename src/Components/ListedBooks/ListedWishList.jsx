import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../ui/BookCard";

const ListedWishList = ({ sortingType }) => {
  const bookContext = useContext(BookContext);
  const { storedBooks, wishlist } = bookContext;
  console.log(bookContext, "BookContext");

  const [filteredWishList, setFilteredWishList] = useState(wishlist);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishlist].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishList(sortedData);
        console.log(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
        setFilteredWishList(sortedData);
        console.log(sortedData);
      }
    }
  }, [sortingType, wishlist]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredWishList.map((book, ind) => (
          <BookCard book={book} key={ind}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
