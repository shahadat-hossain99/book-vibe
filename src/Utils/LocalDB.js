const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");

  if (allReadList) return JSON.parse(allReadList);

  return [];
};

const addReadListToLocalDB = (book) => {
  console.log(book);
  const allBooks = getAllReadListFromLocalDB();

  const isExist = allBooks.find((bk) => bk.bookId == book.bookId);

  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
    console.log("book added!");
  } else {
    console.log("book didn't added!!!!!!");
  }
};

export { addReadListToLocalDB, getAllReadListFromLocalDB };
