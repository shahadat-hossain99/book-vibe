import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../ui/BookCard";

const ListedWishList = () => {
  const bookContext = useContext(BookContext);
  const { storedBooks, wishlist } = bookContext;
  console.log(bookContext, "BookContext");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishlist.map((book, ind) => (
          <BookCard book={book} key={ind}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
