import React from "react";

const ProductCard = ({ data, inCart, setInCart }) => {
  const handleClick = () => {
    try {
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      console.log(cartItems);
      if (!cartItems) {
        localStorage.setItem("cartItems", JSON.stringify([data._id]));

        cartItems = JSON.parse(localStorage.getItem("cartItems"));
        console.log(cartItems);
        setInCart(cartItems);
        return;
      }
      console.log(cartItems, "oof not null");
      if (cartItems.includes(data._id)) {
        console.log(cartItems, "already added to cart");

        return;
      }

      cartItems.push(data._id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setInCart(cartItems);
      // cartItems = JSON.parse(localStorage.getItem("cartItems"));
      // console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-sm-4 mb-3">
      <div className="d-flex flex-wrap flex-column  align-items-center justify-content-center">
        <div className="card" style={{ width: "14rem" }}>
          <img
            src={`/${data.type}.jpg`}
            style={{ height: "10rem", objectFit: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {data.title} ${data.price}
            </h5>

            <p className="card-text">{data.description}</p>
            {inCart?.includes(data._id) ? (
              <p>Already In Cart</p>
            ) : (
              <button className="btn btn-success" onClick={() => handleClick()}>
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
