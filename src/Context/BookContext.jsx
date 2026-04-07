/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    console.log(currentBook, storedBooks);
    // step 01: store book id or book object
    // step 02: where to store
    // step 03: array or collection
    // step 04: if the book is already exist then show a alert or a toast
    // step 05: if not then add the book in the array or collection

    const isExistBook = storedBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistBook) {
      toast.warning("This book is already Exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`"${currentBook.bookName}  " is  Added to the List`);
    }
  };

  const handleWishlist = (currentBook) => {
    // console.log(currentBook);
    // step 01: store book id or book object
    // step 02: where to store
    // step 03: array or collection
    // step 04: if the book is already exist then show a alert or a toast
    // step 05: if not then add the book in the array or collection
    // console.log(storedBooks);

    const isExistInReadList = storedBooks?.find(
      (book) => book?.bookId === currentBook?.bookId,
    );

    if (isExistInReadList) {
      toast.error("This book Already exist in Read-List");
      return;
    }

    const isExistBook = wishlist.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistBook) {
      toast.warning("This book is already Exist");
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success(`"${currentBook.bookName}  " is  Added to the List`);
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishlist,
    setWishlist,
    handleWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
