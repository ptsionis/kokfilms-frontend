import React from "react";

import "./Burger.css";

const Burger = ({ openNav, toggleNav }) => {
  return (
    <div
      className={"burger" + (openNav ? " open" : "")}
      onClick={() => toggleNav()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
