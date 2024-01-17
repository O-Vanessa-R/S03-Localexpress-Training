import { useState, useEffect } from "react";
import fetchData, { delayedFetchData } from "../../../../api/fetchData";
import { Product, ProductsData } from "../../../../@types/products";

const ressource = delayedFetchData("/products");

const ProductsList = () => {
  ressource.read();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData<ProductsData>("/products")
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="product-list">
      <pre>{JSON.stringify(products, null, 4)}</pre>
    </div>
  );
};

export default ProductsList;
