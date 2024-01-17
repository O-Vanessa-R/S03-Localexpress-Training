import { SyntheticEvent, useState } from "react";
import { Product } from "../../../../@types/products";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { add, increment } from "../../../../store/features/cart/cartSlice";
import isInCart from "../../../../store/selectors/isInCart";
import Modal from "../../Modal";
import { createPortal } from "react-dom";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const alreadyInCart = useAppSelector(isInCart(product.id));
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const addToCart = () => {
    if (alreadyInCart) {
      dispatch(increment(product.id));
    } else {
      dispatch(add({ ...product, quantity: 1 }));
    }
  };

  const openModal = () => {
    console.log("Je suis dans openModal");
    setShowModal(true);
  };

  const closeModal = (e: SyntheticEvent) => {
    console.log("Je suis dans closeModal");
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <article className="product-item" onClick={openModal}>
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

        {showModal &&
          createPortal(
            <Modal product={product} onClose={closeModal} />,
            document.body
          )}
      </div>
    </article>
  );
}

export default ProductItem;
