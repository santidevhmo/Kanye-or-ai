
export default function CraftPrompt(kanyeQuotesArray, quotesUsedArray) {

    const formattedKanyeArr = `- ${kanyeQuotesArray.join('\n- ')}`;

    const prompt = `
        You are a creative quote generator.  
        You will be given 10 example quotes and a list of previously generated quotes.  
        Your task is to generate **10 original quotes** that reflect the tone, structure, and spontaneity of the example quotes.  
        Avoid writing quotes that feel like structured stories or have clear beginnings and endings—think fragments, mantras, unexpected insights, or raw thoughts.

        All 10 quotes must:
        - Vary significantly in length (some should be short like “We will be recognized”, others longer like “So many of us need so much less than we have especially when so many of us are in need”)
        - Be stylistically aligned with the example quotes (more stream-of-consciousness, less polished storytelling)
        - Be **different** in idea, metaphor, and phrasing from the previously generated quotes
        - Be unique from each other

        Style Profile to follow:
        {
        "style_profile": {
            "tone": [
            "bold",
            "introspective",
            "provocative",
            "visionary",
            "humorous",
            "philosophical",
            "controversial",
            "stream-of-consciousness"
            ],
            "voice": {
            "person": "first",
            "perspective": "subjective",
            "tense": "present or reflective past"
            },
            "sentence_structure": {
            "length": "randomly vary between very short, short, and short-to-medium",
            "complexity": "simple to moderately complex",
            "punctuation": "casual use of ellipses, all caps, or no punctuation for effect — avoid ending quotes with a period",
            "syntax": "spoken-word flow with fragmented thoughts, emphasis on rhythm, and minimal structure"
            },
            "lexical_features": {
            "language_register": "informal",
            "slang": true,
            "idiomatic_expressions": true,
            "hashtag or slogan-like": true,
            "use_of_repetition": true,
            "pop_culture_references": true,
            "religious_references": true
            },
            "themes": [
            "self-confidence and genius",
            "cultural commentary",
            "spirituality and God",
            "technology and futurism",
            "freedom of thought and expression",
            "materialism vs purpose",
            "celebrity and identity",
            "love, empathy, and healing",
            "mental health and personal struggle",
            "critique of societal systems"
            ],
            "intent": [
            "to inspire",
            "to provoke",
            "to entertain",
            "to challenge norms",
            "to self-express",
            "to elevate consciousness"
            ],
            "persona_traits": {
            "archetypes": [
                "the Rebel",
                "the Visionary",
                "the Prophet",
                "the Joker",
                "the Philosopher",
                "the Disrupter",
                "the Genius"
            ],
            "self-image": [
                "messianic",
                "trailblazer",
                "misunderstood artist",
                "spiritual warrior"
            ]
            },
            "format_patterns": {
            "quote_types": [
                "declarative wisdom",
                "shock-value statements",
                "stream-of-consciousness",
                "one-liner insights",
                "satirical confessions",
                "calls to action"
            ],
            "use_of_all_caps": false,
            "use_of_special_characters": "occasionally (e.g., #, %, $)",
            "quote_closers": [
                "punchlines",
                "metaphors",
                "unexpected twists"
            ]
            }
        }
        }

        Example Quotes:  
         ${formattedKanyeArr}

        Quotes already used:  
         ${quotesUsedArray}

        Instruction:  
        Generate **10 new quotes**.  
        Each quote must:  
        - Match the tone and spontaneity of the example quotes  
        - Randomize the sentence lengths (from short fragments to medium rambles)  
        - Avoid structured storytelling—no setups and punchlines  
        - Be distinct from all other newly generated quotes  
        - Not reuse or resemble any ideas, metaphors, or phrases from the previously generated quotes  

        Return the 10 quotes as a single string separated by the symbol “_”. 
        Do not include quotation marks around the quotes.
        Do NOT include a new line break at the end of each quote.
        Only return the quotes.`

    return prompt
}

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

// const formattedKanyeArr = `- ${exKanyeArr.join('\n- ')}`;
// const exAiArr = []

// console.log(CraftPrompt(formattedKanyeArr, exAiArr))