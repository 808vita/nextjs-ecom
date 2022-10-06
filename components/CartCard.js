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
    <div
      className="col-sm-12 mb-3 pt-3 pb-3 border border-secondary rounded"
      style={{ "--bs-border-opacity": 0.25 }}
    >
      <div className="d-flex flex-wrap align-items-center justify-content-evenly">
        <div className="">
          <img
            src={`/${data.type}.jpg`}
            className="card-img-top rounded"
            alt="..."
            style={{ width: "8rem", height: "9rem", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div
            className="d-flex flex-wrap flex-column  align-items-center justify-content-center"
            style={{ width: "10rem" }}
          >
            <h3 className="card-title">{data.title.substring(0, 10)}</h3>
            <h5 className="card-title">${data.price}</h5>
          </div>
          <button
            className="btn btn-outline-warning"
            onClick={() => handleClick()}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
