import React from "react";
import Link from "next/link";
import "../style/animation.css";
import Navbar from "../components/navbar";

function Index() {
  return (
    <>
   < Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen animated-background">
        <div className="container mx-auto mt-0">
          <div className="flex flex-col items-center space-y-12">
            <div className="relative">
              <img
                src="./logo200.png"
                alt="Image Game"
                className="w-full h-auto"
                style={{ borderRadius: "10px" }}
              />
            </div>
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
