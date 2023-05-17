"use client";
import Image from "next/image";
import style from "./volume-button.module.css";
import { useCallback, useContext, useState } from "react";
import { muteAudio, unMuteAudio } from "@/util/background-music";

function VolumeButton() {
  const [isMute, setIsMute] = useState<boolean>(false);

  const muteHandler = useCallback(() => {
    setIsMute(true);
    muteAudio();
  }, []);

  const unMuteHandler = useCallback(() => {
    setIsMute(false);
    unMuteAudio();
  }, []);

  return (
    <>
      {!isMute && (
        <div onClick={muteHandler} className={style.style}>
          <Image src="/volume-icon.svg" height={20} width={20} alt="mute" />
        </div>
      )}

      {isMute && (
        <div onClick={unMuteHandler} className={style.style}>
          <Image
            src="/volume-mute-icon.svg"
            height={20}
            width={20}
            alt="unmute"
          />
        </div>
      )}
    </>
  );
}

export default VolumeButton;
