"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  duration?: number; // Duration in seconds
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  end,
  duration = 1,
  className,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = Math.max(0, end);
    const increment = endValue / (duration * 60); // Increment based on duration

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        setCount(endValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60); // 60 FPS for smoother animation

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};
