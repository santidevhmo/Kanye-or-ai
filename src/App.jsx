import './App.css'
import StartScreen from './pages/StartScreen'
import Playing from './pages/Playing.jsx'
import FetchInitialData from './utils/FetchInitialData.js'
import { useEffect, useState } from "react"

function App() {

  const [mainGameState, setMainGameState] = useState("start")

  const [kanyeQuotes, setKanyeQuotes] = useState([])
  const [AIQuotes, setAIQuotes] = useState([])
  const [usedQuotes, setUsedQuotes] = useState([])

  // Trigger the initial data fetching util func that fills the kanyeQuotes and AIQuotes arrays
  useEffect(() => {
    FetchInitialData(kanyeQuotes, setKanyeQuotes, AIQuotes, setAIQuotes, usedQuotes, setUsedQuotes)
  }, [])

  return (
    <div className="flex h-full justify-center pt-[40%] md:h-screen md:items-center md:pt-0">
      
      { mainGameState === "start" ? ( // ---- Render Start Screen ----
        <StartScreen
          setMainGameState={setMainGameState}
          usedQuotesState={usedQuotes}
        />
      ) : mainGameState === "playing" ? ( // ---- Render Playing Screen -----
        <Playing
          kanyeQuotesArr={kanyeQuotes}
          AIQuotesArr={AIQuotes}
          usedQuotesArr={usedQuotes}
          setMainGameState={setMainGameState}
          setKanyeQuotes={setKanyeQuotes}
          setAIQuotes={setAIQuotes}
          setUsedQuotes={setUsedQuotes}
        />
      ) : ( // ---- Default render = Start Screen ----
        <h2>Default render</h2>
      )}
    </div>
  )
}

export default App
