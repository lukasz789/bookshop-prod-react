import classes from "./Caption.module.css";

const Caption = (props) => {
  return (
    <h1 className={`${props.className} ${classes.caption} `}>
      {props.children}
    </h1>
  );
};

export default Caption;
