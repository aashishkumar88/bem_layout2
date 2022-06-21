import React from "react";
import { NAVBAR_ITEMS } from "../../constants";
import "./index.scss";

const navbar = () => {
  return (
    <>
      <nav>
        <a href="#" class="layout">
          {NAVBAR_ITEMS.title}
        </a>
        <a href="#">{NAVBAR_ITEMS.menu_item1}</a>
        <a href="#">{NAVBAR_ITEMS.menu_item2}</a>
        <a href="#">{NAVBAR_ITEMS.menu_item3}</a>
      </nav>
    </>
  );
};

export default navbar;
