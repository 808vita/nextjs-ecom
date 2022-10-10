import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts } from "../resources/LoadData";
import { useGlobalContext } from "../context/useGlobalContext";
import { Oval } from "react-loader-spinner";

export default function Home() {
  const [inCart, setInCart] = useState(null);
  const [productList, setProductList] = useState(null);
  const { cartCounts, setCartCounts } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInCart(JSON.parse(localStorage.getItem("cartItems")));
    fetchProducts(setProductList, setLoading);
  }, []);

  useEffect(() => {
    if (!inCart) {
      return;
    }
    console.log(inCart?.length);
    setCartCounts(inCart?.length);
  }, [inCart]);

  return (
    <div className="container-fluid mt-5">
      <h6 className="mb-3 text-center mb-3">Welcome!</h6>
      <div
        className="row g-5 text-center  border border-secondary rounded"
        style={{ maxWidth: "1000px", "--bs-border-opacity": 0.25 }}
      >
        {!loading ? (
          productList?.map((item) => (
            <ProductCard
              key={item._id}
              data={item}
              setInCart={setInCart}
              inCart={inCart}
            />
          ))
        ) : (
          <div className="d-flex flex-wrap align-items-center justify-content-center mb-2">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>
    </div>
  );
}
