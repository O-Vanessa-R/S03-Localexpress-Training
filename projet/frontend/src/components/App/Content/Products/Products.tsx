import { Suspense } from "react";
import "./Products.scss";
import ProductsList from "./ProductsList";
import Loading from "../../Loading";

function Products() {
  return (
    <section className="products">
      <Suspense fallback={<Loading />}>
        <ProductsList />
      </Suspense>
    </section>
  );
}

export default Products;
