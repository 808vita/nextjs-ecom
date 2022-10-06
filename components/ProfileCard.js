import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const ProfileCard = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      {user && (
        <>
          <img src={user.picture} />
          <h6>{user.name}</h6>
          <h6>{user.email}</h6>
          {user.role && user.role[0] === "admin" && <h6>Admin Account</h6>}
        </>
      )}
    </div>
  );
};

export default ProfileCard;
