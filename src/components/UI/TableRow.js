import classes from "./TableRow.module.css";

const TableRow = (props) => {
  return (
    <tr
      className={`${props.className} ${classes.order} `}
      onClick={props.onClick}
    >
      {props.children}
    </tr>
  );
};

export default TableRow;
