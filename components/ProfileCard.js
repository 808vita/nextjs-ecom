import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const ProfileCard = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div
      style={{
        maxWidth: "600px",
        "--bs-border-opacity": 0.3,
        padding: "1.5vw",
      }}
      className=" border border-secondary rounded"
    >
      {user && (
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <img
            src={user.picture}
            style={{
              objectFit: "cover",
              minHeight: "100px",
              minWidth: "100px",
            }}
            className="pe-2"
          />
          <div>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
            {user.role && user.role[0] === "admin" ? (
              <h6>Admin Account</h6>
            ) : (
              <h6>Normal Account</h6>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
