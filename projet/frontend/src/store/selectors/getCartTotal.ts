import { RootState } from "..";

const getCartTotal = (state: RootState) =>
  state.cart.products.reduce(
    (previous: number, current) => previous + current.price * current.quantity,
    0
  );

export default getCartTotal;
