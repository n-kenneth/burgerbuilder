import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.css";

const navigationItem = () => (
  <ul className={classes.navigationItem}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Check Out</NavigationItem>
  </ul>
);

export default navigationItem;
