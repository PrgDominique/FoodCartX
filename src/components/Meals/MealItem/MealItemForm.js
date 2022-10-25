import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const EnteredAmountInt = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      EnteredAmountInt < 1 ||
      EnteredAmountInt > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(EnteredAmountInt);
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter the right amount (1-5) only.</p>}
    </form>
  );
};

export default MealItemForm;
