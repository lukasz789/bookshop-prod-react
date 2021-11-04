import TableRow from "../UI/TableRow";

const OrderDetailsItem = (props) => {
  return (
    <TableRow>
      <td>{props.name}</td>
      <td>{`$${props.price.toFixed(2)}`}</td>
      <td>{props.type}</td>
      <td>{props.amount}</td>
    </TableRow>
  );
};

export default OrderDetailsItem;
