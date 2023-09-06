import React, { createContext, useContext, useState, useRef, useEffect } from "react";


const MusicContext = createContext();

export const useMusicContext = () => {
  return useContext(MusicContext);
};

export const MusicProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isMuted) {
        audioElement.pause(); 
      } else {
        audioElement.play(); 
      }
    }
  }, [isMuted]);

  useEffect(() => {
   
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <MusicContext.Provider value={{ isMuted, toggleMute }}>
      {children}
      <audio id="music-background" autoPlay loop ref={audioRef} src="/music-background.mp3" />
    </MusicContext.Provider>
  );
};
