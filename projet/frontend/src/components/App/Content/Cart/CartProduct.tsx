import { ChangeEvent } from 'react';

import { useAppDispatch } from '../../../../hooks/redux';

import { ProductInCart } from '../../../../@types/products';
import { quantity, remove } from '../../../../store/features/cart/cartSlice';

interface CartProductProps {
    product: ProductInCart;
}

function CartProduct({ product }: CartProductProps) {
    const dispatch = useAppDispatch();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const newQty = Number(event.target.value);

        if (newQty === 0) {
            dispatch(remove(product.id));
        }
        else {
            dispatch(quantity({ id: product.id, qty: newQty }));
        }
    }

    return (
        <article className="cart-product">
            <img src={product.images[0]} alt={product.title} />

            <div>
                <h3>{product.title}</h3>

                <ul>
                    <li>
                        qté : {" "}
                        <input
                            name="qty"
                            type="number"
                            min={0}
                            max={product.stock}
                            value={product.quantity}
                            onChange={handleChange}
                        />
                    </li>
                    <li>{product.quantity * product.price} €</li>
                </ul>
            </div>

            <button
                type="button"
                className="delete"
                title="Supprimer"
                onClick={() => dispatch(remove(product.id))}
            >
                X
            </button>
        </article>
    );
}

export default CartProduct;