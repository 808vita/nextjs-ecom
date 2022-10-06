import React from "react";

const CheckoutCard = ({ data }) => {
  return (
    <div className="col-sm-12 mb-3">
      <div className="d-flex">
        <div className="" style={{ width: "5rem" }}>
          <img
            src={`/${data.type}.jpg`}
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
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CheckoutCard;
