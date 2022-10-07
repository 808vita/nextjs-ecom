import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { fetchOrders } from "../resources/LoadData";
import CheckoutCard from "../components/CheckoutCard";
import OrdersCard from "../components/OrdersCard";
export default function Profile() {
  const [ordersList, setOrdersList] = useState(null);

  useEffect(() => {
    fetchOrders(setOrdersList);
  }, []);

  return (
    <div className="container-fluid d-flex flex-column flex-wrap align-items-center justify-content-center ">
      <h3 className="text-secondary mb-3">Account Info</h3>
      <div className="mb-5">
        <ProfileCard />
      </div>
      <div className="row g-8 text-center" style={{ maxWidth: "800px" }}>
        {ordersList && ordersList?.length > 0 ? (
          ordersList.map((order, index) => (
            <OrdersCard key={index} order={order} index={index} />
          ))
        ) : (
          <h6>No orders placed</h6>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
