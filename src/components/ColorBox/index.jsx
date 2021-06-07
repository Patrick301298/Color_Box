import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deepping", "grenn", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState("deeppink");
  function handerBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handerBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
