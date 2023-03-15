import React, { useEffect } from "react";
import { useBookmarksController } from "../BookmarksController";

export default function AllBookmarks() {
  const { getAllBookmarks, bookmarks } = useBookmarksController();
  //   console.log(bookmarks);

  useEffect(() => {
    getAllBookmarks();
  }, [getAllBookmarks]);
  return (
    <div>
      <h1>All Bookmarks</h1>
      <div className="">
        {Array.isArray(bookmarks) &&
          bookmarks.map((bookmark) => {
            return (
              <div key={bookmark._id}>
                <p>{bookmark._id}</p>
                <p>{bookmark.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
