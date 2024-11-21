import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const showCArt = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://e-commerce-7ecc8-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [cart]);

  return (
    <Layout>
      {showCArt && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
