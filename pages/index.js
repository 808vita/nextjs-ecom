import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const items = [
  {
    price: 9.99,
    title: "oof",
    desc: "laptop oof oof off hehe meme cat",
    id: 0,
    type: "laptop",
  },
  {
    price: 4.99,
    title: "oof1",
    desc: "mobile oof oof off hehe meme cat",
    id: 1,
    type: "mobile",
  },
  {
    price: 2.99,
    title: "oof2",
    desc: "guitar oof oof off hehe meme cat",
    id: 2,
    type: "guitar",
  },
  {
    price: 2.99,
    title: "oof2",
    desc: "mobile oof oof off hehe meme cat",
    id: 3,
    type: "guitar",
  },
];
export default function Home() {
  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Welcome!</h6>
      <div className="row g-3 text-center">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
