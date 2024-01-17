import { RootState } from "..";
import { Product } from "../../@types/products";

const isInCart = (productId: number) => (state: RootState) => {
  const found = state.cart.products.find(
    (product: Product) => product.id === productId
  );
  return found;
};

export default isInCart;
