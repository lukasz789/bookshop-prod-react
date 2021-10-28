import React from "react";

import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import BackgroundImage from "../UI/BackgroundImage";

import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import HeaderBtn from "./HeaderBtn";

import { useDispatch } from "react-redux";
import { uiActions } from "../../redux-store/ui-slice";

const Header = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const clickHeaderCaptionHandler = () => {
    dispatch(uiActions.setMobileNavMenu(false));
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            className={classes.bookshopcaption}
            onClick={clickHeaderCaptionHandler}
          >
            Bookshop
          </h1>
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
