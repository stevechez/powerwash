import Link from "next/link";

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown inline-block relative">
        <button>
          <span className="text-gray-600 tracking-wider hover:text-blue-500 hover:underline">
            Services
          </span>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-600 pt-1 z-40 w-[400px]">
          <li>
            <Link
              className="rounded-t bg-gray-200 hover:bg-blue-200 py-2 px-4 block whitespace-no-wrap tracking-wider"
              href="/residential"
            >
              Residential Pressure Washing
            </Link>
          </li>
          <li className="">
            <Link
              className="bg-gray-200 hover:bg-blue-200 py-2 px-4 block whitespace-no-wrap"
              href="/commercial"
            >
              Commercial Pressure Washing
            </Link>
          </li>
          <li className="">
            <Link
              className="rounded-b bg-gray-200 hover:bg-blue-200 py-2 px-4 block whitespace-no-wrap"
              href="/cans"
            >
              Deep-clean garbage/recycle cans
            </Link>
            {/* <Link
              className="rounded-b bg-gray-200 hover:bg-blue-200 py-2 px-4 block whitespace-no-wrap"
              href="/gutters"
            >
              Gutter Cleaning
            </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
