import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  // define state variables to store current title and author

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // on click Add book button
  const handleSubmit = (event) => {
    event.preventDefault();
    // addBook(title, author);
    console.log(title, author);
    dispatch({ type: "ADD_BOOK", book: { title: title, author: author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        placeholder="Enter author"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default NewBookForm;
