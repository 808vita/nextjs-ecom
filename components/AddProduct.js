import { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");

  const addProduct = () => {
    if (!title || !type || type === "Type" || !price || !Description) {
      console.log("please fill all fields");
      return;
    }

    console.log(title, type, price, Description);
    console.log("oof");
  };
  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Title</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <select
        className="form-select form-select-sm mb-3"
        aria-label=".form-select-sm example"
        onChange={(e) => setType(e.target.value)}
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
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Description</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={() => addProduct()}>Add Product</button>
    </div>
  );
};

export default AddProduct;
