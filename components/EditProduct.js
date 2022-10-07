import { useState, useEffect } from "react";
import { patchEditProduct } from "../resources/LoadData";
import { useRouter } from "next/router";

const EditProduct = () => {
  const [productId, setProductId] = useState("");
  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    setProductId("63405761db5601a0938e8731");
    //edits only this product
  }, []);

  const addProduct = () => {
    if (!title || !productId || !price || !description) {
      console.log("please fill all fields");
      return;
    }

    console.log("oof");
    console.log({ productId, title, price, description });

    patchEditProduct({ productId, title, price, description }, router);
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
          value={title}
        />
      </div>
      <div className="input-group input-group-md mb-3">
        <span className="input-group-text">Price</span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-md"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
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
          value={description}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary mb-3" onClick={() => addProduct()}>
          Update Details
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
