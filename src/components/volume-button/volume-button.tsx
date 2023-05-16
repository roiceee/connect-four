"use client";
import Image from "next/image";
import style from "./volume-button.module.css";
import { useCallback, useState } from "react";
import { muteAudio, unmuteAudio } from "@/util/background-audio";

function VolumeButton() {
  const [isMute, setIsMute] = useState<boolean>(false);

  const mute = useCallback(() => {
    setIsMute(true);
    muteAudio();
  }, []);

  const unMute = useCallback(() => {
    setIsMute(false);
    unmuteAudio();
  }, []);

  return (
    <>
      {!isMute && (
        <div onClick={mute} className={style.style}>
          <Image src="/volume-icon.svg" height={20} width={20} alt="mute" />
        </div>
      )}

      {isMute && (
        <div onClick={unMute} className={style.style}>
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
