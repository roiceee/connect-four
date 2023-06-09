"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import PlayButton from "@/components/play-button/play-button";
import Board from "@/components/board/board";
import Instruction from "@/components/instruction/instruction";

export default function Home() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  const [isInstructionState, setIsInstructionState] = useState<boolean>(false);

  const [isPlayingState, setIsPlayingState] = useState<boolean>(false);

  const setIsPlaying = useCallback(() => {
    setIsPlayingState(true);
    setIsInstructionState(false);
    if (!audio) {
      return;
    }
    audio.volume = 0.7;
    audio.play();
    audio.loop = true;
  }, [audio]);

  useEffect(() => {
    setAudio(new Audio("/background.MP3"));
    window.onbeforeunload = function () {
      return "";
    };
  }, []);

  const setToInstruction = useCallback(() => {
    setIsInstructionState(true);
  }, []);

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Image
          src={"/images/connect-4.png"}
          height={200}
          width={300}
          style={{ objectFit: "contain" }}
          alt="title"
          priority={true}
        />
      </div>

      {(!isInstructionState && !isPlayingState) && (
        <div
          className="text-center"
          style={{ position: "absolute", top: "80%", left: "0", right: "0" }}
        >
          <PlayButton onClick={setToInstruction} />
        </div>
      )}

      {isPlayingState && (
        <Container>
          <div className="d-flex justify-content-center">
            <Board audio={audio} />
           
          </div>
        </Container>
      )}

      {isInstructionState && (
        <div className="d-flex justify-content-center">
          <Instruction onClick={setIsPlaying} />
        </div>
      )}
    </Container>
  );
}
