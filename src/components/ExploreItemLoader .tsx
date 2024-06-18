const ExploreItemLoader = () => {
    return (
      <div className="group w-full flex flex-col hover:drop-shadow-2xl shadow duration-500 animate-pulse">
        <div className="h-52 relative bg-gray-300 rounded-t"></div>
        <div className="bg-white flex flex-col gap-6 p-6">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="text-xs flex flex-row flex-wrap gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-[auto,_minmax(0,_1fr)] gap-1 md:gap-4 pb-7 border-b">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <div className="h-4 bg-gray-300 rounded w-24"></div>
              <div className="w-full md:w-auto flex flex-row gap-6">
                {[...Array(3)].map((_, n) => (
                  <div key={n} className="w-4 h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExploreItemLoader;