import Link from "next/link";
import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { itemsList } from "../data/itemsList";
import { fetchProducts } from "../resources/LoadData";

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);
  const [productList, setProductList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);
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

    setCartTotal(
      filteredCartItems.reduce(
        (previousValue, object) => previousValue + object.price,
        0
      )
    );
  }, [cartItems, productList]);

  return (
    <div className="container-fluid ">
      {cartItems?.length > 0 ? (
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
              <h6>Total:$ {cartTotal}</h6>
            </div>
            <div>
              <Link href={"/checkout"}>
                <a className="btn btn-outline-success btn-lg mb-5">
                  Checkout Page
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
