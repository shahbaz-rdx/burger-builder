import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.css";

const navItems = props => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" active>
        Burger Builder
      </NavItem>
      <NavItem>CheckOut</NavItem>
    </ul>
  );
};

export default navItems;
