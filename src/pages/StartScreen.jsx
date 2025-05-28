
export default function StartScreen({ changeGameState }) {

    return (
        <div className="flex flex-col items-center justify-center">
            <img src='../public/PixeTitleTest.png' className="w-50" />
            <button 
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => changeGameState("playing")}
            >
                Start Game
            </button>
        </div>
    )
}