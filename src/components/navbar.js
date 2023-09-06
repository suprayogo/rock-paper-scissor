import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { useMusicContext } from "../pages/MusicContext";

function Navbar() {
  const { isMuted, toggleMute } = useMusicContext();

  return (
    <nav className="bg-gray-800 text-white w-full py-4 fixed top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mx-auto">
          Rock Paper Scissors Game
        </h1>

        <button className="text-2xl mr-4" onClick={toggleMute}>
          {isMuted ? (
            <FontAwesomeIcon icon={faVolumeMute} />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} />
          )}
        </button>
       
      </div>
    </nav>
  );
}

export default Navbar;
