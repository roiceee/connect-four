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
      <h1>
        <b>PLAY</b>
      </h1>
    </div>
  );
}

export default PlayButton;
