import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);

    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading };
};

export default useFetchProducts;
