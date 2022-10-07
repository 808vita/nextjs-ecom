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
    <div className="col-sm-4 mb-3 d-flex align-self-stretch justify-content-center">
      <div className="d-flex flex-wrap flex-column  align-items-center justify-content-center">
        <div className="card h-100" style={{ width: "14rem" }}>
          <img
            src={`/${data.type}.jpg`}
            style={{ height: "10rem", objectFit: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {data.title.substring(0, 10)} ${data.price}
            </h5>

            <p className="card-text">{data.description.substring(0, 25)}</p>
            {inCart?.includes(data._id) ? (
              <p>
                Already In Cart{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </p>
            ) : (
              <button className="btn btn-success" onClick={() => handleClick()}>
                Add To Cart{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
