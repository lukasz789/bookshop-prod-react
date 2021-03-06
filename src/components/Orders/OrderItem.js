import { withRouter } from "react-router-dom";
import classes from "./OrderItem.module.css";

import TableRow from "../UI/TableRow";

const OrderItem = (props) => {
  const orderDate = new Date(+props.id);

  const [month, day, year] = [
    orderDate.getMonth() + 1,
    orderDate.getDate(),
    orderDate.getFullYear(),
  ];

  const stringDay = day < 10 ? "0" + day : "" + day;
  const stringMonth = month < 10 ? "0" + month : "" + month;

  const orderDateString = `${stringDay}-${stringMonth}-${year}`;

  const { history } = props;

  const tableRowClickHandler = () => {
    history.push({
      pathname: `/orders/${props.id}`,
    });
  };

  return (
    <TableRow onClick={tableRowClickHandler} className={classes.orderitem}>
      <td>{orderDateString}</td>
      <td>{props.orderQuantity}</td>
      <td>{`$${props.totalAmount.toFixed(2)}`}</td>
    </TableRow>
  );
};

export default withRouter(OrderItem);
