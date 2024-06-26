const Header = () => (
  <header className="flex w-full text-xs text-gray-400">
    <div className="w-full 2xl:w-10/12 border-b border-gray-200 mx-auto px-4  flex flex-wrap  justify-between sm:gap-4 items-center">
      <div className="flex items-center gap-4">
        <div className="py-4 pr-4 border-r border-gray-200">
          <select className="border-none bg-transparent">
            <option value="default">EN</option>
            <option value="Bangla">BN</option>
            <option value="Arabic">AB</option>
          </select>
        </div>
        <div className="py-4 pr-4 border-r border-gray-200">
          <select className="border-none bg-transparent">
            <option value="usd">USD</option>
            <option value="euro">Euro</option>
            <option value="bdt">BDT</option>
          </select>
        </div>
        <div className="py-4 pr-4 border-r border-gray-200">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="w-4 h-4 border-gray-200"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="py-4 pl-4 border-l border-gray-200">
          +1 222 777 6565
        </span>
        <a href="#" className="py-4 pl-4 border-l border-gray-200">
          Sign In
        </a>
        <a href="#" className="py-4 pl-4 border-l border-gray-200">
          Register
        </a>
      </div>
    </div>
  </header>
);

export default Header;
