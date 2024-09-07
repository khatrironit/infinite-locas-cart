import React from "react";
import Header from "@/components/header";
import MyCart from "@/components/cart";

const Cart = () => {
  return (
    <div>
      <Header isInCart />
      <MyCart />
    </div>
  );
};

export default Cart;
