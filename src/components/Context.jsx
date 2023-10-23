import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const url = `https://course-api.com/react-useReducer-cart-project`;

export const AppContext = React.createContext();

const initialState = {
  loading: true,
  cart: [],
  amount: 0,
  total: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      response = await response.json();
      dispatch({ type: "DISPLAY_DATA", parameters: response });
      dispatch({ type: "STOP_LOADING" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "START_LOADING" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", parameters: id });

  const toggleAmount = (id, type) =>
    dispatch({ type: "TOGGLE_AMOUNT", parameters: { id, type } });

  const total = () => {
    dispatch({ type: "TOTAL_AMOUNT" });
  };

  useEffect(() => {
    total();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, toggleAmount, clearCart, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobally = () => useContext(AppContext);
