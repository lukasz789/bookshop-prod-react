import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;

export const validateEmail = (value) => {
  //eslint-disable-next-line
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (value) => {
  //eslint-disable-next-line
  if (/(?=.*[0-9a-zA-Z]).{6,}/.test(value)) {
    return true;
  } else {
    return false;
  }
};
