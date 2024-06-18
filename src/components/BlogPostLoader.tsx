const BlogPostLoader = () => {
  return (
    <div className="group bg-white 2xl:max-w-md p-4 rounded duration-500 shadow-md hover:drop-shadow-2xl border border-t cursor-pointer animate-pulse">
      <div className="w-60 h-48 bg-gray-300 rounded mb-4"></div>
      <div className="flex flex-col p-6 gap-5">
        <div className="flex flex-col gap-3">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="flex flex-row justify-between gap-1 mt-4">
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
        <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};
export default BlogPostLoader