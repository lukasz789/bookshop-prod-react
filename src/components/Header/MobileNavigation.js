import React from "react";

import classes from "./MobileNavigation.module.css";

import NavLinks from "./NavLinks";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux-store/ui-slice";

const MobileNavigation = () => {
  const dispatch = useDispatch();
  const mobileNavMenu = useSelector((state) => state.ui.mobileNavMenu);

  const openMenuBtnHandler = () => {
    dispatch(uiActions.setMobileNavMenu(true));
  };

  const closeMenuBtnHandler = () => {
    dispatch(uiActions.setMobileNavMenu(false));
  };

  return (
    <React.Fragment>
      {!mobileNavMenu && (
        <div className={classes.menu}>
          <MenuIcon fontSize="large" onClick={openMenuBtnHandler} />
        </div>
      )}
      {mobileNavMenu && (
        <div className={classes.menu}>
          <CloseIcon fontSize="large" onClick={closeMenuBtnHandler} />
        </div>
      )}
      {ReactDOM.createPortal(
        <div className={classes.mobileNav}>
          {mobileNavMenu && (
            <div className={classes.popupMenu}>
              <NavLinks />
            </div>
          )}
        </div>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default MobileNavigation;
