// import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";
import CraftPrompt from "./CraftPrompt.js";
import FetchKanyeQuotes from "./FetchKanyeQuotes.js";

// dotenv.config({ path: "../../.env"});

// Params necessary and only used for passing and running the function to craft the prompt:
export default async function FetchAIQuotes(kanyeQuotesArray, usedQuotesArray) {

    // Create new client instance of the Hugging Face Inference API
    // ---- PRODUCTION VITE CODE LINE ------ (import.meta.env not supported on Node JS)
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    // ---- NODE JS TESTING CODE LINE ------
    // const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

    // Array var that stores and at the end returns the generated AI Quotes
    const AIQuotesArray = []
    // Craft the Prompt and store it in a var for using as message below
    const prompt = await CraftPrompt(kanyeQuotesArray, usedQuotesArray);

    // 1 prompt call to return 10 quotes (10 calls = Exceeds short term rate limit).
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: `${prompt} `,
    });

    // Appending the generated AI quote to the array that is the func return value
    AIQuotesArray.push(response.text)

    // Adding the quotes to the state var of quotes already used for future prompt quote generating to not repeat the same quotes
    usedQuotesArray.push(...AIQuotesArray)

    // Returning the new AI Quotes Array
    return AIQuotesArray
}
