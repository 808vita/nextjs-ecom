import { useState } from "react";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Toggle from "../components/Toggle";

export default function Admin() {
  const [currSelection, setCurrSelection] = useState(null);
  return (
    <div>
      <h1>admin page</h1>
      <h2>edit deatais</h2>
      <h2>add product</h2>
      <Toggle setCurrSelection={setCurrSelection} />
      {currSelection === "addProduct" && <AddProduct />}
      {currSelection === "editProduct" && <EditProduct />}
    </div>
  );
}
