// Make random decision and assign new quote value
export default function MakeRandomDecision(kanyeQuotes, AIQuotes, setGameQuote) {
    // Make random decision to display quote: 0 = Kanye / 1 = AI
    const randomDecision = Math.floor(Math.random() * 2);
    if (randomDecision === 0) {
        setGameQuote({
            quote: kanyeQuotes[0],
            author: "kanye"
        });
        kanyeQuotes.shift();
    } else {
        setGameQuote({
            quote: AIQuotes[0],
            author: "AI"
        });
        AIQuotes.shift();
    }
}