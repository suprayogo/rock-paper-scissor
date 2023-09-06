import React from "react";
import Link from "next/link";
import "../style/animation.css";

function Index() {
  return (
    <>
      <nav className="bg-gray-800 text-white w-full py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">
            Rock Paper Scissors Game
          </h1>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen animated-background">
        <div className="container mx-auto mt-6">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/game?choice=rock">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
                Let's Go to Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
