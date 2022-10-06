import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

export default function Admin() {
  return (
    <div>
      <h1>admin page</h1>
      <h2>edit deatais</h2>
      <h2>add product</h2>
      {/* <EditProduct /> */}
      <AddProduct />
    </div>
  );
}
