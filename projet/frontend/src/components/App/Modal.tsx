import { SyntheticEvent } from "react";
import { Product } from "../../@types/products";

import "./Modal.scss";

interface ModalProps {
  product: Product;
  onClose: (e: SyntheticEvent) => void;
}

const Modal = ({ product, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2>{product.title}</h2>
        <img
          src={product.images[0]}
          alt={product.title}
          className="modal-image"
        />
        <img
          src={product.thumbnail}
          alt={product.title}
          className="modal-image"
        />
        <h3>
          {product.brand && (
            <>
              Marque : {product.brand}
              <br />
            </>
          )}
          <br />
          Catégorie : {product.category}
          <br />
          Description : {product.description}
          <br />
          Prix : {product.price} €<br />
          {product.discountPercentage && (
            <>
              Promo : {product.discountPercentage} %
              <br />
            </>
          )}
          {product.rating && (
            <>
              Note :{product.rating}
              <br />
            </>
          )}
          {product.stock && (
            <>
              Stock : {product.stock}
              <br />
            </>
          )}
        </h3>
        <br />
        <button className="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
