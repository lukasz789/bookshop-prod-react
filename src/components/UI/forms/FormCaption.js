import classes from "./FormCaption.module.css";

const FormCaption = (props) => {
  return (
    <h1 className={`${props.className} ${classes.caption} `}>
      {props.children}
    </h1>
  );
};

export default FormCaption;
