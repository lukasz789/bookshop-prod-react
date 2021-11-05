import classes from "./TableHeader.module.css";

const TableHeader = (props) => {
  return (
    <tr className={`${props.className} ${classes.tableheader} `}>
      {props.children}
    </tr>
  );
};

export default TableHeader;
