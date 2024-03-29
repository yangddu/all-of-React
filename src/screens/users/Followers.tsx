import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <h1>Here are {nameOfMyUser} 의 followers</h1>;
};

export default Followers;
