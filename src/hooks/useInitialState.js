// Toma el boton de agregar carrito y se ejecutará esta acción
import { useState } from "react";

const initialState = {
  cart: [],
  toggleOrders: false,

};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload, callBack) => {
    setState({
      ...state,
      cart: [...state.cart,[payload, callBack]]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item[0].id !== payload.id)

    })};

  // Valida si un elemento está en el carrito y devuelve un boolean
  const isInCart = (id) => {
    return state.cart.some((item) => item.id === id);
  }

  const changeToggle = () => {
    setState({
      ...state,
      toggleOrders: !state.toggleOrders
  })};

  return {
    state,
    addToCart,
    removeFromCart,
    changeToggle,
    isInCart
  }

}

export default useInitialState;