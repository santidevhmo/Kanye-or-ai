
export default function HandleAnswer(gameQuoteAuthor, buttonValue, setPlayingGameStatus) {
    // Correct Answer
    if (gameQuoteAuthor === buttonValue) {
        setPlayingGameStatus("correct")
    // Wrong Answer
    } else {
        setPlayingGameStatus("wrong")
    }
}