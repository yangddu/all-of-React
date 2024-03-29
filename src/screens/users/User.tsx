import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User width {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name
        }}
      />
    </div>
  );
};

export default User;
