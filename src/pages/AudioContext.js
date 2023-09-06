// AudioContext.js
import React, { createContext, useContext, useState, useEffect, useRef} from 'react';

const AudioContext = createContext();

export function useAudioContext() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    audio.onended = () => {
      setAudioPlaying(false);
    };

    return () => {
      audio.onended = null;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setAudioPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setAudioPlaying(false);
    }
  };

  const value = {
    audioPlaying,
    toggleAudio,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
      <audio id="button-audio" src="/game-start.mp3" preload="auto" ref={audioRef}></audio>
    </AudioContext.Provider>
  );
}
