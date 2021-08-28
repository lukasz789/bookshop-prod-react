import classes from "./BookItemForm.module.css";

import Button from "../UI/Button";
import { useState } from "react";

const BookItemForm = (props) => {
  const [typeSelected, setTypeSelected] = useState("paper");
  let paperCounter = 0;
  let ebookCounter = 0;

  const submitHandler = (event) => {
    event.preventDefault();
    if (typeSelected === "paper") {
      props.onAdd(typeSelected, ++paperCounter);
    } else {
      props.onAdd(typeSelected, ++ebookCounter);
    }
  };

  const optionChangeHandler = (event) => {
    setTypeSelected(event.target.value);
  };

  const highlight = `${props.formStatus ? classes.highlight : ``}`;

  const allClasses = [classes.item + ` ` + highlight];

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <select
        value={typeSelected}
        name="booktype"
        className={classes.select}
        onChange={optionChangeHandler}
      >
        <option value="ebook">E-book</option>
        <option value="paper">Paper</option>
      </select>
      <Button type="submit" className={allClasses}>
        + Add
      </Button>
    </form>
  );
};

export default BookItemForm;
