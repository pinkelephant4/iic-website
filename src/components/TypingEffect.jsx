import { useState, useEffect, useRef } from "react";

const TypingEffect = () => {
  const words = ["HACK", "INNOVATE", "BUILD"]; // The words to cycle through
  const [displayedWord, setDisplayedWord] = useState(""); // Word currently being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting the word
  const [loopNum, setLoopNum] = useState(0); // Which word in the array we are on
  const [typingSpeed, setTypingSpeed] = useState(50); // Speed of typing/deleting

  const typingIntervalRef = useRef(null); // Reference to interval for clean-up

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      if (isDeleting) {
        setDisplayedWord(currentWord.substring(0, displayedWord.length - 1));
        setTypingSpeed(50); // Speed up when deleting
      } else {
        setDisplayedWord(currentWord.substring(0, displayedWord.length + 1));
        setTypingSpeed(50); // Normal speed when typing
      }

      if (!isDeleting && displayedWord === currentWord) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedWord === "") {
        // Once fully deleted, move to the next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingIntervalRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingIntervalRef.current); // Clear the interval on cleanup
  }, [displayedWord, isDeleting, loopNum, typingSpeed, words]);
  return <>{displayedWord}</>;
};

export default TypingEffect;
