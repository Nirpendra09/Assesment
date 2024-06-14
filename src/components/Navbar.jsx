import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="bg-blue-500 text-white p-6 flex justify-between items-center 
                 fixed top-0 left-0 w-full z-10" // Added fixed positioning
    >
      <h1 className="font-bold text-xl">My App </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => {
                return isActive
                  ? "underline text-gray-100"
                  : "hover:text-gray-300 transition duration-300";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => {
                return isActive
                  ? "underline text-gray-100"
                  : "hover:text-gray-300 transition duration-300";
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) => {
                return isActive
                  ? "underline text-gray-100"
                  : "hover:text-gray-300 transition duration-300";
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nothing-here"
              className={({ isActive, isPending }) => {
                return isActive
                  ? "underline text-gray-100"
                  : "hover:text-gray-300 transition duration-300";
              }}
            >
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
