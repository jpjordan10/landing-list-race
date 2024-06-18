"use client";
import { ExploreItem } from "@/domain";
import { useEffect, useState } from "react";
import ExploreItemLoader from "./ExploreItemLoader ";

const Explore = () => {
  const [exploreItems, setExploreItems] = useState<ExploreItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExploreItems = async () => {
      const response = await fetch("/api/explore");
      const data = await response.json();
      setExploreItems(data);
      setLoading(false);
    };
    fetchExploreItems();
  }, []);

  return (
    <section id="explore" className="">
      <div className="w-full flex flex-col items-center gap-20 mx-auto py-24 px-4 bg-gray-100 2xl:w-10/12">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-2xl font-medium uppercase">Explore</h2>
          <p className="text-gray-500">
            Explore New place, food, culture around the world and many more
          </p>
        </div>
        {loading ? (
          <div className="xl:w-10/12 2xl:w-7/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <ExploreItemLoader key={index} />
            ))}
          </div>
        ) : (
          <div className="xl:w-10/12 2xl:w-7/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreItems.map((item) => (
              <div
                key={`explore-card-${item.id}`}
                className="group w-full flex flex-col hover:drop-shadow-2xl shadow duration-500"
              >
                <div className="group h-52 relative">
                  <img
                    src={item.image}
                    alt="explore image"
                    className="w-full h-full object-cover rounded-t"
                  />
                </div>
                <div className="bg-white flex flex-col gap-6 p-6">
                  <h2 className="font-medium text-base">
                    <a className="capitalize" href="#">
                      {item.title}
                    </a>
                  </h2>
                  <div className="text-xs flex flex-row flex-wrap gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="bg-green-500 text-white rounded px-2">
                        {item.rating}
                      </span>
                      <span className="text-gray-500">
                        {item.totalRating} Ratings
                      </span>
                    </div>
                    <div className="flex gap-2 text-gray-500 px-2">
                      From
                      <span className="text-red-500 rounded">{item.range}</span>
                    </div>
                    <span className="col-auto text-gray-500">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-[auto,_minmax(0,_1fr)] gap-1 md:gap-4 pb-7 border-b">
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full bg-slate-100"
                      />
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between gap-2">
                      <span
                        className={`w-full md:w-auto capitalize text-xs ${
                          item.open ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {item.open ? "Open" : "Closed"} Now
                      </span>
                      <div className="w-full md:w-auto flex flex-row gap-6">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" x2="12" y1="3" y2="15" />
                          </svg>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Explore;
