import React, { useState, useEffect } from "react";

const calculateTimeRemaining = (eventDate) => {
  const difference = new Date(eventDate) - new Date();
  if (difference > 0) {
    // Calculate the countdown values
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  } else {
    // Event has passed, return all zeros or handle as needed
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

const Discount = ({ event_date }) => {
  const [countdownValues, setCountdownValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (event_date) {
      setCountdownValues(calculateTimeRemaining(event_date));

      const countdownInterval = setInterval(() => {
        setCountdownValues(calculateTimeRemaining(event_date));
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [event_date]);

  return (
    <div className="grid grid-flow-col text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FF6C22"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm1-8h4v2h-6V7h2v5Z"
          />
        </svg>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": countdownValues.days }}>
            {countdownValues.days}
          </span>
          d
        </span>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": countdownValues.hours }}>
            {countdownValues.hours}h
          </span>
        </span>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": countdownValues.minutes }}>
            {countdownValues.minutes}m
          </span>
        </span>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": countdownValues.seconds }}>
            {countdownValues.seconds}s
          </span>
        </span>
      </div>
    </div>
  );
};

export default Discount;
