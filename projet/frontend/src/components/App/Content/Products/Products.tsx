import { Suspense } from "react";
import "./Products.scss";
import ProductsList from "./ProductsList";
import Loading from "../../Loading";
import ErrorBoundary from "../../ErrorBoundary";
import Error from "../../Error.tsx";

function Products() {
  return (
    <section className="products">
      <ErrorBoundary
        fallback={
          <Error message={"Erreur lors de la récupération des produits"} />
        }
      >
        <Suspense fallback={<Loading />}>
          <ProductsList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default Products;
