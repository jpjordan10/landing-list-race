const WelcomeHero = () => (
  <section id="home" className="flex w-full justify-center">
    <div className="w-full relative h-[50rem] z-[1] bg-center bg-cover text-center bg-hero-image 2xl:w-10/12">
      <div className=" absolute -z-[1] w-full h-full  bg-custom-gray" />
      <div className="flex flex-col items-center gap-20 mx-auto px-4 pt-36">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-[2.5rem] xl:text-5xl text-white l font-bold tracking-[2.4px] leading-tight uppercase">
            Best place to find and explore
            <br />
            that all you need
          </h2>
          <p className="text-lg text-white">
            Find Best Place, Restaurant, Hotel, Real State and many more think
            in just One click
          </p>
        </div>
        <div className="w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex flex-col lg:flex-row lg:justify-between items-center gap-7 lg:gap-2">
          <div className="w-full lg:w-10/12 bg-transparent md:rounded-md md:bg-white flex flex-col gap-4 md:flex-row">
            <div className="bg-white md:w-1/2 flex flex-col md:gap-2 md:flex-row md:rounded py-5">
              <div className="grid grid-cols-[auto,_minmax(0,_1fr)] gap-2 items-center px-2">
                <div className="w-4 h-4 bg-slate-200"></div>
                <h3 className="text-lg font-medium capitalize text-gray-800">
                  What?
                </h3>
              </div>
              <input
                className="h-10 w-full bg-transparent text-sm text-gray-500 font-medium border-0 px-2"
                type="text"
                name="what"
                id="what-input"
                placeholder="Ex: palce, resturent, food, automobile"
              />
            </div>
            <div className="bg-white md:w-1/2 flex flex-col md:gap-2 md:flex-row py-5">
              <div className="grid grid-cols-[auto,_minmax(0,_1fr)] gap-2 items-center px-2">
                <div className="w-4 h-4 bg-slate-200"></div>
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
              />
            </div>
          </div>
          <button
            className="h-20  w-40  flex justify-center items-center text-sm text-white capitalize rounded p-6 bg-red-500 hover:bg-red-600 transition duration-300"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeHero;
