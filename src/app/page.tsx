"use client";

import Image from "next/image";
import image from "../assets/images/connect-4.png";
import { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import PlayButton from "@/components/play-button/play-button";
import { playAudio } from "@/util/background-audio";
import VolumeButton from "@/components/volume-button/volume-button";
import Board from "@/components/board/board";

export default function Home() {
  const [isPlayingState, setIsPlayingState] = useState<boolean>(false);

  const setIsPlaying = useCallback(() => {
    setIsPlayingState(true);
    playAudio();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Image
          src={image}
          height={200}
          style={{ objectFit: "contain" }}
          alt="title"
          priority={true}
        />
      </div>

      {!isPlayingState && (
        <div
          className="text-center"
          style={{ position: "absolute", top: "80%", left: "0", right: "0" }}
        >
          <PlayButton onClick={setIsPlaying} />
        </div>
      )}
      {isPlayingState && (
        <Container>
          <div className="d-flex justify-content-center">
            <Board />
          </div>
        </Container>
      )}
      <div style={{ position: "absolute", top: "92%", left: "85%" }}>
        <VolumeButton />
      </div>
    </Container>
  );
}
