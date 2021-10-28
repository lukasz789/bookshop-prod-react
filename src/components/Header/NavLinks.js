import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import NavButton from "../UI/NavButton";

import { auth } from "../../firebase/utils";

import classes from "./NavLinks.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../redux-store/ui-slice";

const NavLinks = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    auth.signOut();
  };

  const clickNavBtnHandler = () => {
    dispatch(uiActions.setMobileNavMenu(false));
  };

  return (
    <React.Fragment>
      {!currentUser && (
        <React.Fragment>
          <NavLink
            to="/register"
            activeClassName={classes.active}
            onClick={clickNavBtnHandler}
          >
            <NavButton>Register</NavButton>
          </NavLink>
          <NavLink
            to="/login"
            activeClassName={classes.active}
            onClick={clickNavBtnHandler}
          >
            <NavButton>Login</NavButton>
          </NavLink>
        </React.Fragment>
      )}
      {currentUser && (
        <React.Fragment>
          <NavButton
            onClick={() => {
              logoutHandler();
              clickNavBtnHandler();
            }}
          >
            Logout
          </NavButton>
          <NavLink
            to="/orders"
            activeClassName={classes.active}
            onClick={clickNavBtnHandler}
          >
            <NavButton>Orders</NavButton>
          </NavLink>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NavLinks;
