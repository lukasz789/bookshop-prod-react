import React from "react";

import HeaderBtn from "./HeaderBtn";

import classes from "./Header.module.css";
import BackgroundImage from "../UI/BackgroundImage";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 className={classes.bookshopcaption}>Bookshop</h1>
        <HeaderBtn onClick={props.onOpen} />
      </header>
      <BackgroundImage />
    </React.Fragment>
  );
};

export default Header;
