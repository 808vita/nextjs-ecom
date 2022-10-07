import React from "react";
import CheckoutCard from "./CheckoutCard";

const OrdersCard = ({ order, index }) => {
  //   console.log(order, index);
  if (index === 0) {
    return (
      <div
        style={{ "--bs-border-opacity": 0.3 }}
        className="p-5 mb-5 border border-secondary rounded"
      >
        <h5>Latest Order</h5>
        <p key={order._id}>order id: {order._id}</p>

        {order?.orderedItems.map((item) => (
          <CheckoutCard key={item._id} data={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div
        style={{ maxWidth: "800px", "--bs-border-opacity": 0.3 }}
        className="p-5 mb-5 border border-secondary rounded"
      >
        <p key={order._id}>order id: {order._id}</p>
        {order?.orderedItems.map((item) => (
          <CheckoutCard key={item._id} data={item} />
        ))}
      </div>
    );
  }
};

export default OrdersCard;
