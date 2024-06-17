const exploreItems = [0, 1, 2, 3, 4, 5];

const Explore = () => (
  <section id="explore" className="">
    <div className="w-full flex flex-col items-center gap-20 mx-auto py-24 px-4 bg-gray-100 2xl:w-10/12">
      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-medium uppercase">Explore</h2>
        <p className="text-gray-500">
          Explore New place, food, culture around the world and many more
        </p>
      </div>
      <div className="xl:w-10/12 2xl:w-7/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exploreItems.map((item, index) => (
          <div
            key={`explore-card-${index}`}
            className="group w-full flex flex-col hover:drop-shadow-2xl shadow duration-500"
          >
            <div className="h-52">
              <img src={item.image} alt="explore image" className="rounded-t" />
              <div className="flex flexh-full relative z-10 bottom-0">
                <span className="bg-red-500 text-xs text-white rounded px-2">
                  Best Rated
                </span>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-6 p-6">
              <h2 className="font-medium text-base">
                <a className="capitalize" href="#">
                  How to find your Desired Place more quickly
                </a>
              </h2>
              <div className="text-xs flex flex-row flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-green-500 text-white rounded px-2">
                    5.0
                  </span>
                  <span className="text-gray-500">27 Ratings</span>
                </div>
                <div className="flex gap-2 text-gray-500 px-2">
                  From
                  <span className="text-red-500 rounded">5k$ - 12k$ </span>
                </div>
                <span className="col-auto text-gray-500">Category</span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-[auto,_minmax(0,_1fr)] gap-1 md:gap-4 pb-7 border-b">
                  <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incid ut labore et dolore magna
                    aliqua....
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-2">
                  <span className="w-full md:w-auto capitalize text-xs">
                    Open Now
                  </span>
                  <div className="w-full md:w-auto flex flex-row gap-6">
                    {[1, 2, 3].map((i, n) => (
                      <span
                        key={`card-${index}-${n}`}
                        className="w-4 h-4 bg-slate-200"
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="p-4">
                <h2 className="text-xl font-bold">
                  <a href="#">{item.title}</a>
                </h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Explore;
