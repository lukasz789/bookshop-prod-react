import classes from "./Table.module.css";

const Table = (props) => {
  return (
    <table className={`${props.className} ${classes.table} `}>
      {props.children}
    </table>
  );
};

export default Table;
