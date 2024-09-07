import { getCartTotalPrice } from "@/redux/selectors/cart";
import { emptyCart } from "@/redux/slices/cartReducerSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartFooter = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const cartItemsTotalPrice = useSelector(getCartTotalPrice);

  const handleCheckout = () => {
    push("/");
    dispatch(emptyCart());
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-300 p-4 shadow-md mt-5">
      <div>
        <p className="font-bold">₹ {cartItemsTotalPrice}</p>
        <p>Total</p>
      </div>
      <div className="">
        <button
          className="rounded bg-green-800 text-white px-4 py-2"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
