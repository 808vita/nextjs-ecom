import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Welcome!</h6>
      <div className="row g-3 text-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
