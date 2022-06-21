import React from "react";
import { SECTION_ITEMS } from "../../constants";
import "./index.scss";

const section = () => {
  return (
    <>
      <div class="section__box">
        <span class="section__box__header">{SECTION_ITEMS.title}</span>
        <p>
         {SECTION_ITEMS.description}
        </p>
        <button>{SECTION_ITEMS.button_item}</button>
      </div>
    </>
  );
};

export default section;
