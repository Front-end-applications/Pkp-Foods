/* Intializes and adds items to the cart */
export const handleCart = (setCart, restProps) => {
  setCart((curCart) => [...curCart, restProps]);
};

/* Handle changes to quantity field */
export const handleQuantity = (event, state, setState) => {
  if (event.target.value === "+") {
    event.target.validity.valid &&
      setState({ ...state, quantity: state.quantity + 1 });
  } else if (event.target.value === "-") {
    if (state.quantity > 1) {
      event.target.validity.valid &&
        setState({ ...state, quantity: state.quantity - 1 });
    }
  } else {
    event.target.validity.valid &&
      setState({ ...state, quantity: event.target.value });
  }
};

export const handleBlurQuantity = (event, state, setState) => {
  if (event.target.value.length === 0)
    event.target.validity.valid && setState({ ...state, quantity: 1 });
};
