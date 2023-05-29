import style from "./matrix-cell.module.css";

interface MatrixCellProps {
  value: number;
}

function MatrixCell({ value }: MatrixCellProps) {
  return (
    <>
      {value == 0 && (
        <div
          className={`${style.style} animate__animated animate__bounceInDown animate_faster`}
        >
          {value}
        </div>
      )}
      {value == 1 && (
        <div
          className={`${style.style} ${style.one} animate__animated animate__bounceInDown animate_faster`}
        >
          {value}
        </div>
      )}
      {value == 2 && (
        <div
          className={`${style.style} ${style.two} animate__animated animate__bounceInDown animate_faster`}
        >
          {value}
        </div>
      )}
    </>
  );
}

export default MatrixCell;
