import { useEffect, useState } from "react";
import CheckoutCard from "../components/CheckoutCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts, postCheckoutOrder } from "../resources/LoadData";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function Checkout() {
  const [cartItems, setCartItems] = useState(null);
  const [productList, setProductList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);

  let filteredCartItems;
  const { user, error, isLoading } = useUser();
  const router = useRouter();

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
      router
    );
  };

  return (
    <div className="container-fluid ">
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
              <h6>Total:$ {cartTotal}</h6>
            </div>
            <div>
              <button
                className="btn btn-success btn-lg"
                onClick={() => handleClick()}
              >
                Place Order
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
