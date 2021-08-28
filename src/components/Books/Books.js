import classes from "./Books.module.css";

import BookItem from "./BookItem";
import allBooks from "../../assets/DummyBooksList";
import { useState } from "react";

const Books = (props) => {
  const [searchTitle, setSearchTitle] = useState("");

  // const booksList = allBooks.map((book) => (
  //   <BookItem
  //     key={book.id}
  //     id={book.id}
  //     name={book.name}
  //     price={book.price}
  //     details={book.details}
  //   />
  // ));

  const booksList = allBooks
    .filter((item) => {
      if (searchTitle === "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchTitle.toLowerCase())) {
        return item;
      }
    })
    .map((book) => (
      <BookItem
        key={book.id}
        id={book.id}
        name={book.name}
        price={book.price}
        details={book.details}
      />
    ));

  const titleChangeHandler = (event) => {
    setSearchTitle(event.target.value);
  };

  return (
    <div className={classes.books}>
      <div className={classes.searchheader}>
        <input
          placeholder="Search title..."
          type="text"
          onChange={titleChangeHandler}
          className={classes.titlesearchbar}
        />
      </div>
      <div className={classes.scroll}>
        <ul>{booksList}</ul>
      </div>
    </div>
  );
};

export default Books;