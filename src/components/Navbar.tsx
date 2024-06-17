
const Navbar = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <a className="text-2xl font-bold" href="/">
        List<span className="text-red-500">race</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a
            href="#home"
            className="uppercase text-gray-700 transition duration-300 hover:text-red-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="uppercase text-gray-700 transition duration-300 hover:text-red-500"
          >
            How it Works
          </a>
        </li>
        <li>
          <a
            href="#explore"
            className="uppercase text-gray-700 transition duration-300 hover:text-red-500"
          >
            Explore
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className="uppercase text-gray-700 transition duration-300 hover:text-red-500"
          >
            Review
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="uppercase text-gray-700 transition duration-300 hover:text-red-500"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="uppercase text-gray-700 transition duration-300 hover:text-red-500"
          >
            Contact
          </a>
        </li>
      </ul>
      <button className="md:hidden text-gray-700">
        <i className="fa fa-bars"></i>
      </button>
    </div>
  </nav>
);

export default Navbar;
