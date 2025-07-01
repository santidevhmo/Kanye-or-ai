"use client";

import React from "react";
import { motion } from "framer-motion";

// Typescript to declare a default value to the prop ("Typing effect") & the prop type
export function TypingEffect(
  { text = "Typing Effect" }: 
  { text: string }
) {
  return (
    <>
      <p>
        {/* Turn the string into an array of characters to then trigger the animation to each letter */}
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.02, delay: index * 0.02 }}
            // duration = how long the animation takes for each individual element
            // delay = controls when each animation starts relative to the start of the component rendering.
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </>
  );
}
