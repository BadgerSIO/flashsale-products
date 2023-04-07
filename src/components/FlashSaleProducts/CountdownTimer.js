import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2023-04-14T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="text-timerText font-bold text-xs my-5 sm:my-0">
      <span className="bg-timerbg p-2 rounded leading-[14px] ">
        {timeLeft.days}d
      </span>{" "}
      :{" "}
      <span className="bg-timerbg p-2 rounded leading-[14px] ">
        {timeLeft.hours}h
      </span>{" "}
      :{" "}
      <span className="bg-timerbg p-2 rounded leading-[14px] ">
        {timeLeft.minutes}m
      </span>{" "}
      :{" "}
      <span className="bg-timerbg p-2 rounded leading-[14px] ">
        {timeLeft.seconds}s
      </span>
    </div>
  );
};

export default CountdownTimer;
