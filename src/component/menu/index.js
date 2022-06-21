import React from "react";
import Items from "../cardItem/index";
import "./index.scss";

const menu = () => {
  return (
    <>
      <div class="menu">
        <hr />
        <span class="menu__head">Latest Features</span>
        <div class="card">
          {new Array(4).fill(undefined).map((val, index) => {
            return <Items key={index} />;
          })}
        </div>
        <hr class="horizon" />
      </div>
    </>
  );
};

export default menu;
