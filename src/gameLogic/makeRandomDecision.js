
// Make random decision and assign new quote value
export default function makeRandomDecision(kanyeQuotes, AIQuotes, setKanyeQuotes, setAIQuotes, setGameQuote) {

    // Make random decision to display quote: 0 = Kanye / 1 = AI
    const randomDecision = Math.floor(Math.random() * 2);
    if (randomDecision === 0) {
        setGameQuote({
            quote: kanyeQuotes[0],
            author: "KanyeWest"
        });
        setKanyeQuotes(prev => prev.slice(1));
    } else {
        setGameQuote({
            quote: AIQuotes[0],
            author: "AI"
        });
        setAIQuotes(prev => prev.slice(1));
    }
}