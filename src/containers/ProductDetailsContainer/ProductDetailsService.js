/* Intializes and adds items to the cart */
export const handleCart = (setCart, restProps) => {
  setCart((curCart) => [...curCart, restProps.state]);
};
