import style from "./board-cell.module.css";

interface BoardCellProps {
  value: number;
  side?: number;
}

function BoardCell({ value, side }: BoardCellProps) {
  return (
    <>
      {value == 0 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={style.style + " " + style.empty}
        />
      )}
      {value == 1 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={style.style + " " + style.one}
        />
      )}
      {value == 2 && (
        <div
          style={{
            height: `${side}px`,
            width: `${side}px`,
          }}
          className={style.style + " " + style.two}
        />
      )}
    </>
  );
}

export default BoardCell;
