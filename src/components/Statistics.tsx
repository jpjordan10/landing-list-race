"use client";

import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";

const stats = [
  { count: 90, suffix: "K+", label: "listings" },
  { count: 40, suffix: "K+", label: "listing categories" },
  { count: 65, suffix: "K+", label: "visitors" },
  { count: 50, suffix: "K+", label: "happy clients" },
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statisticsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, []);
  return (
    <section
      id="statistics"
      ref={statisticsRef}
      className="relative flex items-center bg-statics-image bg-no-repeat bg-fixed bg-center bg-cover py-32"
    >
      <div className="absolute bg-[rgba(75,75,75,0.6)] h-full w-full top-0 left-0"></div>
      <div className="relative flex justify-center mx-auto  text-white 2xl:w-10/12">
        <div className="xl:w-10/12 2xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <div className="text-6xl font-bold">
                <Counter
                  end={stat.count}
                  duration={3000}
                  suffix={stat.suffix}
                  start={isVisible}
                />
              </div>
              <h3 className="text-2xl capitalize">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
