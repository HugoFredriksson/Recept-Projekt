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
      <p>User ID: {userId}</p>
      <p>User Name: {userName}</p>
      <p>Role: {userRole}</p>
    </div>
  );
};

export default UserInfo;