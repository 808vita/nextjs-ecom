import React from "react";

const ProductCard = () => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://avatars.githubusercontent.com/u/97225946?v=4"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
