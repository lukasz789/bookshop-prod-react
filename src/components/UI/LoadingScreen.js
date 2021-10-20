import React from "react";

import Backdrop from "./Backdrop";
import { CircularProgress } from "@material-ui/core";
import BackgroundImage from "./BackgroundImage";

const LoadingScreen = () => {
  return (
    <React.Fragment>
      <Backdrop />
      <div
        style={{
          position: "fixed",
          left: "calc(50% - 2rem)",
          top: "calc(50% - 2rem)",
        }}
      >
        <CircularProgress size={"4rem"} color={"secondary"} />
      </div>
      <BackgroundImage />
    </React.Fragment>
  );
};

export default LoadingScreen;
