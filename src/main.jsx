import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './index.css';
import router from './routes/routes.jsx';
import { PrimeReactProvider } from 'primereact/api';
import Whatsapp from './components/WhatsappContact/Whatsapp.jsx';
import './components/WhatsappContact/Whatsapp.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <div className="relative">
        <div className="tablet-desktop-whatsapp mobile-whatsapp">
          <Whatsapp />
        </div>
      </div>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
