import classes from "./Books.module.css";

import BookItem from "./BookItem";
import allBooks from "../../assets/DummyBooksList";

const Books = (props) => {
  const booksList = allBooks.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      name={book.name}
      price={book.price}
      details={book.details}
    />
  ));

  return (
    <div className={classes.books}>
      <div className={classes.scroll}>
        <ul>{booksList}</ul>
      </div>
    </div>
  );
};

export default Books;
