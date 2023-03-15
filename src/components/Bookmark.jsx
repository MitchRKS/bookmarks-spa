import React, { useEffect, useState } from "react";
import { useParams } from "react-dom";

export default function Bookmark() {
  const { id } = useParams();

  const { getSingleBookmark, deleteBookmark, updateBookmark } = useController();

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState({
    _id: "",
    body: "",
  });

  const fetchAndLoadBookmark = async () => {
    setLoading(true);
    try {
      const bookmark = await getSingleBookmark(id);
      console.log(bookmark);
      setActiveBookmark(bookmark);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndLoadBookmark();
  }, []);

  const [updatedBookmark, setUpdatedBookmark] = useState("");

  useEffect(() => {
    if (editing && activeBookmark.body) {
      setUpdatedBookmark(activeBookmark.body);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  const updateBookmarkAndRefresh = async () => {
    await updateBookmark(activeBookmark._id, updatedBookmark);
    setActiveBookmark((prev) => ({ _id: prev._id, body: updatedBookmark }));
  };

  const handleEditForm = (e) => {
    setUpdatedBookmark(e.target.value);
  };

  const handleDelete = () => {
    deleteBookmark(activeBookmark._id);
  };

  const handleEditToggle = () => {
    if (editing) {
      updateBookmarkAndRefresh();
    }
    setEditing((prev) => !prev);
  };

  return (
    <div>
      <h1>Single Bookmark</h1>
      {loading && <p>loading...</p>}
      {!loading && activeBookmark && (
        <>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {editing ? (
            <input
              type="text"
              value={updatedBookmark}
              onChange={handleEditForm}
              style={{
                width: 300,
              }}
            />
          ) : (
            <p>{activeBookmark.body}</p>
          )}
        </>
      )}
    </div>
  );
}
