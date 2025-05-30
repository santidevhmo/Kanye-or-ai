import './App.css'
import StartScreen from './pages/StartScreen'
import Playing from './pages/Playing.jsx'
import FetchInitialData from './utils/FetchInitialData.js'
import { useEffect, useState } from "react"

function App() {

  const [mainGameState, setmainGameState] = useState("start")

  const [kanyeQuotes, setKanyeQuotes] = useState([])
  const [AIQuotes, setAIQuotes] = useState([])
  const [usedQuotes, setUsedQuotes] = useState([])

  // Trigger the initial data fetching util func that fills the kanyeQuotes and AIQuotes arrays
  useEffect(() => {
    // FetchInitialData(kanyeQuotes, setKanyeQuotes, AIQuotes, setAIQuotes, usedQuotes, setUsedQuotes)
  }, [])

  return (
    <div className='flex h-screen items-center justify-center'>
      
      { mainGameState === "start" ? ( // ---- Render Start Screen ----
        <StartScreen
          setMainGameState={setmainGameState}
          usedQuotesState={usedQuotes}
        />
      ) : mainGameState === "playing" ? ( // ---- Render Playing Screen -----
        <Playing
          kanyeQuotesState={kanyeQuotes}
          AIQuotesState={AIQuotes}
          mainGameState={mainGameState}
        />
      ) : ( // ---- Default render = Start Screen ----
        <h2>Default render</h2>
      )}
    </div>
  )
}

export default App
