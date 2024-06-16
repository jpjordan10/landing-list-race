const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex flex-col gap-10 py-10 md:w-11/12 lg:w-10/12  mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="navbar-header">
              <a className="text-xl font-bold" href="index.html">
                List<span className="text-red-500">Race</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <ul className="flex flex-wrap md:justify-end text-right gap-4 md:gap-5 text-sm uppercase text-slate-400 font-medium">
              <li>
                <a
                  href="#works"
                  className="transition duration-300 hover:text-red-500"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#explore"
                  className="transition duration-300 hover:text-red-500"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="transition duration-300 hover:text-red-500"
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="transition duration-300 hover:text-red-500"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-red-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-red-500"
                >
                  My account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-t-1 text-gray-400"></div>
        <div>
          <div className="flex flex-col  md:flex-row md:justify-between items-center gap-5">
            <div className="w-full md:w-1/2">
              <p className="capitalize text-gray-400 text-sm">
                &copy;Copyright 2023. Designed and developed by ThemeSine
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap md:justify-end items-center gap-4">
                <span className="w-full text-sm sm:w-auto text-gray-400">
                  +1 (222) 777 8888
                </span>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-400 hover:tex-white hover:text-red-500 rounded-full"
                >
                  F
                </a>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-400 hover:tex-white hover:text-red-500 rounded-full"
                >
                  T
                </a>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-400 hover:tex-white hover:text-red-500 rounded-full"
                >
                  L
                </a>
                <a
                  href="#"
                  className="h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-400 hover:tex-white hover:text-red-500 rounded-full"
                >
                  G
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* TODO: ADD GO-TOP */}
        {/* <div id="scroll-Top" className="text-center">
          <div className="return-to-top cursor-pointer bg-red-500 p-2 rounded-full inline-block">
            <i
              className="fa fa-angle-up"
              id="scroll-top"
              aria-hidden="true"
            ></i>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
