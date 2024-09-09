import { useState } from 'react';
import Logo from '../../assets/logonew.png';
import { NavLink, Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import ResponsiveMenu from './ResponsiveMenu';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';

// eslint-disable-next-line react-refresh/only-export-components
export const NavbarLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Cruise',
    link: '/cruise',
  },
  // {
  //   name: 'Blogs',
  //   link: '/blogs',
  // },
  {
    name: 'Packages',
    link: '/packages',
  },
  {
    name: 'Flights',
    link: '/flights',
  },
  {
    name: 'Best Places',
    link: '/topplaces',
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const DropdownLinks = [
  {
    name: 'Water Sports',
    link: '/watersports',
  },
  {
    name: 'Sightseeing',
    link: '/sightseeing',
  },
];

// eslint-disable-next-line react/prop-types, no-unused-vars
const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="w-full">
      <nav className="fixed w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="object-contain h-16 md:h-24 w-full" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                {/* <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li> */}
                <li className="py-4">
                  <NavLink to="/flights" activeClassName="active">
                    Flights
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/packages" activeClassName="active">
                    Packages
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/cruise" activeClassName="active">
                    Cruise
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/topplaces" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <NavLink
                    to="/"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Activities{' '}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </NavLink>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <NavLink
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            to={data.link}
                          >
                            {data.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="bg-gradient-to-br from-primary to-secondary hover:underline hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-2 rounded-full"
                to="/contact"
              >
                Contact Us
              </Link>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
