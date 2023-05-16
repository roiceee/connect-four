"use client";
import { useCallback, useState } from "react";
import BoardCell from "./board-cell";
import style from "./board.module.css";

function Board() {
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

  const changePlayer = useCallback(() => {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
      return;
    }
    setCurrentPlayer(1);
  }, [currentPlayer]);

  const handleColumnClick = (columnIndex: number) => {
    // Find the lowest empty cell in the clicked column
    const row = board[columnIndex].indexOf(0);

    // If the column is full, do nothing
    if (row === -1) {
      return;
    }

    // Update the board with the new move
    const newBoard = [...board];
    newBoard[columnIndex][row] = currentPlayer;
    changePlayer();
    setBoard(newBoard);
  };

  return (
    <div className={style.connectFourBoard}>
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={style.connectFourColumn}
          onClick={() => handleColumnClick(rowIndex)}
        >
          {row.map((cellValue, columnIndex) => (
            <BoardCell key={rowIndex + "-" + columnIndex} value={cellValue} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
