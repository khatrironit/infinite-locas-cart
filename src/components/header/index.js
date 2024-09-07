import React from "react";
import { getCartTotalItems, getCartTotalPrice } from "@/redux/selectors/cart";
import { useSelector } from "react-redux";
import Link from "next/link";

const Header = ({ isInCart }) => {
  const totalItemsInCart = useSelector(getCartTotalItems);
  const cartItemsTotalPrice = useSelector(getCartTotalPrice);

  const renderCartDetails = () => {
    if (!totalItemsInCart) return null;
    return (
      <div className="text-sm font-bold">
        <div>{totalItemsInCart} items</div>
        <div>₹ {cartItemsTotalPrice}</div>
      </div>
    );
  };

  const renderCartSection = () => {
    if (isInCart) return <Link href="/">Back</Link>;
    return (
      <Link
        href="/cart"
        className="flex items-center gap-2 rounded-md bg-green-800 text-white p-2 cursor-pointer"
      >
        <span className="text-sm font-bold">Cart</span>
        {renderCartDetails()}
      </Link>
    );
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-300 p-4 shadow-md">
      <div className="text-5xl font-bold border-r border-gray-300 pr-4">
        <span className="text-yellow-500">blink</span>
        <span className="text-green-800">it</span>
      </div>
      {renderCartSection()}
    </div>
  );
};

export default Header;
