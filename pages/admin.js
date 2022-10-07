import { useState, useEffect } from "react";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Toggle from "../components/Toggle";

import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

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
  }, [user]);

  return (
    <>
      {user?.role[0] === "admin" ? (
        <div>
          <h1>admin page</h1>
          <h2>edit deatais</h2>
          <h2>add product</h2>
          <Toggle setCurrSelection={setCurrSelection} />
          {currSelection === "addProduct" && <AddProduct />}
          {currSelection === "editProduct" && <EditProduct />}
        </div>
      ) : (
        <h1>Admins Only</h1>
      )}
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
