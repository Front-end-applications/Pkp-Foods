/* Removes an item from cart on click of delete button */
export const handleDelete = (index, setCart) => {
  setCart((currCart) => {
    let newCart = [...currCart];
    newCart.splice(index, 1);
    return newCart;
  });
};

/* Handle changes to quantity field */
export const handleQuantity = (event, product, index, cart, setCart) => {
  const newState = cart;
  if (event.target.value === "+") {
    event.target.validity.valid && (product.quantity = product.quantity + 1);
  } else if (event.target.value === "-") {
    if (product.quantity > 1) {
      event.target.validity.valid && (product.quantity = product.quantity - 1);
    }
  } else {
    event.target.validity.valid && (product.quantity = event.target.value);
  }
  newState[index] = product;
  setCart(newState);
};

export const handleBlurQuantity = (
  event,
  product,
  index,
  state,
  setState
) => {};
