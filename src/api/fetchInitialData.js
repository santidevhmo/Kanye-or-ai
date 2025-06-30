import fetchAIQuotes from "/src/api/fetchAIQuotes.js"
import fetchKanyeQuotes from "/src/api/fetchKanyeQuotes.js"

export default async function fetchInitialData(kanyeQuotes, setKanyeQuotes, AIQuotes, setAIQuotes, usedQuotes, setUsedQuotes) {
      try {
            // 1. Fetch the kanye quotes and update state value
            // (Logic not written directly inside setKanyeQuotes because setter functions are asynchronous)
            const fetchedKanyeQuotes = await fetchKanyeQuotes()
            setKanyeQuotes(fetchedKanyeQuotes)
            // 2. Fetch the AI quotes and update its state var as well as the fetched AI quotes state var
            const fetchedAIQuotes = await fetchAIQuotes(kanyeQuotes, usedQuotes)
            setAIQuotes(fetchedAIQuotes)
            // (Using spread operator to append 2 arrays: current values + newly fetched AI quotes)
            setUsedQuotes(prev => [...prev, ...fetchedAIQuotes])

      } catch (error) {
            console.error("Network error while fetching initial data:", error)
      }
}