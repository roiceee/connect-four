import style from "./board-cell.module.css";

interface BoardCellProps {
  value: number;
  side?: number;
  animate?: boolean;
}

function BoardCell({ value, side, animate }: BoardCellProps) {
  return (
    <>
      {value == 0 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={`${style.style} ${style.empty}`}
        />
      )}
      {value == 1 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={`${style.style} ${style.one} ${
            animate ? "animate__animated animate__bounceInDown animate_faster" : ""
          }`}
        />
      )}
      {value == 2 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={`${style.style} ${style.two} ${
            animate ? "animate__animated animate__bounceInDown animate_faster" : ""
          }`}
        />
      )}
    </>
  );
}

export default BoardCell;
