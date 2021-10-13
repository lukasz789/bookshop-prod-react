import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className} ${classes.button} `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
