import { Link } from "remix";

/** Top Navigation Bar */
const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="/assets/images/logo.png"
        alt="Antonio Maina's Logo"
        className="navbar__logo"
      />

      <ol className="navbar__links">
        <li className="navbar__links__link">
          <Link to={"#about"}>About</Link>
        </li>
        <li className="navbar__links__link">
          <Link to={"#work"}>Work</Link>
        </li>
        <li className="navbar__links__link">
          <Link to={"#projects"}>Projects</Link>
        </li>
        <li className="navbar__links__link">
          <Link to={"#contacts"}>Contact</Link>
        </li>
        <li className="navbar__links__link">
          <Link to={"#blog"}>Blog</Link>
        </li>
      </ol>
      <button className="navbar__links__link navbar__menu-btn">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
