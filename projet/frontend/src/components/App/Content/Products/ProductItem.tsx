import { Product } from "../../../../@types/products";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { add, increment } from "../../../../store/features/cart/cartSlice";
import isInCart from "../../../../store/selectors/isInCart";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const alreadyInCart = useAppSelector(isInCart(product.id));
  const dispatch = useAppDispatch();

  const addToCart = () => {
    if (alreadyInCart) {
      dispatch(increment(product.id));
    } else {
      dispatch(add({ ...product, quantity: 1 }));
    }
  };

  return (
    <article className="product-item">
      <header>
        <h3>{product.title}</h3>
      </header>

      <img src={product.images[0]} alt={product.title} />

      <div>
        <span>
          {product.price} <abbr title="EUR">€</abbr>
        </span>

        <p>{product.description}</p>

        <button type="button" onClick={addToCart}>
          Ajouter
        </button>
      </div>
    </article>
  );
}

export default ProductItem;
