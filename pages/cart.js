import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts } from "../resources/LoadData";

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);
  const [productList, setProductList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  let filteredCartItems;
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    fetchProducts(setProductList);
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
    filteredCartItems = productList?.filter((e) => cartItems?.includes(e._id));
    setCurrentItems(filteredCartItems);
    console.log(filteredCartItems);
  }, [cartItems, productList]);

  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Cart Items</h6>
      <div className="row g-8 text-center">
        <div className="col-sm-6 mb-3">
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
        <div className="col-sm-6 mb-3">
          {cartItems?.length > 0 && <h4>Totals here with checkout button</h4>}
        </div>
      </div>
    </div>
  );
}
