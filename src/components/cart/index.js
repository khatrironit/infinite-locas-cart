import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartReducerSlice";
import Image from "next/image";
import QuantitySelector from "@/shared/quantity-selector";
import CartFooter from "@/components/cart/footer";
import { getCartItems, getCartTotalPrice } from "@/redux/selectors/cart";

const MyCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const cartItemsTotalPrice = useSelector(getCartTotalPrice);

  const handleUpdateCart = (product, quantity = 1) => {
    if (quantity === 0) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const renderCartItem = (item) => (
    <div
      key={item.id}
      className="flex gap-2 justify-between border border-gray-300 p-3 m-3 rounded shadow-md"
    >
      <div className="flex gap-2">
        <Image
          className="w-20 h-20"
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
        />
        <div className="ml-2">
          <h1 className="font-bold truncate max-w-[200px]">{item.title}</h1>
          <p>{item.category}</p>
          <p className="font-bold">₹ {item.price * item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center">
        <QuantitySelector
          quantity={item.quantity}
          onChangeQuantity={(quantity) => handleUpdateCart(item, quantity)}
        />
      </div>
    </div>
  );

  const renderNoItemsView = () => (
    <div className="p-4 flex items-center justify-center">
      <h1 className="font-bold">Cart is Empty!!</h1>
    </div>
  );

  if (!cartItems.length) return renderNoItemsView();

  return (
    <div className="p-4 flex-1">
      <h1 className="text-2xl font-bold">My Cart</h1>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 w-1/2">
          {cartItems.map(renderCartItem)}
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="text-2xl font-bold">Bill Details</h1>
          <div className="card p-4 shadow-md">
            <div className="flex justify-between">
              <p className="font-bold">Subtotal</p>
              <p>₹ {cartItemsTotalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Delivery Charges</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Handling Charges</p>
              <p>Free</p>
            </div>
          </div>
          <CartFooter />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
