
export default function handleAnswer(gameQuoteAuthor, buttonValue, setPlayingGameStatus) {
    // Correct Answer
    if (gameQuoteAuthor === buttonValue) {
        setPlayingGameStatus("correct")
    // Wrong Answer
    } else {
        setPlayingGameStatus("wrong")
    }
}