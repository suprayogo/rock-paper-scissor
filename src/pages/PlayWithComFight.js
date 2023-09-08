import Image from "next/image";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
function PlayWithComFight(props) {
  const { round } = props;
  const [playerFighter, setPlayerFighter] = useState("");
  const [compFighter, setCompFighter] = useState("");
  const [fighting, setFighting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState("");
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState({
    you: 0,
    com: 0,
  });

  const compFighterRef = useRef();
  compFighterRef.current = compFighter;

  const computerFighter = () => {
    const fighter = ["paper", "rock", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);

    setCompFighter(fighter[randomNumber]);
  };

  const selectedPlayerFighter = () => {
    switch (playerFighter) {
      case "paper":
        return "/paper.png";
      case "rock":
        return "/rock.png";
      case "scissors":
        return "/scissors.png";
      default:
        break;
    }
  };

  const selectedCompFighter = () => {
    switch (compFighter) {
      case "paper":
        return "/paper.png";
      case "rock":
        return "/rock.png";
      case "scissors":
        return "/scissors.png";
      default:
        break;
    }
  };

  const gameResult = () => {
    const rule = {
      paper_paper: "Draw",
      paper_rock: "You",
      paper_scissors: "Computer",
      rock_paper: "Computer",
      rock_rock: "Draw",
      rock_scissors: "You",
      scissors_paper: "You",
      scissors_rock: "Computer",
      scissors_scissors: "Draw",
    };

    let result = `${playerFighter}_${compFighterRef.current}`;

    setWinner(rule[result]);

    if (rule[result] === "You") {
      setScore({ ...score, you: score.you + 1 });
    } else if (rule[result] === "Computer") {
      setScore({ ...score, com: score.com + 1 });
    }
  };

  const startFighting = () => {
    computerFighter();
    setFighting(true);
    setLoading(true);

    setTimeout(() => {
      gameResult();
      setLoading(false);
    }, 2500);
  };

  const nextGame = () => {
    console.log("Next Game - currentRound:", currentRound);
    setCurrentRound((prev) => prev + 1);
    console.log("Next Game - updated currentRound:", currentRound);
    setFighting(false);
    setLoading(false);
    setPlayerFighter("");
    setCompFighter("");
    setWinner("");
  };

  const finalResult = () => {
    const winnerText =
      score.you > score.com
        ? '<span style="color: green;">You Winner!</span>'
        : score.you === score.com
        ? '<span style="color: blue;">Draw Game</span>'
        : '<span style="color: red;">Computer Winner!</span>';

    Swal.fire({
      title: winnerText,
      text: "Play again?",
      allowOutsideClick: false,
      confirmButtonText: "Play again",
      showCancelButton: true,
      cancelButtonText: "Back to Home",
      showHtml: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      } else if (result.isDismissed) {
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <div
        className="bg-gray-900 mt-12 mb-4 text-white flex flex-col justify-center items-center w-full"
        style={{ width: "180px", borderRadius: "10px" }}
      >
        <header className="text-4xl mb-1 font-semibold">ROUND </header>
        <h2 className="text-3xl">{currentRound}</h2>
      </div>

      <div className="flex justify-between mb-12 mx-4 lg:mx-0">
        <div className="border bg-gray-900 border-blue-500 p-4 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-blue-500">YOU</h2>
          <div className="text-3xl text-white font-bold mt-2">
            Score: <span className="text-blue-500">{score.you}</span>
          </div>
        </div>

        <div className="border bg-gray-900 border-red-500 p-4 rounded-lg shadow-lg ms-12 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-red-500">COMPUTER</h2>
          <div className="text-3xl text-white font-bold mt-2">
            Score: <span className="text-red-500"> {score.com}</span>
          </div>
        </div>
      </div>

      {fighting ? (
        <>
          <div className=" flex justify-between">
            <div className={`w-1/2 ${loading && "start"}`}>
              <div className="rotate-90" style={{ marginRight: "25px" }}>
                <Image
                  id="player"
                  className={`fighterspeed ${
                    loading ? " move-right" : "fighter"
                  }`}
                  src={loading ? "/rock.png" : selectedPlayerFighter()}
                  alt="fighter"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={`w-1/2 ${loading && "start"}`}>
              <div className="flip-horizontal" style={{ marginLeft: "25px" }}>
                <Image
                  id="computer"
                  className={`fighterspeed ${
                    loading ? " move-right" : "fighter"
                  }`}
                  src={loading ? "/rock.png" : selectedCompFighter()}
                  alt="fighter"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          {loading ? (
            <h1 className="text-3xl hacker-text font-bold text-white m-0 p-0">
              Fighting
            </h1>
          ) : (
            <>
              <h1 className="text-3xl text-white font-bold mb-3 p-0">
                {winner === "Draw" ? "Game Draw" : `${winner} Win!`}
              </h1>
              {currentRound == round ? (
                <h3
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-0 p-0 cursor-pointer"
                  onClick={finalResult}
                >
                  Finish
                </h3>
              ) : (
                <h3
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 m-0 p-0 cursor-pointer"
                  onClick={nextGame}
                >
                  Next Round
                </h3>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <div className=" flex justify-between">
            <div className={`w-1/2 ${loading && "start"}`}>
              <div className="rotate-90" style={{ marginRight: "25px" }}>
                <Image
                  id="player"
                  className={`fighter ${
                    loading ? "hidden move-right" : "move-left"
                  }`}
                  src="/rock.png"
                  alt="fighter"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={`w-1/2 ${loading && "start"}`}>
              <div className="flip-horizontal" style={{ marginLeft: "25px" }}>
                <Image
                  id="computer"
                  className={`fighter ${
                    loading ? "hidden move-right" : "move-left"
                  }`}
                  src="/rock.png"
                  alt="fighter"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end">
            <div
              id="paper"
              className={`option w-1/3 ${
                playerFighter === "paper" ? "selected" : ""
              }`}
              onClick={() => setPlayerFighter("paper")}
            >
              <div
                className={`ms-2 fighter ${
                  playerFighter !== "paper" ? "opacity-50" : ""
                }`}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <Image
                  src="/paper.png"
                  alt="fighter"
                  width={80}
                  height={80}
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              id="rock"
              className={`option w-1/3 ${
                playerFighter === "rock" ? "selected" : ""
              }`}
              onClick={() => setPlayerFighter("rock")}
            >
              <div
                className={` ms-2 fighter ${
                  playerFighter !== "rock" ? "opacity-50" : ""
                }`}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <Image
                  src="/rock.png"
                  alt="fighter"
                  width={80}
                  height={80}
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              id="scissors"
              className={`option w-1/3 ${
                playerFighter === "scissors" ? "selected" : ""
              }`}
              onClick={() => setPlayerFighter("scissors")}
            >
              <div
                className={`ms-2 fighter ${
                  playerFighter !== "scissors" ? "opacity-50" : ""
                }`}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <Image
                  src="/scissors.png"
                  alt="fighter"
                  width={80}
                  height={80}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="action mt-3">
            {playerFighter ? (
              <button
                className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => {
                  startFighting();
                }}
              >
                FIGHT
              </button>
            ) : (
              <h1 className="text-2xl text-white font-semibold">
                SELECT YOUR POWER
              </h1>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default PlayWithComFight;
