import React from "react";

const CheckoutCard = ({ data }) => {
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
            <h3 className="card-title">{data.title}</h3>
            <h5 className="card-title">${data.price}</h5>
          </div>
          <span className="btn btn-outline-warning">X</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
