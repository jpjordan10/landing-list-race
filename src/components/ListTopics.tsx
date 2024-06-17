const ListTopics = () => {
  const items = [0, 1, 2, 3, 4];
  return (
    <section id="list-topics" className="">
      <div className="w-full lg:w-10/12 xl:w-9/12 2xl:w-5/12 flex flex-col gap-20 mx-auto py-20 px-16 md:px-16 md:pt-0 lg:p-0 md:z-[1] md:relative md:-top-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((x, index) => (
            <div
              key={`list-topic-${index}`}
              className="group bg-white py-3.5 flex flex-col gap-3.5 items-center justify-center rounded shadow hover:drop-shadow-2xl hover:bg-red-500 duration-500"
            >
              <div className="w-16 h-16 bg-gray-200 group-hover:bg-white rounded-full duration-500"></div>
              <h2 className="text-lg font-medium capitalize group-hover:text-white duration-500">
                Restaurant
              </h2>
              <p className="text-sm text-gray-500 group-hover:text-white duration-500">
                150 listings
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListTopics;
