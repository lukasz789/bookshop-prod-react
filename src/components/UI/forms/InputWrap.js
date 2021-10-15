import classes from "./InputWrap.module.css";

const InputWrap = (props) => {
  const inputClasses = props.hasError
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];

  return (
    <div className={`${props.className} ${inputClasses} `}>
      {props.children}
    </div>
  );
};

export default InputWrap;
