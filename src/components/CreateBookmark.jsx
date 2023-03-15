import React, { useState } from "react";
import { useBookmarksController } from "../BookmarksController";

export default function CreateBookmark() {
  const { createBookmark } = useBookmarksController();

  const [input, setInput] = useState("");
  const handleInputChange = (evt) => {
    setInput(evt.target.value);
  };

  const handleSubmit = () => {
    createBookmark(input);
    setInput("");
  };

  return (
    <div>
      <h1>Create Bookmark</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button style={{ margin: 15 }} onClick={handleSubmit}>
        Add Bookmark
      </button>
    </div>
  );
}
