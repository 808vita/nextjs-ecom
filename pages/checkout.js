import { useEffect, useState } from "react";
import CheckoutCard from "../components/CheckoutCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts, postCheckoutOrder } from "../resources/LoadData";
import { useUser } from "@auth0/nextjs-auth0";

export default function Checkout() {
  const [cartItems, setCartItems] = useState(null);
  const [productList, setProductList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  let filteredCartItems;
  const { user, error, isLoading } = useUser();

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
  }, [cartItems, productList]);

  const handleClick = () => {
    if (!cartItems || !productList || !currentItems || !user) {
      return;
    }

    postCheckoutOrder({ email: user?.email, orderedItems: currentItems });
  };

  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Confirm Checkout</h6>
      <button onClick={() => handleClick()}>place order</button>
      <div className="row g-3 text-center">
        <div className="col-sm-6 mb-3">
          {cartItems?.length > 0 &&
            productList?.map(
              (item) =>
                cartItems.includes(item._id) && (
                  <CheckoutCard key={item._id} data={item} />
                )
            )}
        </div>
        <div className="col-sm-6 mb-3">
          {cartItems?.length > 0 && <h4>Totals here with checkout button</h4>}
        </div>
      </div>
    </div>
  );
}
