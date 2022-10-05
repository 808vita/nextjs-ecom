import React from "react";

const CartCard = ({ data, cartItems, setCartItems }) => {
  const handleClick = () => {
    try {
      let filteredCart = cartItems.filter((e) => e !== data._id);
      console.log(filteredCart, "filtered");
      setCartItems(filteredCart);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-sm-12 mb-3">
      <div className="d-flex">
        <div className="" style={{ width: "5rem" }}>
          <img
            src="https://avatars.githubusercontent.com/u/97225946?v=4"
            className="card-img-top rounded"
            alt="..."
          />
        </div>
        <div
          className="d-flex flex-wrap flex-column  align-items-center justify-content-center"
          style={{ width: "10rem" }}
        >
          <h3 className="card-title">
            {data.title} ${data.price}
          </h3>

          <button
            className="btn btn-outline-warning"
            onClick={() => handleClick()}
          >
            X
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartCard;
