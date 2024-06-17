const Works = () => {
  const items = [1, 2, 3];
  return (
    <section id="works" className="pb-20">
      <div className="w-full lg:w-11/12 2xl:w-6/12 flex flex-col items-center gap-20 mx-auto px-4">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-2xl font-medium uppercase">How it Works</h2>
          <p className="text-gray-500">Learn More about how our website works</p>
        </div>
        <div className="xl:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((x, index) => (
            <div
              key={`work-item-${index}`}
              className="group bg-white flex flex-col items-center gap-6 px-6 py-12 rounded shadow-lg text-center hover:bg-red-500 duration-500"
            >
              <div className="w-20 h-20 bg-gray-200 group-hover:bg-white rounded-full duration-500"></div>
              <h2 className="text-lg font-medium capitalize group-hover:text-white duration-500">Choose What to Do</h2>
              <p className="text-sm text-gray-500 group-hover:text-white duration-500">
                Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
                eiusmod tempor incididunt ut labore magna aliqua.
              </p>
              <button className="text-xs bg-transparent text-gray-500 border border-gray-400 py-2 px-4 bg-red-500 rounded group-hover:bg-white group-hover:text-red-500 duration-500">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Works;
