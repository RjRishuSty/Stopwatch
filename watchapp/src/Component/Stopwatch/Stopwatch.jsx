import React, { useEffect, useState } from "react";
import Styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [timeData, setTimeData] = useState(0);
  const [flag, setFlag] = useState(false);

  const formatTime = (second) => {
    const minutes = Math.floor(second / 60);
    const remainingSecond = second % 60;
    return `${minutes}:${remainingSecond < 10 ? "0" : ""}${remainingSecond}`;
  };

  const handleStart = () => {
    setFlag(!flag);
  };

  const handleReset = () => {
    setFlag(false);
    setTimeData(0);
  };

  useEffect(() => {
    let interId;

    if (flag) {
      interId = setInterval(() => {
        setTimeData((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interId);
    }
    return () => clearInterval(interId);
  }, [flag]);

  return (
    <div className={Styles.card}>
      <h1 className={Styles.heading}>Stopwatch</h1>
      <p className={Styles.time}>Time: {formatTime(timeData)}</p>
      <div>
        <button onClick={handleStart}>{flag ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
