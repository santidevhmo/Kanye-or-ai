// import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";
import CraftPrompt from "./CraftPrompt.js";
import FetchKanyeQuotes from "./FetchKanyeQuotes.js";

// ------ TESTING LOCALLY ------
// dotenv.config({ path: "../../.env"});

// Params necessary and only used for passing and running the function to craft the prompt:
export default async function FetchAIQuotes(kanyeQuotesArray, usedQuotesArray) {

    // Create new client instance of the Hugging Face Inference API
    // ---- PRODUCTION VITE CODE LINE ------ (import.meta.env not supported on Node JS)
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    // ---- NODE JS LOCAL TESTING CODE LINE ------
    // const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

    // Array var that stores and at the end returns the generated AI Quotes
    const AIQuotesArray = []
    // Craft the Prompt and store it in a var for using as message below
    const prompt = await CraftPrompt(kanyeQuotesArray, usedQuotesArray);

    // Prompt call to return 10 quotes (10 calls = Exceeds short term rate limit).
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: `${prompt} `,
    });

    // Appending the generated AI quote to the array that is the func return value
    AIQuotesArray.push(response.text)
    // Creating the results array by separating each quote as a single string element
    const resultAIQuotes = AIQuotesArray[0].split("_")
    // Returning the new AI Quotes Array
    return resultAIQuotes
}

// ------ TESTING LOCALLY ------
// const exKanyeArr = [
//   'We have to evolve',
//   'Two years ago we had 50 million people subscribed to music streaming services around the world. Today we have 400 million.',
//   "If I don't scream, if I don't say something then no one's going to say anything.",
//   'We have to evolve',
//   'I want the world to be better! All I want is positive! All I want is dopeness!',
//   "I love sleep; it's my favorite.",
//   'I wish I had a friend like me',
//   'The world is our family',
//   'We used to diss Michael Jackson the media made us call him crazy ... then they killed him',
//   "I'm nice at ping pong"
// ]

// const exUsedQuotesArr = []

// const resultArr = await FetchAIQuotes(exKanyeArr, exUsedQuotesArr)
// console.log(resultArr)