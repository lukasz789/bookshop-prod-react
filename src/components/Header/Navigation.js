import React from "react";

import classes from "./Navigation.module.css";

import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <NavLinks />
    </div>
  );
};

export default Navigation;
