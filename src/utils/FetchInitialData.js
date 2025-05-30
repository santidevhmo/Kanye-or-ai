import FetchAIQuotes from "./FetchAIQuotes"
import FetchKanyeQuotes from "./FetchKanyeQuotes"

export default async function FetchInitialData(kanyeQuotes, setKanyeQuotes, AIQuotes, setAIQuotes, usedQuotes, setUsedQuotes) {
      // 1. Fetch the kanye quotes and update state value
      // (Logic not written directly inside setKanyeQuotes because setter functions are asynchronous)
      const fetchedKanyeQuotes = await FetchKanyeQuotes()
      console.log("NEW KANYE QUOTES STATE VALUE = ", fetchedKanyeQuotes)
      setKanyeQuotes(fetchedKanyeQuotes)
      // 2. Fetch the AI quotes and update its state var as well as the fetched AI quotes state var
      const fetchedAIQuotes = await FetchAIQuotes(kanyeQuotes, usedQuotes)
      console.log("NEW FETCHED QUOTES STATE VALUE = ", fetchedAIQuotes)
      console.log("NEW USED QUOTES STATE VALUE = ", [...usedQuotes, ...fetchedAIQuotes])
      setAIQuotes(fetchedAIQuotes)
      // (Using spread operator to append 2 arrays: current values + newly fetched AI quotes)
      setUsedQuotes(prev => [...prev, ...fetchedAIQuotes])
}