import React, { useEffect, useRef } from 'react';

function Navbar() {
  const audioRef = useRef(null);

  useEffect(() => {
   
    if (audioRef.current) {
    
      audioRef.current.play();
    } 
  }, []);

  return (
    <>
      <nav className="bg-gray-800 text-white w-full py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-center">Rock Paper Scissors Game</h1>
        
          <audio autoPlay loop ref={audioRef} src="/music-background.mp3" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
