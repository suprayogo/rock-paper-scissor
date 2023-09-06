import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.play();
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <nav className="bg-gray-800 text-white w-full py-4 fixed top-0">
      <div className="container mx-auto flex justify-between ">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mx-auto">
          Rock Paper Scissors Game
        </h1>

        <button className=" text-2xl mr-4" onClick={toggleMute}>
          {isMuted ? (
            <FontAwesomeIcon icon={faVolumeMute} />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} />
          )}
        </button>

        <audio autoPlay loop ref={audioRef} src="/music-background.mp3" />
      </div>
    </nav>
  );
}

export default Navbar;
