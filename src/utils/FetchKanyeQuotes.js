
/* 
------------------------------
Function to receive the KanyeQuotesArray state var and fill it with 10 quotes to use in the game
------------------------------
*/ 

export default async function FetchKanyeQuotes() {

    let kanyeQuotesArray = []

    // 1. Fill the KanyeQuotes array with 10 quotes
    for (let i = 0; i < 5; i++) {
        const res = await fetch("https://api.kanye.rest/")
        const data = await res.json()
        kanyeQuotesArray.push(`${data.quote}`)
    }

    // 2. Return the same array received but now with new values
   return kanyeQuotesArray
}