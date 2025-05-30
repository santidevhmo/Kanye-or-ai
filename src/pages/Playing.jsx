// ❗️ YOU'RE STUCK DOING THE FRONTEND FIRST AGAIN.
// GO BACK AND TO THE BACKEND WITH PURE HTML COMPONENTS : SIMPLE BTNS, SIMPLE CONTAINER WITH TEXT

import { useState, useEffect } from 'react'
import { exKanyeQuotes, exAIQuotes } from "../data/TestData"
import FetchKanyeQuotes from '../utils/FetchKanyeQuotes'
import FetchAIQuotes from '../utils/FetchAIQuotes'
import MakeRandomDecision from '../utils/MakeRandomDecision'
import HandleAnswer from '../utils/HandleAnswer'

export default function Playing(props) {

    // Our Game Quote object that will be constantly updated and stores the values of the currently displayed quote and its author
    const [gameQuote, setGameQuote] = useState({
        quote: exKanyeQuotes[0],
        author: "kanye",
    })
    // Our state var that enables the different displays of the frontend: Playing, CorrectAnswer, or WrongAnswer
    const [playingGameStatus, setplayingGameStatus] = useState("playing")
    const [gameStreak, setGameStreak] = useState(0)

    // Load the quote to display on start of the game
    useEffect(() => {
        MakeRandomDecision(
            exKanyeQuotes,
            exAIQuotes,
            setGameQuote
        )
    }, []);

    return (
        <>
            {playingGameStatus === "playing" ? ( // ----- Current game status = Waiting for user response -----
                <div className="flex flex-col w-full max-w-220 h-full items-center justify-center bg-white">
                    <div className="flex w-full justify-start">
                        <img
                            src="../../public/guessplaceholder.webp"
                            alt="Profile"
                            className="w-10 h-10 rounded-full mb-4 border-2 border-solid border-black"
                        />
                        <div className="flex flex-col ml-3">
                            <p>________</p>
                            <p>@whosaidthisquote</p>
                        </div>
                    </div>
                    <div className="pb-5">
                        {/* Quote Component */}
                        <h3 className="text-2xl font-bold">{gameQuote.quote}</h3>
                        <div className="flex gap-4 mt-4">
                            <button id="kanye" onClick={() => HandleAnswer(gameQuote.author, "kanye", setplayingGameStatus)} className="w-32 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors">Kanye</button>
                            <button id="AI" onClick={() => HandleAnswer(gameQuote.author, "AI", setplayingGameStatus)} className="w-32 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors">AI</button>
                        </div>
                    </div>
                </div>
            ) : playingGameStatus === "correct" ? (
                <h2>CORRECT</h2>
            ) : playingGameStatus === "wrong" ? (
                <h2>WRONG ANSWER DUMBASS</h2>
            ) : (
                <h2>Placeholder</h2>
            )}
        </>
    )
}
