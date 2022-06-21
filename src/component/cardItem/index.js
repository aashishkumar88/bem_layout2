import React from "react";
import { CARD_DETAILS } from "../../constants";
import "./index.scss";

const box = () => {
  return (
    <>
      <div class="card__item">
        <img src={CARD_DETAILS.img_url} alt="" />
        <div class="text">
          <span>{CARD_DETAILS.title}</span>
          <p>{CARD_DETAILS.description}</p>
          <button class="buy">{CARD_DETAILS.button1_text}</button>
          <button class="info">{CARD_DETAILS.button2_text}</button>
        </div>
      </div>
    </>
  );
};

export default box;
