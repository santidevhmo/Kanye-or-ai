import FetchKanyeQuotes from "./FetchKanyeQuotes"
import FetchAIQuotes from "./FetchAIQuotes"

export default async function RefillChecker(kanyeQuotes, AIQuotes, usedQuotes, setKanyeQuotes, setAIQuotes, setUsedQuotes) {

    // If the Kanye Quotes state array has 4 or less values, trigger a refill of it
    // (4 or less due to the array starting at 20 and quotes deleted when displayed)
    if (kanyeQuotes.length <= 4) {
        console.log("-----------")
        console.log("REFILLING KANYE QUOTES")
        console.log("Prev kanye quotes arr = ", kanyeQuotes)
        // Fetch the KanyeQuotes as a new var
        const newKanyeQuotes = ["The thought police want to suppress freedom of thought", "All the musicians will be free"]
        // const newKanyeQuotes = FetchKanyeQuotes()
        // Update the KanyeQuotes state arr by appending new values
        setKanyeQuotes(prevKanyeQuotes => [...prevKanyeQuotes, ...newKanyeQuotes])

    // If the AI quotes array has 4 or less values, trigger a refill of it
    } else if (AIQuotes.length <= 4) {
        console.log("-----------")
        console.log("REFILLING AI QUOTES")
        // Fetch the AI Quotes as a new var
        const newAIQuotes = ["This whole life thing? A beautiful, messy remix", "The future is already here; it's just unevenly distributed, you feel me?"]
        // const newAIQuotes = FetchAIQuotes(kanyeQuotes, usedQuotes)
        // Update the AIQuotes state arr by appending new values
        setAIQuotes(prevAIQuotes => [...prevAIQuotes, ...newAIQuotes])
        // Update the UsedQuotes state arr by appending the new values
        setUsedQuotes(prevUsedQuotes => [...prevUsedQuotes, ...newAIQuotes])
    }

} 