import { useState, useEffect } from "react";
import "../styles/Loading.css";

const Loading = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Trigger image animation after text animation completes
    const timer = setTimeout(() => {
      setShowImage(true);
    },2000); // Adjust timing based on your typing animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {!showImage ? (
        <h1 className="typing-animation">International Innovation Challenge 2024</h1>
      ) : (
        <img
          src="/assets/iic logo bg removed 2.png"
          alt="Logo"
          className="fade-in-image"
        />
      )}
    </div>
  );
};

export default Loading;
