import { useState, useEffect } from "react";
import fetchData, { delayedFetchData } from "../../../../api/fetchData";
import { Product, ProductsData } from "../../../../@types/products";
import groupByKey from "../../../../utils/groupBy";
import ProductItem from "./ProductItem";

const ressource = delayedFetchData("/products");

const ProductsList = () => {
  ressource.read();

  const [sortedProducts, setSortedProducts] = useState<
    Record<string, Product[]>
  >({});

  useEffect(() => {
    fetchData<ProductsData>("/products")
      .then((data) => {
        const productsByCategory = groupByKey(data.products, "category");
        setSortedProducts(productsByCategory);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="product-list">
      {Object.entries(sortedProducts).map(([category, items]) => (
        <section key={category} className="product-category">
          <h2>{category}</h2>

          {items.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      ))}
    </div>
  );
};

export default ProductsList;
