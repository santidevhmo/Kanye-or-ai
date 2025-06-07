// ❗️ YOU'RE STUCK DOING THE FRONTEND FIRST AGAIN.
// GO BACK AND TO THE BACKEND WITH PURE HTML COMPONENTS : SIMPLE BTNS, SIMPLE CONTAINER WITH TEXT

import { useState, useEffect } from 'react'
// import { exKanyeQuotes, exAIQuotes } from "../data/TestData"
import FetchKanyeQuotes from '../utils/FetchKanyeQuotes'
import FetchAIQuotes from '../utils/FetchAIQuotes'
import MakeRandomDecision from '../utils/MakeRandomDecision'
import HandleAnswer from '../utils/HandleAnswer'
import RefillChecker from '../utils/RefillChecker'

export default function Playing(props) {

    // Our Game Quote object that will be constantly updated and stores the values of the currently displayed quote and its author
    const [gameQuote, setGameQuote] = useState({
        quote: props.kanyeQuotesArr[0],
        author: "kanye",
    })

    // Our state var that enables the different displays of the frontend: Playing, CorrectAnswer, or WrongAnswer
    const [playingGameStatus, setplayingGameStatus] = useState("playing")
    const [gameStreak, setGameStreak] = useState(0)

    // ---- ON PAGE RENDER -----
    // Load the quote to display on start of the game
    useEffect(() => {
        MakeRandomDecision(
            props.kanyeQuotesArr,
            props.AIQuotesArr,
            props.setKanyeQuotes,
            props.setAIQuotes,
            setGameQuote
        )
    }, []);

    // ---- ON GAME STATUS STATE CHANGE  -----
    // Effect to update gameStreak and its latest value to be shown in "CURRENT GAME STREAK" text
    useEffect(() => {
        if (playingGameStatus === "correct") {
            setGameStreak(prevGameStreak => prevGameStreak += 1)
        }
    }, [playingGameStatus])

    // Function to trigger 2 state updates on btn click of "Next Quote" or "Try Again"
    async function handleContinueGameClick(buttonId) {

        // If "Try Again" was clicked, reset the streak state var
        if (buttonId == "tryAgain") {
            setGameStreak(0)
        }
        
        await MakeRandomDecision(
            props.kanyeQuotesArr,
            props.AIQuotesArr,
            props.setKanyeQuotes,
            props.setAIQuotes,
            setGameQuote
        )
        setplayingGameStatus("playing")
        RefillChecker(
            props.kanyeQuotesArr,
            props.AIQuotesArr,
            props.usedQuotesArr,
            props.setKanyeQuotes,
            props.setAIQuotes,
            props.setUsedQuotes
        )
    }
    // Function to handle "Go to home" button but to also run RefillChecker 
    // (not possible to run 2 functions inside onClick)
    async function handleHomeClick() {
        props.setMainGameState("start")
        RefillChecker(
            props.kanyeQuotesArr,
            props.AIQuotesArr,
            props.usedQuotesArr,
            props.setKanyeQuotes,
            props.setAIQuotes,
            props.setUsedQuotes
        )
    }

    return (
        <>
            {/* ----- Current game status = Waiting for user response ----- */}
            {playingGameStatus === "playing" ? (
                <div className="w-[80%] max-w-6xl">
                    <div className="flex justify-between">
                        <div className="flex">
                            <img
                                src="/guessplaceholder.webp"
                                alt="Profile"
                                className="w-13 h-13 mb-5"
                            />
                            <p className="ml-4 pt-3.5">@_________</p>
                        </div>
                        <h3 className="pt-8">GAME STREAK: {gameStreak}</h3>
                    </div>
                    <div className="nes-container with-title">
                        <p className="title text-8xl">Who said this?</p>
                        <div>
                            {/* Quote Component */}
                            <h3 className="text-2xl pt-4">{gameQuote.quote}</h3>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8 justify-center">
                        <button id="kanye" onClick={() => HandleAnswer(gameQuote.author, "KanyeWest", setplayingGameStatus)} className="nes-btn w-32">Kanye</button>
                        <button id="AI" onClick={() => HandleAnswer(gameQuote.author, "AI", setplayingGameStatus)} className="nes-btn w-32">AI</button>
                    </div>
                </div>
                // ----- Correct Answer UI -----
            ) : playingGameStatus === "correct" ? (
                <div className="w-[80%] max-w-6xl">
                    <div className="flex w-full justify-between">
                        <div className="flex">
                            <img
                                src={gameQuote.author === "KanyeWest" ? "/kanyeplaceholdercorrect.webp" : "../../public/aiplaceholdercorrect.webp"}
                                alt="Profile"
                                className="w-13 h-13 mb-5"
                            />
                            <p className="text-green-600 ml-4 pt-3.5">@{gameQuote.author}</p>
                        </div>
                        <h3 className="pt-8 text-green-600">GAME STREAK: {gameStreak}</h3>
                    </div>

                    <div className="nes-container bg-green-600">
                        <div>
                            <h3 className="text-2xl pt-4 text-white">{gameQuote.quote}</h3>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 justify-center">
                        <button
                            onClick={() => handleContinueGameClick("nextQuote")}
                            className="nes-btn w-62"
                        >
                            Next quote
                        </button>
                    </div>
                </div>


                // ----- Wrong Answer UI -----
            ) : playingGameStatus === "wrong" ? (
                <div className="w-[80%] max-w-6xl">
                    <div className="flex w-full justify-between">
                        <div className="flex">
                            <img
                                src={gameQuote.author === "KanyeWest" ? "/kanyeplaceholderwrong.webp" : "../../public/aiplaceholderwrong.webp"}
                                alt="Profile"
                                className="w-13 h-13 mb-5"
                            />
                            <p className="text-red-600 ml-4 pt-3.5">@{gameQuote.author}</p>
                        </div>
                        <h3 className="pt-8 text-red-600">GAME STREAK: {gameStreak}</h3>
                    </div>

                    <div className="nes-container bg-red-600">
                        <div>
                            <h3 className="text-2xl pt-4 text-white">{gameQuote.quote}</h3>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 justify-center">
                        <button
                            onClick={() => handleContinueGameClick("tryAgain")}
                            className="nes-btn is-warning w-62"
                        >
                            Try Again
                        </button>
                        <button
                            onClick={() => handleHomeClick()}
                            className="nes-btn w-62"
                        >
                            Go back home
                        </button>
                    </div>
                </div>

            ) : (
                <h2>Placeholder</h2>
            )}
        </>
    )
}
