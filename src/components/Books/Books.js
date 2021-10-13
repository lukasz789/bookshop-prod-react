import classes from "./Books.module.css";
import Card from "../UI/Card";

import BookItem from "./BookItem";
import allBooks from "../../assets/DummyBooksList";
import { useState } from "react";

const Books = (props) => {
  const [searchTitle, setSearchTitle] = useState("");

  const booksList = allBooks
    .filter((item) => {
      if (searchTitle === "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchTitle.toLowerCase())) {
        return item;
      }
      return false;
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
    <Card>
      <div className={classes.searchheader}>
        <input
          placeholder="Search title..."
          type="text"
          onChange={titleChangeHandler}
          className={classes.titlesearchbar}
          maxLength="20"
        />
      </div>
      <div className={classes.scroll}>
        <ul>{booksList}</ul>
      </div>
    </Card>
  );
};

export default Books;
