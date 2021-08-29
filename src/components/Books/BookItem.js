import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./BookItem.module.css";
import BookItemForm from "./BookItemForm";
import { useState } from "react";
import BookDetails from "./BookDetails";

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [formStatus, setFormStatus] = useState(false);
  const [detailsStatus, setDetailsStatus] = useState(false);

  const nameClasses = `${classes.name} ${formStatus ? classes.shake : ``}`;

  const addItemHandler = (type, amount) => {
    cartCtx.addItem({
      id: `${props.id}_${type}`,
      name: props.name,
      price: props.price,
      type: type,
      amount: amount,
    });
    setFormStatus(true);
  };

  const closeMoreinfoHandler = () => {
    setDetailsStatus(false);
  };

  const clickMoreinfoHandler = () => {
    setDetailsStatus(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormStatus(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [formStatus]);

  return (
    <li className={classes.book}>
      <h1 className={nameClasses}>{props.name}</h1>
      <div className={classes.price}>${props.price.toFixed(2)}</div>
      <div className={classes.moreinfo} onClick={clickMoreinfoHandler}>
        more info
      </div>
      {detailsStatus && (
        <BookDetails
          name={props.name}
          details={props.details}
          onClose={closeMoreinfoHandler}
        />
      )}
      <div>
        <BookItemForm
          id={props.id}
          onAdd={addItemHandler}
          formStatus={formStatus}
        />
      </div>
    </li>
  );
};

export default BookItem;
