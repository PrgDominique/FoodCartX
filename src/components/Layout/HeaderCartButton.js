import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const [btnHighlighted, setBtnHighLighted] = useState(false)
  const { items } = CartCtx

  const BtnBump = `${classes.button} ${btnHighlighted ? classes.bump : ''}`
  const NumberOfCartHandler = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  useEffect(() =>{
    if(items.length === 0) {
      return
    }
    setBtnHighLighted(true)
    const timer = setTimeout(() => {
      setBtnHighLighted(false)
    } ,300)
    return () => {
      clearTimeout(timer)
    }
  }
  ,[items])
  return (
    <button className={BtnBump} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumberOfCartHandler}</span>
    </button>
  );
};

export default HeaderCartButton;
