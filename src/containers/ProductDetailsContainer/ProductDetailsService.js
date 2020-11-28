/* Intializes and adds items to the cart */
export const handleCart = (setCart, restProps) => {
  setCart((curCart) => [...curCart, restProps.state]);
};

export const handleQuantity = (restProps) => {
  console.log("change!");
  return (restProps = {
    ...restProps,
    "restProps.state.quantity": restProps.state.quantity + 1,
  });
};
