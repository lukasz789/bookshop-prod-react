import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import NavButton from "../UI/NavButton";

import { auth } from "../../firebase/utils";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const logoutHandler = () => {
    auth.signOut();
  };

  return (
    <React.Fragment>
      {!currentUser && (
        <React.Fragment>
          <NavLink to="/register" activeClassName={classes.active}>
            <NavButton>Register</NavButton>
          </NavLink>
          <NavLink to="/login" activeClassName={classes.active}>
            <NavButton>Login</NavButton>
          </NavLink>
        </React.Fragment>
      )}
      {currentUser && (
        <React.Fragment>
          <NavButton onClick={logoutHandler}>Logout</NavButton>
          <NavButton>Orders</NavButton>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NavLinks;
