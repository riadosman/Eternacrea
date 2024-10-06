"use client";
import { useEffect, useRef } from "react";

export default function MatrixRainWithContent() {
  // Reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    // Function to draw the matrix effect
    const drawMatrix = () => {
      // Create a translucent black background (higher opacity for the content)
      ctx.fillStyle = "rgba(14, 12, 103,0.2)";
      // ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the color for the numbers and font style (with lower opacity)
      ctx.fillStyle = "rgba(251, 1, 220,0.5)";
      // ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
      ctx.font = `${fontSize}px monospace`;

      // Loop through each column and draw random numbers
      drops.forEach((y, i) => {
        const text = Math.floor(Math.random() * 10).toString();
        ctx.fillText(text, i * fontSize, y * fontSize);
        drops[i] =
          y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    // Run the drawMatrix function repeatedly
    const interval = setInterval(drawMatrix, 50);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Canvas for the Matrix rain effect */}
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      />
    </>
  );
}
