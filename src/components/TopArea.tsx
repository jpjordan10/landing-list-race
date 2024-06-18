"use client";
import { NAV_BAR } from "@/utils/navbar.data";
import Link from "next/link";
import { useEffect, useState } from "react";

const TopArea = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center p-4">
        <a className="text-2xl font-bold" href="/">
          List<span className="text-red-500">Race</span>
        </a>
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`w-full md:w-auto flex-col md:flex-row md:flex p-5 gap-10 ${
            isMenuOpen ? "flex" : "hidden"
          } absolute md:relative right-0 top-16 md:top-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          {NAV_BAR.map((item) => (
            <li key={item.href}>
              <Link
                className={`text-sm uppercase transition duration-300 ${
                  currentSection === item.href.slice(1)
                    ? "text-red-500"
                    : "text-slate-400"
                } hover:text-red-500`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopArea;
