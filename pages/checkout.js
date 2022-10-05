import { useEffect, useState } from "react";
import CheckoutCard from "../components/CheckoutCard";
import { itemsList } from "../data/itemsList";

export default function Checkout() {
  const [cartItems, setCartItems] = useState(null);
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);

  return (
    <div className="container-fluid ">
      <h6 className="mb-3 text-center">Confirm Checkout</h6>
      <div className="row g-3 text-center">
        <div className="col-sm-6 mb-3">
          {cartItems?.length > 0 &&
            itemsList.map(
              (item) =>
                cartItems.includes(item.id) && (
                  <CheckoutCard key={item.id} data={item} />
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
