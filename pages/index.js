import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts } from "../resources/LoadData";

export default function Home() {
  const [inCart, setInCart] = useState(null);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    setInCart(JSON.parse(localStorage.getItem("cartItems")));
    fetchProducts(setProductList);
  }, []);

  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Welcome!</h6>
      <div className="row g-3 text-center ">
        {productList?.map((item) => (
          <ProductCard
            key={item._id}
            data={item}
            setInCart={setInCart}
            inCart={inCart}
          />
        ))}
      </div>
    </div>
  );
}
