import { createHashRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Packages from '../pages/Packages';
import Blogs from '../pages/Blogs';
import BlogsDetails from '../pages/BlogsDetails';
import Topplaces from '../pages/Topplaces';
import About from '../pages/About';
import Watersports from '../pages/Watersports';
import Sightseeing from '../pages/Sightseeing';
import Flights from '../pages/Flights';
import Contact from '../pages/Contact';
import NoPage from '../pages/NoPage';
import Cruise from '../pages/Cruise';
import TourOperator from '../pages/TourOperator';
import CarRental from '../pages/CarRental';
import HotelBooking from '../pages/HotelBooking';
import AirTicketing from '../pages/AirTicketing';
import CruiseFerryBooking from '../pages/CruiseFerryBooking';
import ScubaDiving from '../pages/ScubaDiving';
import SeaWalking from '../pages/SeaWalking';
import Snorkeling from '../pages/Snorkeling';
import Kayaking from '../pages/Kayaking';
import Parasailing from '../pages/Parasailing';
import AndamanDolphin from '../pages/AndamanDolphin';
import JetSkiRide from '../pages/JetSkiRide';
import GlassBottomRide from '../pages/GlassBottomRide';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/packages',
        element: <Packages />,
      },
      {
        path: '/topplaces',
        element: <Topplaces />,
      },
      {
        path: '/watersports',
        element: <Watersports />,
      },
      {
        path: '/sightseeing',
        element: <Sightseeing />,
      },
      {
        path: '/flights',
        element: <Flights />,
      },
      {
        path: '/cruise',
        element: <Cruise />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:id',
        element: <BlogsDetails />,
      },
      {
        path: '/touroperator',
        element: <TourOperator />,
      },
      {
        path: '/carrental',
        element: <CarRental />,
      },
      {
        path: '/hotelbooking',
        element: <HotelBooking />,
      },
      {
        path: '/airticketing',
        element: <AirTicketing />,
      },
      {
        path: '/cruiseferrybooking',
        element: <CruiseFerryBooking />,
      },
      {
        path: '/scubadiving',
        element: <ScubaDiving />,
      },
      {
        path: '/seawalking',
        element: <SeaWalking />,
      },
      {
        path: '/snorkeling',
        element: <Snorkeling />,
      },
      {
        path: '/kayaking',
        element: <Kayaking />,
      },
      {
        path: '/parasailing',
        element: <Parasailing />,
      },
      {
        path: '/andamandolphin',
        element: <AndamanDolphin />,
      },
      {
        path: '/jetskiride',
        element: <JetSkiRide />,
      },
      {
        path: '/glassbottomride',
        element: <GlassBottomRide />,
      },
    ],
  },
]);

export default router;
