import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const [hasStarted, setHasStarted] = useState(false);

  const timerIsActive = hasStarted && timerRemaining > 0;

  useEffect(() => {
    if (timerRemaining <= 0 && hasStarted) {
      clearInterval(timer.current);
      dialog.current.open();     
      setHasStarted(false);      
    }
  }, [timerRemaining, hasStarted]);

  function handleReset() {
    setTimerRemaining(targetTime * 1000);
    setHasStarted(false);
  }

  function handleStart() {
    if (hasStarted) return;

    setHasStarted(true);

    timer.current = setInterval(() => {
      setTimerRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
    setHasStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timerRemaining={timerRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
