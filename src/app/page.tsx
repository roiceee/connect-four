"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import PlayButton from "@/components/play-button/play-button";
import Board from "@/components/board/board";

export default function Home() {

  const audio = useRef(new Audio("/background.MP3"));

  const [isPlayingState, setIsPlayingState] = useState<boolean>(false);

  const setIsPlaying = useCallback(() => {
    setIsPlayingState(true);
    audio.current.play();
  }, []);

  useEffect(() => {
    audio.current = new Audio("/background.MP3");
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
            <Board audio={audio} />
          </div>
        </Container>
      )}
      
    </Container>
    
  );
}
