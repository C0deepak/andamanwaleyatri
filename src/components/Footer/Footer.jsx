/* eslint-disable react/jsx-key */
import FooterLogo from '../../assets/logonew.png';
import {
  FaFacebook,
  FaInstagram,
  // FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaLocationArrow,
  FaMobileAlt,
  FaMailBulk,
} from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import NatureVid from '../../assets/video/footer.mp4';
import { Link } from 'react-router-dom';

const FooterLinks1 = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  // {
  //   title: "Blogs",
  //   link: "/blogs",
  // },
];

const FooterLinks2 = [
  {
    title: 'Flights',
    link: '/flights',
  },
  {
    title: 'Cruise',
    link: '/cruise',
  },
  {
    title: 'Packages',
    link: '/packages',
  },
];

const FooterLinks3 = [
  {
    title: 'Best Places',
    link: '/topplaces',
  },
  {
    title: 'Watersports',
    link: '/watersports',
  },
  {
    title: 'Sightseeing',
    link: '/sightseeing',
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img
                  src={FooterLogo}
                  alt=""
                  className="w-full h-28 object-contain"
                />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
                Embark on an Andaman odyssey with Safar Andaman, where
                azure waters meet pristine shores. Immerse in bespoke
                experiences, curated for your wanderlust
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow className="text-red-500" />
                <p>Port Blair, South Andaman, 744101</p>
              </div>
              <div className="flex items-center gap-3 mt-3 ">
                <FaMailBulk className="text-black-500" />
                <p>safarandaman@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-3 ">
                <CgWebsite className="text-sky-500" />
                <p>www.safarandaman.com</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt className="text-gray-500" />
                <p>+91 7908012356, +91 9679597655</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <Link to="#">
                    <FaInstagram className="text-3xl text-purple-800" />
                  </Link>
                  <Link to="#">
                    <FaFacebook className="text-3xl text-blue-800" />
                  </Link>
                  <Link to="#">
                    <FaTwitter className="text-3xl text-sky-500" />
                  </Link>
                  {/* <Link to="#">
                    <FaLinkedin className="text-3xl text-sky-800" />
                  </Link> */}
                  <a href="https://api.whatsapp.com/send?phone=917063948704">
                    <FaWhatsapp className="text-3xl text-green-700" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Basic Info
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks1.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Services Offered
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks2.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Leisure Activities
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks3.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @ 2024 All rights reserved by Safar Andaman
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
