const reducer = (state, action) => {
  if (action.type == "DISPLAY_DATA")
    return { ...state, cart: action.parameters };
  if (action.type == "STOP_LOADING") return { ...state, loading: false };
  if (action.type == "START_LOADING") return { ...state, loading: true };
  if (action.type == "CLEAR_CART") return { ...state, cart: [] };
  if (action.type == "REMOVE_ITEM") {
    const updatedCart = state.cart.filter(
      (item) => item.id !== action.parameters
    );
    return { ...state, cart: updatedCart };
  }
  if (action.type == "TOGGLE_AMOUNT") {
    const updatedCart = state.cart
      .map((item) => {
        if (item.id == action.parameters.id) {
          if (action.parameters.type == "inc") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.parameters.type == "dec") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: updatedCart };
  }

  if (action.type == "TOTAL_AMOUNT") {
    let { totalPrice, totalAmount } = state.cart.reduce(
      (accumulator, item) => {
        accumulator.totalAmount += item.amount;
        accumulator.totalPrice += item.price * item.amount;
        return accumulator;
      },
      {
        totalPrice: 0,
        totalAmount: 0,
      }
    );
    totalPrice = totalPrice.toFixed(2);
    return { ...state, amount: totalAmount, total: totalPrice };
  }

  return state;
};

export default reducer;
