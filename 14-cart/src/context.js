import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const initialContext = {
  state: {},
  clearCart: () => {},
  removeItem: () => {},
  increase: () => {},
  decrease: () => {},
};
const AppContext = React.createContext(initialContext);
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }
  function increase(id) {
    dispatch({ type: "INCREASE", payload: id });
  }
  function decrease(id) {
    dispatch({ type: "DECREASE", payload: id });
  }
  async function fetchData(url) {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  }
  useEffect(() => {
    fetchData(url);
  }, []);
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
