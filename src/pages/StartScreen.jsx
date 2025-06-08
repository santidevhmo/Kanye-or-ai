
export default function StartScreen(props) {

    const readyToPlay = props.usedQuotesState.length > 0;

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <img src='../public/PixeTitleTest.png' className="w-65" />
            <button 
                className={readyToPlay ? "nes-btn" : "nes-btn is-disabled"}
                onClick={() => props.setMainGameState("playing")}
            >
                {readyToPlay ? "Start Game" : "Not ready yet"}
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