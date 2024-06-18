"use client"

import { useEffect, useState } from 'react';

export interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  start: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix, start  }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startValue  = 0;
    const increment = end / (duration / 10);
    
    const timer = setInterval(() => {
        startValue  += increment;
      if (startValue  >= end) {
        clearInterval(timer);
        startValue  = end;
      }
      setCount(Math.floor(startValue ));
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return <span>{count}{suffix}</span>;
};

export default Counter;