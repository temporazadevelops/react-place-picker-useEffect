import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const progress = setInterval(() => {
      console.log("setInterval");
      setRemainingTime((currentTime) => currentTime - 10);
    }, 10);

    return () => {
      clearInterval(progress);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
