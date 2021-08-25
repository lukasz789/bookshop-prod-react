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

  const addItemHandler = (type) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      type: type,
    });
  };

  const closeMoreinfoHandler = () => {
    setDetailsStatus(false);
  };

  const clickMoreinfoHandler = () => {
    setDetailsStatus(true);
  };

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setFormStatus(false);
    } else {
      if (cartCtx.items.findIndex((item) => props.id === item.id) >= 0) {
        setFormStatus(true);
      } else {
        setFormStatus(false);
      }
    }
  }, [cartCtx.items, props.id]);

  return (
    <li className={classes.book}>
      <div className={classes.bookdetails}>
        <h2>{props.name}</h2>
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
      </div>
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
