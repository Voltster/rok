import { Link, NavLink } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
import logo from "../../assets/mhjlogo.svg";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/oncology", label: "Oncology" },
  { path: "/products", label: "Products" },
  { path: "/technology", label: "Technology" },
  { path: "/globalPresence", label: "Global Presence" },
];

const Navbar = () => {
  return (
    <header className="w-full px-20 py-2 fixed z-[40] shadow-sm bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" exact className="text-xl font-bold">
          <img src={logo} alt="MJH Pharma logo" width={85} />
        </Link>
        <nav className="stroke">
          <ul className="flex space-x-4 md:space-x-8 ">
            {" "}
            {links.map((link) => (
              <li key={link.path} className="inline-block">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xl block relative navLink hover:text-[#911515] ${
                      isActive && "text-[#911515]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <SecondaryButton to="/contact">Contact</SecondaryButton>
      </div>
    </header>
  );
};

export default Navbar;
