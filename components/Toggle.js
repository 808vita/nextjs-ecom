import React from "react";

const Toggle = ({ setCurrSelection }) => {
  const handleChange = (e) => {
    console.log(e.target.alt);
    setCurrSelection(e.target.alt);
  };
  return (
    <div className="mb-5">
      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="success-outlined"
        autoComplete="off"
        alt="addProduct"
        onChange={handleChange}
      />
      <label
        className="btn btn-outline-success me-3"
        htmlFor="success-outlined"
      >
        Add a product
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="danger-outlined"
        autoComplete="off"
        alt="editProduct"
        onChange={handleChange}
      />
      <label className="btn btn-outline-warning" htmlFor="danger-outlined">
        Edit Product Details
      </label>
    </div>
  );
};

export default Toggle;
