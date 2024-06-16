import React from 'react';

const stats = [
  { count: "90K+", label: "listings" },
  { count: "40K+", label: "listing categories" },
  { count: "65K+", label: "visitors" },
  { count: "50K+", label: "happy clients" },
];

const Statistics = () => (
  <section id="statistics" className="">
    <div className="flex justify-center mx-auto px-4 py-24 bg-gray-800 text-white 2xl:w-10/12">
      <div className="xl:w-10/12 2xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2 items-center justify-center">
            <div className="text-4xl font-bold">{stat.count}</div>
            <h3 className="text-lg capitalize">{stat.label}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;
