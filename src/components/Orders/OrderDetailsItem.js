import TableRow from "../UI/TableRow";

const OrderDetailsItem = (props) => {
  return (
    <TableRow>
      <td>
        "{props.name}" - in {props.type}
      </td>
      <td>{`$${props.price.toFixed(2)}`}</td>
      <td>{props.amount}</td>
    </TableRow>
  );
};

export default OrderDetailsItem;
