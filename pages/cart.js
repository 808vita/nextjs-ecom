import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { itemsList } from "../data/itemsList";

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);

  useEffect(() => {
    if (!cartItems) {
      return;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Cart Items</h6>
      <div className="row g-3 text-center">
        <div className="col-sm-6 mb-3">
          {cartItems?.length > 0 &&
            itemsList.map(
              (item) =>
                cartItems.includes(item.id) && (
                  <CartCard
                    key={item.id}
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
