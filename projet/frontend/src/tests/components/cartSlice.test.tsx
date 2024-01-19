import { describe, expect, it } from "vitest";

import { ProductInCart } from "../../@types/products";
import reducer, {
  CartState,
  add,
  empty,
  increment,
  quantity,
  remove,
} from "../../store/features/cart/cartSlice";

describe("cartSlice tests", () => {
  const mockProduct: ProductInCart = {
    id: 1,
    title: "Machine à laver 8kg",
    description: "Description du produit",
    price: 200,
    discountPercentage: 0,
    rating: 4.5,
    stock: 2,
    brand: "Candy",
    category: "Machine à laver",
    thumbnail: "blabla.jpg",
    images: ["test-image-url"],
    quantity: 1,
  };

  const previousState: CartState = { products: [] };

  it("should add to cart when button is clicked", () => {
    expect(reducer(previousState, add(mockProduct))).toEqual({
      products: [mockProduct],
    });
  });

  it("Should add one more product to an existing cart", () => {
    const initialState: CartState = {
      products: [mockProduct],
    };

    const newState = reducer(initialState, add(mockProduct));

    expect(newState.products).toHaveLength(2);
    expect(newState.products).toContainEqual(mockProduct);
  });

  it("Should increment product in a cart", () => {
    const initialState: CartState = {
      products: [mockProduct, { ...mockProduct, id: 2 }],
    };

    const newState = reducer(initialState, increment(1));

    expect(newState).toEqual({
      products: [
        { ...mockProduct, quantity: 2 },
        { ...mockProduct, id: 2 },
      ],
    });
    expect(newState.products).toHaveLength(2);
  });

  it("Should quantity product in a cart", () => {
    const initialState: CartState = {
      products: [mockProduct, { ...mockProduct, id: 2 }],
    };

    const newState = reducer(initialState, quantity({ id: 1, qty: 23 }));

    expect(newState).toEqual({
      products: [
        { ...mockProduct, quantity: 23 },
        { ...mockProduct, id: 2 },
      ],
    });
    expect(newState.products).toHaveLength(2);
  });

  it("Should remove product in a cart", () => {
    const initialState: CartState = {
      products: [
        mockProduct,
        { ...mockProduct, id: 2 },
        { ...mockProduct, id: 3 },
        { ...mockProduct, id: 4 },
      ],
    };

    const newState = reducer(initialState, remove(1));

    expect(newState).toEqual({
      products: [
        { ...mockProduct, id: 2 },
        { ...mockProduct, id: 3 },
        { ...mockProduct, id: 4 },
      ],
    });
    expect(newState.products).toHaveLength(3);
    expect(newState).not.toContainEqual(mockProduct);
  });

  it("Should empty the cart", () => {
    const initialState: CartState = {
      products: [
        mockProduct,
        { ...mockProduct, id: 2 },
        { ...mockProduct, id: 3 },
        { ...mockProduct, id: 4 },
      ],
    };

    const newState = reducer(initialState, empty());

    expect(newState).toEqual({ products: [] });
    expect(newState.products).toHaveLength(0);
  });
});
