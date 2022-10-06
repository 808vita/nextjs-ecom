import React from "react";

const EditProduct = () => {
  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Title</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <select
        className="form-select form-select-sm mb-3"
        aria-label=".form-select-sm example"
      >
        <option>Type</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile">Mobile</option>
        <option value="Guitar">Guitar</option>
      </select>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Price</span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Description</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <button>Update Details</button>
    </div>
  );
};

export default EditProduct;
