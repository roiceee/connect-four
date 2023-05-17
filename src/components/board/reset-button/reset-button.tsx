import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";

interface ResetButtonProps {
  onClick: () => void;
}

function ResetButton({ onClick }: ResetButtonProps) {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const showResetAttempt = useCallback(() => {
    setButtonPressed(true);
  }, []);

  const hideResetAttempt = useCallback(() => {
    setButtonPressed(false);
  }, []);

  const resetButtonHandler = useCallback(() => {
    onClick();
    hideResetAttempt();
  }, [hideResetAttempt, onClick]);

  return (
    <>
      {!buttonPressed && (
        <Button
          variant="outline-light"
          style={{ fontSize: "0.9rem", padding: "6px" }}
          onClick={showResetAttempt}
        >
          Reset
        </Button>
      )}
      {buttonPressed && (
        <div>
          Do you want to reset the game?
          <div className="d-flex gap-2 mt-1">
            <Button variant="danger" onClick={resetButtonHandler}>
              Yes
            </Button>
            <Button onClick={hideResetAttempt}>No</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ResetButton;
