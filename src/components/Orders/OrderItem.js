import { withRouter } from "react-router-dom";

import TableRow from "../UI/TableRow";

const OrderItem = (props) => {
  const orderDate = new Date(+props.id);

  const [month, day, year] = [
    orderDate.getMonth() + 1,
    orderDate.getDate(),
    orderDate.getFullYear(),
  ];

  const orderDateString = `${day}-${month}-${year}`;

  const { history } = props;

  const tableRowClickHandler = () => {
    history.push({
      pathname: `/orders/${props.id}`,
    });
  };

  return (
    <TableRow onClick={tableRowClickHandler}>
      <td>{orderDateString}</td>
      <td>{props.orderQuantity}</td>
      <td>{`$${props.totalAmount.toFixed(2)}`}</td>
    </TableRow>
  );
};

export default withRouter(OrderItem);
