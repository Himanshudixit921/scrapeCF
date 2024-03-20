import React from "react";
import classes from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a href="#" className={classes.hover_line}>
        Home
      </a>
      {/* eslint-disable-next-line */}
      <a href="#" className={classes.hover_line}>
        Contact
      </a>
      <div className={(classes.animation, classes.start_home)}></div>
    </nav>
  );
};

export default Navbar;
