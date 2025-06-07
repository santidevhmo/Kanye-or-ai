
export default function StartScreen(props) {

    const readyToPlay = props.usedQuotesState.length > 0;

    return (
        <div className="flex flex-col items-center justify-center">
            <img src='../public/PixeTitleTest.png' className="w-50" />
            <button 
                className={readyToPlay ? "nes-btn" : "nes-btn is-disabled"}
                onClick={() => props.setMainGameState("playing")}
            >
                {readyToPlay ? "Start Game" : "Not ready yet"}
            </button>
        </div>
    )
}