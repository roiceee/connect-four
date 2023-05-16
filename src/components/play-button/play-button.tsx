import Button from "react-bootstrap/Button";
import style from "./play-button.module.css";


interface PlayButtonProps {
  onClick: () => void;
}

function PlayButton({onClick} : PlayButtonProps) {
  return (
    <div
      className={style.blink}
      onClick={onClick}
    >
      <h2>
        <b>PLAY</b>
      </h2>
    </div>
  );
}

export default PlayButton;
