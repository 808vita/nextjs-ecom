import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { fetchOrders } from "../resources/LoadData";
import CheckoutCard from "../components/CheckoutCard";
import OrdersCard from "../components/OrdersCard";
import { Oval } from "react-loader-spinner";
export default function Profile() {
  const [ordersList, setOrdersList] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchOrders(setOrdersList, setLoading);
  }, []);

  return (
    <div className="container-fluid d-flex flex-column flex-wrap align-items-center justify-content-center ">
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
