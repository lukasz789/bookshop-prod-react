import React, { useState } from "react";

import classes from "./MobileNavigation.module.css";

import NavLinks from "./NavLinks";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import ReactDOM from "react-dom";

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickMenuBtnHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <React.Fragment>
      {!openMenu && (
        <div className={classes.menu}>
          <MenuIcon fontSize="large" onClick={clickMenuBtnHandler} />
        </div>
      )}
      {openMenu && (
        <div className={classes.menu}>
          <CloseIcon fontSize="large" onClick={clickMenuBtnHandler} />
        </div>
      )}
      {ReactDOM.createPortal(
        <div className={classes.mobileNav}>
          {openMenu && (
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
