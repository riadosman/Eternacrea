"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Typing() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    " مرحبًا بك! في موقعنا الإلكتروني   \n    ابدأ الآن بنقل تواجدك الواقعي إلى تواجد رقمي مع شركة الابدية للابداع الابدي و الابتكار الخالد",
  ]; // Your messages
  const speed = 100; // Typing speed in milliseconds
  const pauseDuration = 10000; // Pause between messages

  useEffect(() => {
    if (index < messages[messageIndex].length) {
      const timeout = setTimeout(() => {
        setText(text + messages[messageIndex][index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Pause before moving to the next message
      const pauseTimeout = setTimeout(() => {
        setIndex(0);
        setText("");
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, pauseDuration);

      return () => clearTimeout(pauseTimeout);
    }
  }, [index, text, messageIndex, messages]);
  const splitText = text.split("\n");
  return (
    <div className="text-white container flex items-center justify-center flex-col w-full min-h-[90vh]">
      <h1 className="lg:text-7xl text-5xl font-bold mb-5 lg:leading-relaxed leading-normal">
        {splitText[0]}
      </h1>
      {splitText[1] && (
        <p className="text-xl mt-8 mb-10 font-bold leading-relaxed">
          {splitText[1]}
        </p>
      )}
      <Link
        href="/web-design"
        className="bg-pink mx-auto text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300 mt-6"
      >
        هيا نبدء الان
      </Link>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1px;
          background-color: white;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
