"use client";

import { useState } from "react";

const WelcomeHeroForm = () => {
  const [activity, setactivity] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    activity || location
      ? handleSubmit()
      : alert("Please fill at least activity or location");
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activity, location }),
      });
      const data = await response.json();
      setactivity("");
      setLocation("");

      alert(
        data.data.length
          ? `There're ${data.data.length} records\nLook console.`
          : "No data"
      );
    } catch (error) {
      alert("There's an error trying to search");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateForm();
      }}
      name="search-form"
      className="animate-fadeInDown w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex flex-col lg:flex-row lg:justify-between items-center gap-7 lg:gap-2"
    >
      <div className="w-full lg:w-10/12 bg-transparent md:rounded-md md:bg-white flex flex-col gap-4 md:flex-row">
        <div className="bg-white md:w-1/2 flex flex-col md:gap-2 md:flex-row md:rounded py-5">
          <div className="grid grid-cols-[auto,_minmax(0,_1fr)] gap-2 items-center px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-black"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium capitalize text-gray-800">
              What?
            </h3>
          </div>
          <input
            className="h-10 w-full bg-transparent text-sm text-gray-500 font-medium border-0 px-2"
            type="text"
            name="what"
            id="what-input"
            placeholder="Ex: palce, restaurant, food, automobile"
            value={activity}
            onChange={(e) => setactivity(e.target.value)}
          />
        </div>
        <div className="bg-white md:w-1/2 flex flex-col md:gap-2 md:flex-row py-5">
          <div className="grid grid-cols-[auto,_minmax(0,_1fr)] gap-2 items-center px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-black"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="22" x2="18" y1="12" y2="12" />
                <line x1="6" x2="2" y1="12" y2="12" />
                <line x1="12" x2="12" y1="6" y2="2" />
                <line x1="12" x2="12" y1="22" y2="18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium capitalize text-gray-800">
              Location
            </h3>
          </div>
          <input
            className="h-10 w-full bg-transparent text-sm text-gray-500 font-medium border-0 px-2"
            type="text"
            name="location"
            id="location-input"
            placeholder="Ex: london, newyork, rome"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <button
        className="h-20  w-40  flex justify-center items-center text-sm text-white capitalize rounded p-6 bg-red-500 hover:bg-red-600 transition duration-300 disabled:opacity-55 disabled:cursor-not-allowed disabled:pointer-events-none"
        type="submit"
        disabled={loading}
      >
        Search
      </button>
    </form>
  );
};
export default WelcomeHeroForm;
