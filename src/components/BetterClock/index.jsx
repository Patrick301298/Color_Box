import React from "react";
import useClock from "../../hooks/useClock";
// import PropTypes from "prop-types";
import "./BetterClock.scss";

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();
  return (
    <div>
      <div className="better-clock">
        <p className="better-clock_time">{timeString}</p>
      </div>
    </div>
  );
}

export default BetterClock;
