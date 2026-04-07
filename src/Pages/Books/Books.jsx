import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const Books = () => {
  const bookContext = useContext(BookContext);
  const { storedBooks, setStoredBooks } = bookContext;
  console.log(bookContext, "BookContext");

  return (
    <div>
      <h2>Books page</h2>
    </div>
  );
};

export default Books;
