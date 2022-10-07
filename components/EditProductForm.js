import { useState, useEffect } from "react";
import { patchEditProduct } from "../resources/LoadData";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/useGlobalContext";

const EditProductForm = ({ data, setSelectedProduct }) => {
  const [productId, setProductId] = useState("");
  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { setNotification } = useGlobalContext();

  useEffect(() => {
    // setProductId("63405761db5601a0938e8731");
    //edits only this product

    setProductId(data._id);
    setTitle(data.title);
    setPrice(data.price);
    setDescription(data.description);
    data;
  }, [data]);

  const addProduct = () => {
    if (!title || !productId || !price || !description) {
      console.log("please fill all fields");
      return;
    }

    if (
      data.title === title &&
      data.price === price &&
      data.description === description
    ) {
      console.log("data already exists , change data fields & try again");
      return;
    }

    console.log("oof");
    console.log({ productId, title, price, description });

    patchEditProduct(
      { productId, title, price, description },
      router,
      setNotification
    );
  };

  const deselectProduct = () => {
    setSelectedProduct(null);
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
      <div className="d-flex align-items-center justify-content-evenly">
        <button
          className="btn btn-outline-warning mb-3"
          onClick={() => deselectProduct()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>

        <button className="btn btn-primary mb-3" onClick={() => addProduct()}>
          Update Details{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cloud-arrow-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EditProductForm;
