import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { fetchOrders } from "../resources/LoadData";
export default function Profile() {
  const [ordersList, setOrdersList] = useState(null);

  useEffect(() => {
    fetchOrders(setOrdersList);
  }, []);

  return (
    <div>
      <h1>profile page</h1>
      <h2>profile deatais</h2>
      <h2>order deatais</h2>
      <div>
        <ProfileCard />
      </div>
      <div>
        {ordersList &&
          ordersList.map((order) => <p key={order._id}>{order._id}</p>)}
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
