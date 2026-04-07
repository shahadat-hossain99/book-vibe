/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

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
      alert("This book is already Exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`"${currentBook.bookName}  " is  Added to the List`);
    }
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
