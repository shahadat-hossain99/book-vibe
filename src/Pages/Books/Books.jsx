import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Books = () => {
  const bookContext = useContext(BookContext);
  const { storedBooks, setStoredBooks, wishlist } = bookContext;
  console.log(bookContext, "BookContext");

  return (
    <div className="container mx-auto my-3">
      <h2 className="text-center text-3xl font-bold">Books page</h2>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Read list: {storedBooks.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist: {wishlist.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
