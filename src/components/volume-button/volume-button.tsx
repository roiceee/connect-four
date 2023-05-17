"use client";
import Image from "next/image";
import style from "./volume-button.module.css";
import { MutableRefObject, useCallback, useContext, useState } from "react";


interface VolumeButtonProps {
  audio: MutableRefObject<HTMLAudioElement>;
}

function VolumeButton({audio}: VolumeButtonProps) {
  const [isMute, setIsMute] = useState<boolean>(false);

  const muteHandler = useCallback(() => {
    setIsMute(true);
    audio.current.muted = true;
  }, [audio]);

  const unMuteHandler = useCallback(() => {
    setIsMute(false);
    audio.current.muted = false;
  }, [audio]);

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
