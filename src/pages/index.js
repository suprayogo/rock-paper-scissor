
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import "../style/animation.css";
import { useAudioContext } from "../utils/AudioContext.js";

function Index() {
  const { audioPlaying, toggleAudio } = useAudioContext();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen animated-background">
        <div className="container mx-auto mt-0 flex flex-col items-center space-y-4 h-full">
          <div className="relative mx-4 my-8 lg:mx-0">
            <Image
              src="/logo200.png"
              alt="Image Game"
              width={400}
              height={400}
              className="rounded"
            />
          </div>
          <Link href="/start-game">
            <button
              onClick={toggleAudio}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
            >
        PLAY WITH PLAYERS
            </button>
          </Link>

          
          <Link href="/play-with-com">
            <button
              onClick={toggleAudio}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
            >
        PLAY WITH COM
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;
