import { useEffect, useState } from "react";
import CheckoutCard from "../components/CheckoutCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts, postCheckoutOrder } from "../resources/LoadData";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/useGlobalContext";

export default function Checkout() {
  const [cartItems, setCartItems] = useState(null);
  const [productList, setProductList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);

  let filteredCartItems;
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const { setNotification } = useGlobalContext();

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    fetchProducts(setProductList);
  }, []);

  useEffect(() => {
    if (!cartItems || !productList) {
      return;
    }
    filteredCartItems = productList?.filter((e) => cartItems?.includes(e._id));
    setCurrentItems(filteredCartItems);
    console.log(filteredCartItems);
    console.log(user);
    setCartTotal(
      filteredCartItems.reduce(
        (previousValue, object) => previousValue + object.price,
        0
      )
    );
  }, [cartItems, productList]);

  const handleClick = () => {
    if (!cartItems || !productList || !currentItems || !user) {
      return;
    }

    postCheckoutOrder(
      { email: user?.email, orderedItems: currentItems },
      router,
      setNotification
    );
  };

  return (
    <div
      className="container-fluid border border-secondary rounded pt-5 px-5 pe-5"
      style={{ "--bs-border-opacity": 0.25 }}
    >
      {currentItems?.length > 0 ? (
        <>
          <h6 className="mb-3 text-center">Confirm Checkout</h6>

          <div className="row g-8 text-center">
            <div className="col-sm-12 mb-3">
              {cartItems?.length > 0 &&
                productList?.map(
                  (item) =>
                    cartItems.includes(item._id) && (
                      <CheckoutCard key={item._id} data={item} />
                    )
                )}
            </div>
            <hr />

            <div className="col-sm-12 mb-3">
              <h6>Total:$ {cartTotal?.toFixed(2)}</h6>
            </div>
            <div>
              <button
                className="btn btn-success btn-lg mb-5"
                onClick={() => handleClick()}
              >
                Place Order{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <h6 className="mb-3 text-center">Please add items to cart</h6>
      )}
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
