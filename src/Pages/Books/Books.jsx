/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/ListedBooks/ListedWishList";
import EmptyList from "../EmtyList/EmptyList";
import { FaArrowDown } from "react-icons/fa";

const Books = () => {
  const bookContext = useContext(BookContext);
  const { storedBooks, wishlist } = bookContext;
  // console.log(bookContext, "BookContext");

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-bold bg-gray-200 py-6 rounded-b-2xl shadow-xl mb-8">
        Books Page
      </h2>

      <div className="flex justify-center items-center mb-15">
        <div className="dropdown dropdown-start ">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By <FaArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>
            <span className="font-semibold">Read List</span>
          </Tab>
          <Tab>
            {" "}
            <span className="font-semibold">WishList</span>
          </Tab>
        </TabList>

        <TabPanel>
          {!storedBooks || storedBooks.length === 0 ? (
            <EmptyList />
          ) : (
            <ListedReadList />
          )}
        </TabPanel>
        <TabPanel>
          {!wishlist || wishlist.length === 0 ? (
            <EmptyList />
          ) : (
            <ListedWishList />
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
