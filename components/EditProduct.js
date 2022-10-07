import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";

import { fetchProducts } from "../resources/LoadData";
import EditCard from "./EditCard";
import EditProductForm from "./EditProductForm";

const EditProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    fetchProducts(setProductList);
  }, []);

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

  return (
    <>
      {!selectedProduct ? (
        <div className="container-fluid mt-5">
          <h6 className="mb-3 text-center text-muted">Listed Products</h6>
          <div
            className="row g-5 text-center  border border-secondary rounded"
            style={{ maxWidth: "800px", "--bs-border-opacity": 0.25 }}
          >
            {productList?.map((item) => (
              <EditCard
                key={item._id}
                data={item}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      ) : (
        <EditProductForm
          data={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </>
  );
};

export default EditProduct;
