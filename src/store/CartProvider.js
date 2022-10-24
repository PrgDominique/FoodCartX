import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updateItems = state.items.concat(action.item)
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }   
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({type: 'ADD', item: item})
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({type: 'REMOVE', id: id})
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
