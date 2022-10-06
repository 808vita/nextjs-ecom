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
          <span className="btn btn-outline-success pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
