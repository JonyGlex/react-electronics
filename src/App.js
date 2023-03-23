import Header from "./Components/Header";
import "../src/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import { useState } from "react";
import Data from "../src/Components/flashdeals/Data";
import Cart from "./Components/Cart/Cart";
import Sdata from "../src/Components/Shop/Sdata";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [CartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCardItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header CartItem={CartItem} />
        <Routes>
          {/*   {<Route exact path="/" element={<Header />} />} */}
          <Route
            exact
            path="/"
            element={
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
