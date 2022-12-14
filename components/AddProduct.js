import { useState } from "react";
import { postAddProduct } from "../resources/LoadData";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/useGlobalContext";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { setNotification } = useGlobalContext();

  const addProduct = () => {
    if (!title || !type || type === "Type" || !price || !description) {
      console.log("please fill all fields");
      return;
    }

    console.log("oof");
    console.log({ title, type, price, description });

    postAddProduct(
      { title, type, price, description },
      router,
      setNotification
    );
  };
  return (
    <div>
      <div className="input-group input-group-md mb-3">
        <span className="input-group-text">Title</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-md"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <select
        className="form-select form-select-md mb-3"
        aria-label=".form-select-md example"
        onChange={(e) => setType(e.target.value)}
      >
        <option>Type</option>
        <option value="Laptop">laptop</option>
        <option value="Mobile">mobile</option>
        <option value="Guitar">guitar</option>
      </select>
      <div className="input-group input-group-md mb-3">
        <span className="input-group-text">Price</span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-md"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-group input-group-md mb-3">
        <span className="input-group-text">description</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-md"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary mb-3" onClick={() => addProduct()}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
