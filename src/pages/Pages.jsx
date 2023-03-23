import React from "react";
import Annocument from "../Components/annocument/Annocument";
import Discount from "../Components/discount/Discount";
import FlashDeals from "../Components/flashdeals/FlashDeals";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home";
import NewArrivals from "../Components/newArrivals/NewArrival";
import Shop from "../Components/Shop/Shop";
import TopCate from "../Components/Top/TopCate";
import Wrapper from "../Components/Wrapper/Wrapper";

const Pages = ({ productItems, CartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
      <Footer />
    </>
  );
};

export default Pages;
