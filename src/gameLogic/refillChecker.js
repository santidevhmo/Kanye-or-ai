import fetchKanyeQuotes from "../api/fetchKanyeQuotes.js"
import fetchAIQuotes from "../api/fetchAIQuotes.js"

export default async function refillChecker(kanyeQuotes, AIQuotes, usedQuotes, setKanyeQuotes, setAIQuotes, setUsedQuotes) {
    // If the Kanye Quotes state array has 4 or less values, trigger a refill of it
    // (4 or less due to the array starting at 20 and quotes deleted when displayed)
    if (kanyeQuotes.length <= 4) {
        // Fetch the KanyeQuotes as a new var
        const newKanyeQuotes = await fetchKanyeQuotes()
        // Update the KanyeQuotes state arr by appending new values
        setKanyeQuotes(prevKanyeQuotes => [...prevKanyeQuotes, ...newKanyeQuotes])
    }

    // If the AI quotes array has 4 or less values, trigger a refill of it
    // (Not an else if so that both quote arrays are checked and not only one. If Kanye quotes is refilled, it stops)
    if (AIQuotes.length <= 4) {
        // Fetch the AI Quotes as a new var
        const newAIQuotes = await fetchAIQuotes(kanyeQuotes, usedQuotes)
        // Update the AIQuotes state arr by appending new values
        setAIQuotes(prevAIQuotes => [...prevAIQuotes, ...newAIQuotes])
        // Update the UsedQuotes state arr by appending the new values
        setUsedQuotes(prevUsedQuotes => [...prevUsedQuotes, ...newAIQuotes])
    }

} 