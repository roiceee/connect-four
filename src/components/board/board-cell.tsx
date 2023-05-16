interface BoardCellProps {
  value: number;
}

function BoardCell({ value }: BoardCellProps) {
  const side = "40px";

  return (
    <>
      {value == 0 && (
        <div style={{ height: side, width: side, backgroundColor: "black" }} />
      )}
      {value == 1 && (
        <div style={{ height: side, width: side, backgroundColor: "red" }} />
      )}
      {value == 2 && (
        <div style={{ height: side, width: side, backgroundColor: "yellow" }} />
      )}
    </>
  );
}

export default BoardCell;
