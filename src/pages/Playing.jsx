import { useState, useEffect } from 'react'
import makeRandomDecision from '../gameLogic/makeRandomDecision.js'
import handleAnswer from '../gameLogic/handleAnswer'
import refillChecker from '../gameLogic/refillChecker.js'
import { TypingEffect } from '../components/TypingEffect.tsx'
import { motion } from 'framer-motion';

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
        makeRandomDecision(
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

        await makeRandomDecision(
            props.kanyeQuotesArr,
            props.AIQuotesArr,
            props.setKanyeQuotes,
            props.setAIQuotes,
            setGameQuote
        )
        setplayingGameStatus("playing")
        refillChecker(
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
        refillChecker(
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
                                alt="Profile placeholder"
                                className="w-13 h-13 mb-5"
                                aria-label="Profile placeholder image"
                            />
                            <p className="ml-4 pt-3.5">@_________</p>
                        </div>
                    </div>
                    <div className="nes-container with-title">
                        <p className="title text-8xl">Who said this?</p>
                        <div>
                            {/* Quote Component */}
                            <h3
                                className={`${gameQuote.quote.length > 100 ? "text-md" : "text-lg"
                                    } md:text-2xl pt-4`}
                            >
                                <TypingEffect text={gameQuote.quote} />
                            </h3>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8 justify-center">
                        <button
                            id="kanye"
                            onClick={() => handleAnswer(gameQuote.author, "KanyeWest", setplayingGameStatus)}
                            className="nes-btn w-32"
                            aria-label="Select Kanye as the answer"
                        >
                            Kanye
                        </button>
                        <button
                            id="AI"
                            onClick={() => handleAnswer(gameQuote.author, "AI", setplayingGameStatus)}
                            className="nes-btn w-32"
                            aria-label="Select AI as the answer"
                        >
                            AI
                        </button>
                    </div>
                    <h3 className="fixed bottom-0 left-0 w-full flex justify-center pb-6 bg-transparent pointer-events-none z-50">
                        GAME STREAK: {gameStreak}
                    </h3>
                </div>

                // ----- Correct Answer UI -----
            ) : playingGameStatus === "correct" ? (
                <div className="w-[80%] max-w-6xl">
                    <div className="flex w-full justify-between">
                        <div className="flex">
                            <img
                                src={gameQuote.author === "KanyeWest" ? "/kanyeplaceholdercorrect.webp" : "/aiplaceholdercorrect.webp"}
                                alt="Profile correct answer"
                                className="w-13 h-13 mb-5"
                                aria-label="Profile correct answer image"
                            />
                            <p className="text-green-600 ml-4 pt-3.5">@{gameQuote.author}</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ boxShadow: "0 0 0px #00ff00" }}
                        animate={{
                            boxShadow: [
                                "0 0 0px #00ff00",
                                "0 0 10px #00ff00",
                                "0 0 0px #00ff00"
                            ],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="nes-container bg-green-600">
                            <div>
                                <h3 className={`${gameQuote.quote.length > 100 ? "text-md" : "text-lg"} md:text-2xl pt-4 text-white`}>
                                    {gameQuote.quote}
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex gap-4 mt-8 justify-center">
                        <button
                            onClick={() => handleContinueGameClick("nextQuote")}
                            className="nes-btn w-62"
                            aria-label="Next quote"
                        >
                            Next quote
                        </button>
                    </div>
                    <h3 className="text-green-600 fixed bottom-0 left-0 w-full flex justify-center pb-6 bg-transparent pointer-events-none z-50">
                        GAME STREAK:
                        <motion.span key={gameStreak}
                            initial={{ rotateX: 90, opacity: 0 }}
                            animate={{ rotateX: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.2 }}>
                            {gameStreak}
                        </motion.span>
                    </h3>
                </div>


                // ----- Wrong Answer UI -----
            ) : playingGameStatus === "wrong" ? (
                <div className="w-[80%] max-w-6xl">
                    <div className="flex w-full justify-between">
                        <div className="flex">
                            <img
                                src={gameQuote.author === "KanyeWest" ? "/kanyeplaceholderwrong.webp" : "/aiplaceholderwrong.webp"}
                                alt="Profile wrong answer"
                                className="w-13 h-13 mb-5"
                                aria-label="Profile wrong answer image"
                            />
                            <p className="text-red-600 ml-4 pt-3.5">@{gameQuote.author}</p>
                        </div>
                    </div>

                    <motion.div
                        animate={{
                            x: [-8, 8, -6, 6, -2, 2, 0],
                            transition: { duration: 0.4 },
                        }}
                    >
                        <div className="nes-container bg-red-600">
                            <div>
                                <h3 className={`${gameQuote.quote.length > 100 ? "text-md" : "text-lg"} md:text-2xl pt-4 text-white`}>
                                    {gameQuote.quote}
                                </h3>
                            </div>
                        </div>

                    </motion.div>

                    <div className="flex gap-4 mt-8 justify-center">
                        <button
                            onClick={() => handleContinueGameClick("tryAgain")}
                            className="nes-btn is-warning w-62"
                            aria-label="Try again"
                        >
                            Try Again
                        </button>
                        <button
                            onClick={handleHomeClick}
                            className="nes-btn w-62"
                            aria-label="Go back home"
                        >
                            Go back home
                        </button>
                    </div>
                    <h3 className="text-red-600 fixed bottom-0 left-0 w-full flex justify-center pb-6 bg-transparent pointer-events-none z-50">GAME STREAK: {gameStreak}</h3>
                </div>

            ) : (
                <h2>Placeholder</h2>
            )}
        </>
    )
}
