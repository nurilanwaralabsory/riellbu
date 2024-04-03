import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">RiellBu</div>
      <ul className="nav-links">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/characters"}>Characters</NavLink>
        </li>
        <li>
          <NavLink to={"/genre-anime"}>Genre Anime</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
