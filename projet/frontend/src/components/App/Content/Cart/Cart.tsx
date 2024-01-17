import "./Cart.scss";
import CartProduct from "./CartProduct";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { empty } from "../../../../store/features/cart/cartSlice";
import getCartTotal from "../../../../store/selectors/getCartTotal";
import { ProductInCart } from "../../../../@types/products";

function Cart() {
  const total = useAppSelector(getCartTotal);
  const products = useAppSelector((state) => state.cart.products);

  const dispatch = useAppDispatch();

  return (
    <aside className="cart">
      <div className="cart-top">
        <h2>Votre panier</h2>

        <button type="button" onClick={() => dispatch(empty())}>
          Vider le panier
        </button>
      </div>

      <section className="cart-products">
        {products.map((product: ProductInCart) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </section>

      <section className="cart-total">
        <strong>Total&nbsp;: {total}&nbsp;€</strong>
        <button type="button" className="big">
          Commander
        </button>
      </section>
    </aside>
  );
}

export default Cart;
