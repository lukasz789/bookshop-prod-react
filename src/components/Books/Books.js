import classes from "./Books.module.css";
import Card from "../UI/Card";

import BookItem from "./BookItem";
import React, { useState, useEffect } from "react";

import { CircularProgress } from "@material-ui/core";

import { firestore } from "../../firebase/utils";

const Books = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        await firestore
          .collection("books")
          .get()
          .then((snapshot) => {
            if (snapshot.empty && snapshot.metadata.fromCache) {
              throw new Error();
            }
            const allBooks = snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
              };
            });
            setAllBooks(allBooks);
          });
      } catch (err) {
        console.log(err);
        setErrorMsg(
          "Something went wrong. Please check Your internet connection or try again later."
        );
      }
    };

    fetchAllBooks();
  }, []);

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
        {allBooks.length > 0 ? (
          <ul>{booksList}</ul>
        ) : (
          <React.Fragment>
            {errorMsg !== "" && <h3 className={classes.error}>{errorMsg}</h3>}
            {errorMsg === "" && (
              <div
                style={{
                  position: "fixed",
                  left: "calc(50% - 2rem)",
                  top: "calc(50% - 0.5rem)",
                }}
              >
                <CircularProgress size={"4rem"} color={"secondary"} />
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </Card>
  );
};

export default Books;
