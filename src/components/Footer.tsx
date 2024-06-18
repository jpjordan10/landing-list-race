import { NAV_BAR } from "@/utils/navbar.data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex flex-col gap-10 py-10 md:w-11/12 2xl:w-6/12  mx-auto px-4">
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
              {NAV_BAR.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm uppercase transition hover:text-red-500 duration-300"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
      </div>
    </footer>
  );
};

export default Footer;
