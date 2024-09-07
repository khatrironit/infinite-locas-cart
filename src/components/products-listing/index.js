import useFetchProducts from "@/hooks/use-fetch-products";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartReducerSlice";
import QuantitySelector from "@/shared/quantity-selector";
import { getCartItems } from "@/redux/selectors/cart";

const ProductsListing = () => {
  const { products, isLoading } = useFetchProducts();
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const handleUpdateCart = (product, quantity = 1) => {
    if (quantity === 0) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const isProductInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const getProductQuantity = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const renderAddCta = (product) => {
    if (!isProductInCart(product))
      return (
        <button
          className="rounded bg-green-800 text-white px-4 py-2"
          onClick={() => handleUpdateCart(product)}
        >
          Add
        </button>
      );

    return (
      <QuantitySelector
        quantity={getProductQuantity(product)}
        onChangeQuantity={(quantity) => handleUpdateCart(product, quantity)}
      />
    );
  };

  const renderProductCard = (product) => (
    <div
      key={product.id}
      className="p-4 border border-gray-300 rounded-md flex flex-col max-w-[200px] shadow-md"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="object-contain h-[100px] w-[100px] self-center mb-4"
      />
      <h1 className="text-lg font-bold truncate" title={product.title}>
        {product.title}
      </h1>
      <p className="text-sm text-gray-500 truncate">{product.category}</p>
      <div className="flex justify-between items-center mt-3">
        <p className="font-bold">₹{product.price}</p>
        {renderAddCta(product)}
      </div>
    </div>
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 m-4 items-center justify-center">
      {products.map(renderProductCard)}
    </div>
  );
};

export default ProductsListing;
