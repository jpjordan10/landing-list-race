const ReviewItemLoader = () => {
  return (
    <div className="m-4 p-6 bg-white shadow-md transition-shadow hover:shadow-lg animate-pulse">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-col ml-3">
            <div className="w-24 h-4 bg-gray-300 mb-2"></div>
            <div className="w-16 h-3 bg-gray-300"></div>
          </div>
        </div>
        <div className="w-full h-3 bg-gray-300 mt-4"></div>
        <div className="w-full h-3 bg-gray-300"></div>
        <div className="w-3/4 h-3 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default ReviewItemLoader;
