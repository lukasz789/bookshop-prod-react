import React from "react";

import HeaderBtn from "./HeaderBtn";

import classes from "./Header.module.css";
import BackgroundImage from "../UI/BackgroundImage";

import { Link } from "react-router-dom";
import NavButton from "../UI/NavButton";

import { auth } from "../../firebase/utils";

const Header = (props) => {
  const logoutHandler = () => {
    auth.signOut();
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.bookshopcaption}>Bookshop</h1>
        </Link>
        <div className={classes.rightnav}>
          {!props.currentUser && (
            <React.Fragment>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <NavButton>Register</NavButton>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <NavButton>Login</NavButton>
              </Link>
            </React.Fragment>
          )}
          {props.currentUser && (
            <React.Fragment>
              <NavButton onClick={logoutHandler}>Logout</NavButton>
              <HeaderBtn onClick={props.onOpen} />
            </React.Fragment>
          )}
        </div>
      </header>
      <BackgroundImage />
    </React.Fragment>
  );
};

export default Header;
