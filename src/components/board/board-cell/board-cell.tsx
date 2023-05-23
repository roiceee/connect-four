import style from "./board-cell.module.css";

interface BoardCellProps {
  value: number;
  side?: number;
  animate?: boolean;
  className?: string;
}

function BoardCell({ value, side, animate, className }: BoardCellProps) {
  return (
    <>
      {value == 0 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={`${style.style} ${style.empty} ${
            animate
              ? "animate__animated animate__bounceInDown animate_faster"
              : ""
          } ${className}`}
        />
      )}
      {value == 1 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={`${style.style} ${style.one} ${
            animate
              ? "animate__animated animate__bounceInDown animate_faster"
              : ""
          } ${className}`}
        />
      )}
      {value == 2 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={`${style.style} ${style.two} ${
            animate
              ? "animate__animated animate__bounceInDown animate_faster"
              : ""
          } ${className}`}
        />
      )}
    </>
  );
}

export default BoardCell;
