import React from "react";
import { NavLink } from "react-router-dom";

const ProfileLink = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/profile" exact activeStyle={{ color: "red" }}>
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileLink;
