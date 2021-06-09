import React from "react";
import useClock from "../../hooks/useClock";
// import PropTypes from "prop-types";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();
  return (
    <div>
      <p style={{ fontSize: "42px" }}>{timeString}</p>
    </div>
  );
}

export default Clock;
