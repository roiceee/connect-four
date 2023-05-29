"use client";
import { MutableRefObject, useCallback, useEffect, useState } from "react";
import BoardCell from "./board-cell/board-cell";
import style from "./board.module.css";
import { Button } from "react-bootstrap";
import ResetButton from "./reset-button/reset-button";
import VolumeButton from "../volume-button/volume-button";
import MatrixCell from "./matrix-cell/matrix-cell";

interface BoardProps {
  audio: null | HTMLAudioElement;
}

function Board({ audio }: BoardProps) {
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [hasWinner, setHasWinner] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

  const [showMatrixState, setShowMatrixState] = useState<boolean>(false);

  const [popSound, setPopSound] = useState<null | HTMLAudioElement>(null);

  const [winSound, setWinSound] = useState<null | HTMLAudioElement>(null);

  const [drawSound, setDrawSound] = useState<null | HTMLAudioElement>(null);

  const showMatrixToggler = useCallback(() => {
    if (!showMatrixState) {
      setShowMatrixState(true);
      return;
    }
    setShowMatrixState(false);
  }, [showMatrixState]);

  const checkDraw = useCallback(() => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }, [board]);

  const checkWin = useCallback(
    (row: number, col: number, player: number) => {
      // Check horizontal win
      for (let c = 0; c <= 6 - 4; c++) {
        if (
          board[row][c] === player &&
          board[row][c + 1] === player &&
          board[row][c + 2] === player &&
          board[row][c + 3] === player
        ) {
          return true;
        }
      }

      // Check vertical win
      for (let r = 0; r <= 6 - 4; r++) {
        if (
          board[r][col] === player &&
          board[r + 1][col] === player &&
          board[r + 2][col] === player &&
          board[r + 3][col] === player
        ) {
          return true;
        }
      }

      // Check diagonal win (ascending)
      for (let r = 3; r < 6; r++) {
        for (let c = 0; c <= 6 - 4; c++) {
          if (
            board[r][c] === player &&
            board[r - 1][c + 1] === player &&
            board[r - 2][c + 2] === player &&
            board[r - 3][c + 3] === player
          ) {
            return true;
          }
        }
      }

      // Check diagonal win (descending)
      for (let r = 0; r <= 6 - 4; r++) {
        for (let c = 0; c <= 6 - 4; c++) {
          if (
            board[r][c] === player &&
            board[r + 1][c + 1] === player &&
            board[r + 2][c + 2] === player &&
            board[r + 3][c + 3] === player
          ) {
            return true;
          }
        }
      }

      return false;
    },
    [board]
  );

  const changePlayer = useCallback(() => {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
      return;
    }
    setCurrentPlayer(1);
  }, [currentPlayer]);

  const handleColumnClick = useCallback(
    (columnIndex: number) => {
      if (hasWinner) {
        return;
      }

      if (popSound !== null) {
        popSound.play();
      }
      // Find the lowest empty cell in the clicked column
      const row = board[columnIndex].indexOf(0);

      // If the column is full, do nothing
      if (row === -1) {
        return;
      }

      // Update the board with the new move
      const newBoard = [...board];
      newBoard[columnIndex][row] = currentPlayer;

      if (checkWin(columnIndex, row, currentPlayer)) {
        if (winSound !== null) {
          audio!.pause();
          winSound.play();
          setTimeout(() => {
            audio!.play();
          }, 4000);
        }
        setHasWinner(true);
        return;
      }
      changePlayer();
      setBoard(newBoard);
      if (checkDraw()) {
        audio?.pause();
        drawSound!.play();
        setTimeout(() => {
          audio!.play();
        }, 5000);
        setIsDraw(true);
      }
    },
    [
      board,
      changePlayer,
      currentPlayer,
      checkWin,
      hasWinner,
      checkDraw,
      popSound,
      winSound,
      audio,
      drawSound,
    ]
  );

  const refresh = useCallback(() => {
    window.location.reload();
  }, []);

  const resetBoard = useCallback(() => {
    board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell != 0) {
          const boardCell = document.querySelector(
            `.c${rowIndex}-${columnIndex}`
          );
          if (boardCell) {
            boardCell.classList.remove("animate__bounceInDown");
            boardCell.classList.add("animate__bounceOutDown");
          }
        }
      });
    });

    setTimeout(() => {
      setBoard([
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]);
      setCurrentPlayer(1);
      setHasWinner(false);
      setIsDraw(false);
    });
  }, [board]);

  useEffect(() => {
    setPopSound(new Audio("/pop.MP3"));
    setWinSound(new Audio("/win.MP3"));
    setDrawSound(new Audio("/draw.MP3"));
  }, []);

  return (
    <div>
      <div className=" d-flex justify-content-end">
        <Button variant="dark" onClick={showMatrixToggler}>
          {!showMatrixState ? "Show Matrix" : "Show Board"}
        </Button>
      </div>
      <div className={style.connectFourBoard}>
        {board.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={style.connectFourColumn}
            onClick={() => handleColumnClick(rowIndex)}
          >
            {row.map((cellValue, columnIndex) => (
              !showMatrixState ?
              <BoardCell
                key={rowIndex + "-" + columnIndex}
                value={cellValue}
                animate={true}
                className={`c${rowIndex}-${columnIndex}`}
              />
              : <MatrixCell key={rowIndex + "-" + columnIndex} value={cellValue}/>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-black bg-opacity-50 p-2 mt-2 rounded-2">
        <div className="d-flex align-items-center gap-2">
          {!hasWinner && !isDraw && (
            <>
              <span>
                <b>Next turn:</b>
              </span>
              <BoardCell value={currentPlayer} side={30} />
            </>
          )}
          {!hasWinner && isDraw && (
            <>
              <span>
                <b>It&apos;s a draw!</b>
              </span>
            </>
          )}
          {hasWinner && (
            <>
              <BoardCell value={currentPlayer} side={30} animate={false} />
              <span>
                <b>Won the game!</b>
              </span>
            </>
          )}
        </div>
        <div className="mt-2">
          <ResetButton onClick={resetBoard} />
        </div>
        <div className="d-flex justify-content-between gap-2 mt-2">
          <Button
            variant="outline-light"
            style={{ fontSize: "0.9rem", padding: "6px" }}
            onClick={refresh}
          >
            Back to main screen
          </Button>
          <VolumeButton audio={audio} />
        </div>
      </div>
    </div>
  );
}

export default Board;
