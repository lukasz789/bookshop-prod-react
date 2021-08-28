import classes from "./BookDetails.module.css";
import Backdrop from "../UI/Backdrop";
import React from "react";
import Button from "../UI/Button";

const BookDetails = (props) => {
  return (
    <React.Fragment>
      <div className={classes.detailsmodal}>
        <div className={classes.details}>
          <h1>{props.name}</h1>
          {props.details}
        </div>
        <Button className={classes.btn} onClick={props.onClose}>
          OK
        </Button>
      </div>
      <Backdrop onClick={props.onClose} />
    </React.Fragment>
  );
};

export default BookDetails;
