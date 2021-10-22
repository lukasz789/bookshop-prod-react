import React from "react";

import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import BackgroundImage from "../UI/BackgroundImage";

import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import HeaderBtn from "./HeaderBtn";

const Header = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.bookshopcaption}>Bookshop</h1>
        </Link>
        <div className={classes.navlinks}>
          <Navigation />
          <MobileNavigation />
          {currentUser && <HeaderBtn onClick={props.onOpen} />}
        </div>
      </header>
      <BackgroundImage />
    </React.Fragment>
  );
};

export default Header;
