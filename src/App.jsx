import './App.css'
import StartScreen from './pages/StartScreen'
import FetchKanyeQuotes from './services/FetchKanyeQuotes'
import FetchAIQuotes from './services/FetchAIQuotes'
import { useEffect, useState } from "react"


function App() {

  const [kanyeQuotes, setKanyeQuotes] = useState([])
  const [AIQuotes, setAIQuotes] = useState([])
  const [usedQuotes, setUsedQuotes] = useState([])

  useEffect(() => {
    const fetchInitialData = async () => {
      setKanyeQuotes(await FetchKanyeQuotes())
      setAIQuotes(await FetchAIQuotes(kanyeQuotes, usedQuotes))
      console.log("KANYE QUOTES = ", kanyeQuotes)
      console.log("------------------")
      console.log("AI QUOTES = ", AIQuotes)
      console.log("------------------")
      console.log("USED QUOTES = ", usedQuotes)
    }

    fetchInitialData()
  }, [])

  // const [kanyeQuotesArray, setKanyeQuotesArray] = useState()

  return (
    <div className='flex h-screen items-center justify-center'>
      <StartScreen />
    </div>
  )
}

export default App