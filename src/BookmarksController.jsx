import React, { createContext, useEffect, useContext, useState } from "react";
import bookmarkService from "./services/BookmarkService";
const BookmarksControllerContext = createContext({});

export function ProvideBookmarksController({ children }) {
  const provider = useController();
  return (
    <BookmarksControllerContext.Provider value={provider}>
      {children}
    </BookmarksControllerContext.Provider>
  );
}

export const useBookmarksController = () => {
  return useContext(BookmarksControllerContext);
};

function useController() {
  useEffect(() => {
    console.log("Bookmarks Controller Mounted");

    return () => {
      console.log("Bookmarks Controller Unmounted");
    };
  }, []);

  const [bookmarks, setBookmarks] = useState([]);

  async function getAllBookmarks() {
    try {
      const results = await bookmarkService.getAllBookmarks();
      setBookmarks(results);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneBookmark(id) {
    try {
      const results = await bookmarkService.getOneBookmark(id);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async function createBookmark(bookmark) {
    try {
      const results = await bookmarkService.createBookmark(bookmark);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBookmark(id) {
    try {
      const results = await bookmarkService.deleteBookmark(id);
      return results;
    } catch (error) {
      console.log(error);
    }
  }
  async function updateBookmark(id, bookmark) {
    try {
      const results = await bookmarkService.updateBookmark(id, bookmark);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getAllBookmarks,
    getOneBookmark,
    createBookmark,
    deleteBookmark,
    updateBookmark,
    bookmarks,
  };
}
