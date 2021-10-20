import React from "react";
import { useSelector } from "react-redux";

import HeaderBtn from "./HeaderBtn";

import classes from "./Header.module.css";
import BackgroundImage from "../UI/BackgroundImage";

import { Link, NavLink } from "react-router-dom";
import NavButton from "../UI/NavButton";

import { auth } from "../../firebase/utils";

const Header = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

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
          {!currentUser && (
            <React.Fragment>
              <NavLink
                to="/register"
                activeStyle={{ borderBottom: "1.5px solid white" }}
              >
                <NavButton>Register</NavButton>
              </NavLink>
              <NavLink
                to="/login"
                activeStyle={{ borderBottom: "1.5px solid white" }}
              >
                <NavButton>Login</NavButton>
              </NavLink>
            </React.Fragment>
          )}
          {currentUser && (
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
