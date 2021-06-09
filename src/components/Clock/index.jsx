import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

Clock.propTypes = {};

function formatDate() {
  const date = new Date();
  if (!date) return "";
  const hour = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hour}:${minutes}:${seconds}`;
}
function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const ClockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("Cleanup!!");
      clearInterval(ClockInterval);
    };
  }, []);
  return (
    <div>
      <p style={{ fontSize: "42px" }}>{timeString}</p>
    </div>
  );
}

export default Clock;
