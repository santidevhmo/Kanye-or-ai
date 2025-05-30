
export default function StartScreen(props) {

    const readyToPlay = props.usedQuotesState.length > 0;

    return (
        <div className="flex flex-col items-center justify-center">
            <img src='../public/PixeTitleTest.png' className="w-50" />
            <button 
                // disabled={!readyToPlay}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => props.setMainGameState("playing")}
            >
                {readyToPlay ? "Start Game" : "Not ready yet"}
            </button>
        </div>
    )
}