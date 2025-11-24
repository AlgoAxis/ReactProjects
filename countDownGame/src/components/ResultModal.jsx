import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { timerRemaining, targetTime, onReset },ref) {
  const dialog = useRef();

  const userLost = timerRemaining <= 0;
  const formatTimerRemaining = (timerRemaining / 1000).toFixed(2);

  const score = Math.round(
    (1 - timerRemaining / (targetTime * 1000)) * 100
  );

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The Target Time was<strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{formatTimerRemaining}</strong> seconds left.</p>

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
