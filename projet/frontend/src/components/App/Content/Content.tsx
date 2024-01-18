import Products from "./Products/Products";
import Cart from "./Cart/Cart";

import "./Content.scss";
import fetchData from "../../../api/fetchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Content() {
  async function onClick() {
    try {
      //const ressource = await fetchData("/products");
      const ressource = await fetchData("/bad-products");
      console.log("Resource:", ressource);

      return toast.success("Chargement réussi !");
    } catch (error) {
      console.error(error);
      toast.error("Mince ! Une erreur !");
    }
  }

  return (
    <>
      <ToastContainer />
      <button type="button" className="button" onClick={() => onClick()}>
        Je veux une erreur
      </button>
      <main className="content-grid">
        <Products />
        <Cart />
      </main>
    </>
  );
}

export default Content;
