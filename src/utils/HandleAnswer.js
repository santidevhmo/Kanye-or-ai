export default function HandleAnswer(gameQuoteAuthor, buttonValue, setPlayingGameStatus) {
    if (gameQuoteAuthor === buttonValue) {
        console.log("--")
        console.log(`${gameQuoteAuthor} is equal to ${buttonValue}`)
        console.log("Setting game state to 'correct'")
        setPlayingGameStatus("correct")
    } else {
        console.log("--")
        console.log(`${gameQuoteAuthor} is NOT equal to ${buttonValue}`)
        console.log("Setting game state to 'wrong'")
        setPlayingGameStatus("wrong")
    }
}