export const getCartTotalPrice = (state) => state.cart.totalPrice;
export const getCartItems = (state) => state.cart.cart;
export const getCartTotalItems = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
