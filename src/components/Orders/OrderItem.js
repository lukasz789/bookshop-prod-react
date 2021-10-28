import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const orderDate = new Date(+props.id);

  const [month, day, year] = [
    orderDate.getMonth() + 1,
    orderDate.getDate(),
    orderDate.getFullYear(),
  ];

  const orderDateString = `${day}-${month}-${year}`;

  return (
    <tr className={classes.order}>
      <td className={classes.totalamount}>{orderDateString}</td>
      <td className={classes.totalamount}>{props.orderQuantity}</td>
      <td className={classes.totalamount}>{`$${props.totalAmount.toFixed(
        2
      )}`}</td>
    </tr>
  );
};

export default OrderItem;
