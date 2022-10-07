import { useState, useEffect } from "react";
import AddProduct from "../components/AddProduct";
import EditProductForm from "../components/EditProductForm";
import Toggle from "../components/Toggle";

import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import EditProduct from "../components/EditProduct";

export default function Admin() {
  const [currSelection, setCurrSelection] = useState(null);

  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return;
    }

    if (user?.role[0] !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      {user?.role[0] === "admin" ? (
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
          <h3 className="text-muted mb-3">Admin Options</h3>
          <p className="text-muted mb-3">(select an option below)</p>

          <Toggle setCurrSelection={setCurrSelection} />
          {currSelection === "addProduct" && <AddProduct />}
          {/* {currSelection === "editProduct" && <EditProductForm />} */}
          {currSelection === "editProduct" && <EditProduct />}
        </div>
      ) : (
        <h1>Admins Only</h1>
      )}
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
