import './App.css'
import StartScreen from './pages/StartScreen'
import Playing from './pages/Playing.jsx'
import FetchKanyeQuotes from './services/FetchKanyeQuotes'
import FetchAIQuotes from './services/FetchAIQuotes'
import { useEffect, useState } from "react"

function App() {

  const [gameState, setGameState] = useState("start")
  const [kanyeQuotes, setKanyeQuotes] = useState([])
  const [AIQuotes, setAIQuotes] = useState([])
  const [usedQuotes, setUsedQuotes] = useState([])

  // useEffect(() => {
  //   // (Declared as a function so that we can use await inside useEffect)
  //   const fetchInitialData = async () => {
  //     // 1. Fetch the kanye quotes and update state value
  //     // (Logic not written directly inside setKanyeQuotes because setter functions are asynchronous)
  //     const fetchedKanyeQuotes = await FetchKanyeQuotes()
  //     console.log("NEW KANYE QUOTES STATE VALUE = ", fetchedKanyeQuotes)
  //     setKanyeQuotes(fetchedKanyeQuotes)
  //     // 2. Fetch the AI quotes and update its state var as well as the fetched AI quotes state var
  //     const fetchedAIQuotes = await FetchAIQuotes(kanyeQuotes, usedQuotes)
  //     console.log("NEW FETCHED QUOTES STATE VALUE = ", fetchedAIQuotes)
  //     console.log("NEW USED QUOTES STATE VALUE = ", [...usedQuotes, ...fetchedAIQuotes])
  //     setAIQuotes(fetchedAIQuotes)
  //     // (Using spread operator to append 2 arrays: current values + newly fetched AI quotes)
  //     setUsedQuotes(prev => [...prev, ...fetchedAIQuotes])
  //   }

  //   fetchInitialData()
  // }, [])

  return (
    <div className='flex h-screen items-center justify-center'>
      { gameState === "start" ? (
        <StartScreen changeGameState={setGameState} />
      ) : (
        <Playing />
      )}
    </div>
  )
}

export default App