import FetchKanyeQuotes from "./FetchKanyeQuotes"
import FetchAIQuotes from "./FetchAIQuotes"

export default async function RefillChecker(kanyeQuotes, AIQuotes, usedQuotes, setKanyeQuotes, setAIQuotes, setUsedQuotes) {
    // If the Kanye Quotes state array has 4 or less values, trigger a refill of it
    // (4 or less due to the array starting at 20 and quotes deleted when displayed)
    if (kanyeQuotes.length <= 4) {
        // Fetch the KanyeQuotes as a new var
        // const newKanyeQuotes = ["The thought police want to suppress freedom of thought", "All the musicians will be free"]
        const newKanyeQuotes = await FetchKanyeQuotes()
        // Update the KanyeQuotes state arr by appending new values
        // kanyeQuotes = [...kanyeQuotes, ...newKanyeQuotes]
        setKanyeQuotes(prevKanyeQuotes => [...prevKanyeQuotes, ...newKanyeQuotes])
    }

    // If the AI quotes array has 4 or less values, trigger a refill of it
    // (Not an else if so that both quote arrays are checked and not only one. If Kanye quotes is refilled, it stops)
    if (AIQuotes.length <= 4) {
        // Fetch the AI Quotes as a new var
        // const newAIQuotes = ["This whole life thing? A beautiful, messy remix", "The future is already here; it's just unevenly distributed, you feel me?"]
        const newAIQuotes = await FetchAIQuotes(kanyeQuotes, usedQuotes)
        // Update the AIQuotes state arr by appending new values
        setAIQuotes(prevAIQuotes => [...prevAIQuotes, ...newAIQuotes])
        // AIQuotes = [...AIQuotes, ...newAIQuotes]
        // Update the UsedQuotes state arr by appending the new values
        setUsedQuotes(prevUsedQuotes => [...prevUsedQuotes, ...newAIQuotes])
    }

} 