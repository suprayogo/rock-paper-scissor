import React, { useState } from 'react';
import Navbar from "../components/navbar";
import { useAudioContext } from "./AudioContext.js";

function PlayWithCom() {
  const { audioPlaying, toggleAudio } = useAudioContext();
  const [rounds, setRounds] = useState(1);
  const [start, setStart] = useState(false);

  const handleRoundChange = (event) => {
    setRounds(event.target.value);
  };

  const startGame = () => {
    // Logika permainan sederhana (ganti dengan logika permainan yang sesungguhnya)
    console.log(`Memulai permainan dengan ${rounds} putaran.`);
    setStart(true); // Menandai bahwa permainan telah dimulai
  };

  const handleStartGameClick = () => {
      toggleAudio();
    startGame();
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen animated-background">
        <h2 className="text-2xl font-semibold mb-4 hacker-text text-white">Select Round</h2>
        <select
          className="p-2 border border-gray-300 rounded"
          value={rounds}
          onChange={handleRoundChange}
        >
          <option value={1}>1 Round</option>
          <option value={2}>2 Round</option>
          <option value={3}>3 Round</option>
          <option value={4}>4 Round</option>
          <option value={5}>5 Round</option>
          <option value={6}>6 Round</option>
          <option value={7}>7 Round</option>
          <option value={8}>8 Round</option>
          <option value={9}>9 Round</option>
          <option value={10}>10 Round</option>
        </select>
        {start ? (
          <p>Permainan telah dimulai!</p>
        ) : (
          <button
            onClick={handleStartGameClick}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
          >
            Start Game
          </button>
        )}
      </div>
    </>
  );
}

export default PlayWithCom;
