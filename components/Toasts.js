import React, { useEffect, useState, useContext } from "react";
import { useGlobalContext } from "../context/useGlobalContext";

const Toasts = () => {
  const { notification } = useGlobalContext();
  const [toast, setToast] = useState("show");
  const toggler = () => {
    setToast("hide");
  };

  useEffect(() => {
    setToast("show");
    setTimeout(() => {
      toggler();
    }, 2000);
  }, [notification]);

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        className={`toast ${toast}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img
            src="https://avatars.githubusercontent.com/u/97225946?v=4"
            height={50}
            className="logo-img-cat me-2"
            alt="memecat"
          />

          <strong className="me-auto">
            {notification.type === "error"
              ? "Error"
              : notification.type === "success"
              ? "Success"
              : "Notification"}
          </strong>
          <small>Just Now</small>
        </div>
        <div className="toast-body">{notification.msg}</div>
      </div>
    </div>
  );
};
export default Toasts;
