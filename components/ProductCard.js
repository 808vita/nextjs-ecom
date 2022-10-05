import React from "react";

const ProductCard = ({ data }) => {
  const handleClick = () => {
    try {
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      console.log(cartItems);
      if (!cartItems) {
        localStorage.setItem("cartItems", JSON.stringify([data.id]));

        cartItems = JSON.parse(localStorage.getItem("cartItems"));
        console.log(cartItems);
        return;
      }
      console.log(cartItems, "oof not null");
      if (cartItems.includes(data.id)) {
        console.log(cartItems, "already added to cart");

        return;
      }

      cartItems.push(data.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      cartItems = JSON.parse(localStorage.getItem("cartItems"));
      console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-sm-4 mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://avatars.githubusercontent.com/u/97225946?v=4"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {data.title} ${data.price}
          </h5>

          <p className="card-text">{data.desc}</p>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
