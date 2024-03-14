import React from "react";
import useGetRole from "../../hooks/GetRole";
import useGetUserId from "../../hooks/GetUserId";
import useGetUserName from "../../hooks/GetUserName";

const UserInfo = () => {
  const userName = useGetUserName();
  const userId = useGetUserId();
  const userRole = useGetRole();

  return (
    <div>
      <p>UserID: {userId}</p>
      <p>Användarnamn: {userName}</p>
      {userRole !== null && (
        <p>
          Roll:{" "}
          {userRole === "3" ? "Admin" : userRole === "2" ? "Normal Användare" : (userRole === "1" || userRole === "0") ? "Gäst" : ""}
        </p>
      )}
    </div>
  );
};

export default UserInfo;