import style from "./board-cell.module.css"

interface BoardCellProps {
  value: number;
}

function BoardCell({ value }: BoardCellProps) {
  const side = "40px";

  return (
    <>
      {value == 0 && (
        <div className={style.style + " " + style.empty}/>
      )}
      {value == 1 && (
        <div className={style.style + " " + style.one} />
      )}
      {value == 2 && (
        <div className={style.style + " " + style.two} />
      )}
    </>
  );
}

export default BoardCell;
