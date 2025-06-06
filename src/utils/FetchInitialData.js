import FetchAIQuotes from "./FetchAIQuotes"
import FetchKanyeQuotes from "./FetchKanyeQuotes"

export default async function FetchInitialData(kanyeQuotes, setKanyeQuotes, AIQuotes, setAIQuotes, usedQuotes, setUsedQuotes) {
      // 1. Fetch the kanye quotes and update state value
      // (Logic not written directly inside setKanyeQuotes because setter functions are asynchronous)
      const fetchedKanyeQuotes = await FetchKanyeQuotes()
      setKanyeQuotes(fetchedKanyeQuotes)
      // 2. Fetch the AI quotes and update its state var as well as the fetched AI quotes state var
      const fetchedAIQuotes = await FetchAIQuotes(kanyeQuotes, usedQuotes)
      setAIQuotes(fetchedAIQuotes)
      // (Using spread operator to append 2 arrays: current values + newly fetched AI quotes)
      setUsedQuotes(prev => [...prev, ...fetchedAIQuotes])
}