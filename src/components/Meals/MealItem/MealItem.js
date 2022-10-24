import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const CartCtx = useContext(CartContext)

  const AddToCardHandler = (amount) => {
      CartCtx.addItem({
        id: props.id,
        name: props.name,
        item: props.item,
        amount: amount,
        price: props.price
      })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={AddToCardHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
