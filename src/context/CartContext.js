import { createContext, useReducer, useState } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext();

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [tempQty, setTempQty] = useState(1);

  const increase = (payload, target) => {
    dispatch({ type: 'INCREASE', payload, target });
  };

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleCheckout = () => {
    console.log('CHECKOUT', state);
    dispatch({ type: 'CHECKOUT' });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    setTempQty,
    tempQty,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
