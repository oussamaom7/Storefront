import React, { useState, useEffect } from "react";

export default function Discount() {
  const initialCountdownValues = {
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  };

  const [countdownValues, setCountdownValues] = useState(
    initialCountdownValues
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownValues((prevValues) => {
        const newValues = { ...prevValues };

        // Update each countdown value every second
        if (newValues.seconds > 0) {
          newValues.seconds -= 1;
        } else {
          newValues.seconds = 59;

          if (newValues.minutes > 0) {
            newValues.minutes -= 1;
          } else {
            newValues.minutes = 59;

            if (newValues.hours > 0) {
              newValues.hours -= 1;
            } else {
              newValues.hours = 23;

              if (newValues.days > 0) {
                newValues.days -= 1;
              } else {
                // Stop the countdown when all values are 0
                clearInterval(countdownInterval);
              }
            }
          }
        }

        return newValues;
      });
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="grid grid-flow-col  text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content ">
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

      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content ">
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
}
