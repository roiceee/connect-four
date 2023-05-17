"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import PlayButton from "@/components/play-button/play-button";
import { playAudio } from "@/util/background-audio";
import VolumeButton from "@/components/volume-button/volume-button";
import Board from "@/components/board/board";
import Button from "react-bootstrap/Button"

export default function Home() {
  const [isPlayingState, setIsPlayingState] = useState<boolean>(false);

  const setIsPlaying = useCallback(() => {
    setIsPlayingState(true);
    playAudio();
  }, []);
  useEffect(() => {
    window.onbeforeunload = function() {
      return ""
    }
  },[])
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
      
    </Container>
  );
}
