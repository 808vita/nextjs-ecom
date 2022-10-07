import React from "react";
import CheckoutCard from "./CheckoutCard";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const OrdersCard = ({ order, index }) => {
  //   console.log(order, index);
  if (index === 0) {
    return (
      <div
        style={{ "--bs-border-opacity": 0.3 }}
        className="p-5 mb-5 border border-secondary rounded"
      >
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
          <h4 className="text-secondary pb-2">Latest Order</h4>
          <div className="d-flex flex-wrap flex-column align-items-start justify-content-center">
            <p key={order._id} className="text-muted">
              order id: {order._id}
            </p>
            <p key={order.createdAt} className="text-muted">
              Placed Order:{" "}
              {formatDistanceToNow(new Date(order.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>

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
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
          <div className="d-flex flex-wrap flex-column align-items-start justify-content-center">
            <p key={order._id} className="text-muted">
              order id: {order._id}
            </p>
            <p key={order.createdAt} className="text-muted">
              Placed Order:{" "}
              {formatDistanceToNow(new Date(order.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
        {order?.orderedItems.map((item) => (
          <CheckoutCard key={item._id} data={item} />
        ))}
      </div>
    );
  }
};

export default OrdersCard;
