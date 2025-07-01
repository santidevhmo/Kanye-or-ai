import { motion } from 'framer-motion';

export default function StartScreen({ setMainGameState, usedQuotesState }) {

    const readyToPlay = usedQuotesState.length > 0;

    // Handler func for "Start Game" button
    function handleStartGame() {
        setMainGameState("playing")
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <motion.img
                src='/PixelTitleTest.webp'
                className='pixelated w-65'
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.img>
            {/* <img src='/PixelTitleTest.webp' className="w-65" /> */}
            <button 
                className={readyToPlay ? "nes-btn" : "nes-btn is-disabled"}
                onClick={handleStartGame}
            >
                {readyToPlay ? "Start Game" : " Loading... "}
            </button>
            <div className="fixed bottom-0 left-0 w-full flex flex-row justify-end pb-6 pr-8 bg-transparent z-50">
                <a
                    href="https://buymeacoffee.com/santiagdc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    tabIndex={-1}
                >
                    <button className="nes-btn is-warning flex items-center justify-center">
                        <img src="/BuyMeCoffee.svg" alt="Buy me a coffee" style={{ height: "35px" }} />
                    </button>
                </a>
            </div>
        </div>
    )
}