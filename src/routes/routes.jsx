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
    ],
  },
]);

export default router;
