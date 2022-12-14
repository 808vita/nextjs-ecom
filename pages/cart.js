import Link from "next/link";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import CartCard from "../components/CartCard";
import { useGlobalContext } from "../context/useGlobalContext";
import { itemsList } from "../data/itemsList";
import { fetchProducts } from "../resources/LoadData";

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);
  const [productList, setProductList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);
  const { cartCounts, setCartCounts } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    fetchProducts(setProductList, setLoading);
  }, []);

  useEffect(() => {
    if (!cartItems) {
      return;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (!cartItems || !productList) {
      return;
    }
    let filteredCartItems = productList?.filter((e) =>
      cartItems?.includes(e._id)
    );
    setCurrentItems(filteredCartItems);
    console.log(filteredCartItems);

    setCartTotal(
      filteredCartItems.reduce(
        (previousValue, object) => previousValue + object.price,
        0
      )
    );
  }, [cartItems, productList]);

  useEffect(() => {
    if (!cartItems) {
      return;
    }
    console.log(cartItems?.length);
    setCartCounts(cartItems?.length);
  }, [cartItems]);

  return (
    <div
      className="container-fluid border border-secondary rounded pt-5 px-5 pe-5"
      style={{ "--bs-border-opacity": 0.25 }}
    >
      {loading ? (
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
      ) : cartItems?.length > 0 ? (
        <>
          <h6 className="mb-3 text-center">Current Items In Cart</h6>

          <div className="row g-8 text-center">
            <div className="col-sm-12 mb-3">
              {cartItems?.length > 0 &&
                productList?.map(
                  (item) =>
                    cartItems.includes(item._id) && (
                      <CartCard
                        key={item._id}
                        data={item}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                      />
                    )
                )}
            </div>
            <hr />

            <div className="col-sm-12 mb-3">
              <h6>Total:$ {cartTotal?.toFixed(2)}</h6>
            </div>
            <div>
              <Link href={"/checkout"}>
                <a className="btn btn-outline-success btn-lg mb-5">
                  Checkout Page{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h6 className="mb-3 text-center">Please add items to cart</h6>
      )}
    </div>
  );
}
