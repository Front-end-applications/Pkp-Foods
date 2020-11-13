/* Removes an item from cart on click of delete button */
export const handleDelete = (index, setCart) => {
  setCart((currCart) => {
    let newCart = [...currCart];
    newCart.splice(index, 1);
    return newCart;
  });
};
