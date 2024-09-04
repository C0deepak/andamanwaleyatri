import Flightsearchform from './Flightsearchform';
import FlightHero from '../components/FlightHero/FlightHero';
import '../index.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import img from '../assets/images/vistara.jpg';
import img2 from '../assets/images/jet-airways.png';
import img3 from '../assets/images/akasa-air.png';
import img4 from '../assets/images/indigo.png';
import img5 from '../assets/images/spicejet.png';
import img6 from '../assets/images/air-india.png';
import img7 from '../assets/images/go-air.png';

import flightAttractivePic from '../assets/images/flightAttractivePic.gif';
import emailjs from '@emailjs/browser';
import { Facebook, Instagram, Loader, Twitter } from 'lucide-react';
import { useState } from 'react';

const Flights = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    from: '',
    to: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.from || !formData.to) {
      alert('Must enter name, email, phone and destinations!')
      return;
    }

    const serviceId = 'service_o9bqitg'
    const templateId = 'template_plzpbke'
    const publicKey = '_wTrZthGtB6nxGnxf'

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        alert('Email sent successfully, we will reach out to you soon!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          from: '',
          to: '',
          message: '',
        })
        console.log('SUCCESS!', response.status)
        setLoading(false)
      })
      .catch((error) => {
        console.log('ERROR!', error)
        setLoading(false)
      })
  };

  return (
    <div className="">
      <div className="h-[600px] relative pt-20 bgHero1">
        <img
          src={flightAttractivePic}
          className="absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]"
        />
        <FlightHero />
      </div>

      <div className="hidden lg:block md:block pt-3 mb-10">
        <div className="">
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            direction={'horizontal'}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Keyboard, Navigation, Autoplay]}
            className=""
          >
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <HiArrowLongLeft fill="black" size={30} />
              </div>
              <div className="swiper-button-next slider-arrow">
                <HiArrowLongRight fill="black" size={50} />
              </div>
            </div>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img2} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img3} className="w-60" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img4} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img5} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img6} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img7} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden md:hidden">
        <div className="">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            direction={'horizontal'}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Keyboard, Navigation, Autoplay]}
            className=""
          >
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <HiArrowLongLeft fill="black" size={80} />
              </div>
              <div className="swiper-button-next slider-arrow">
                <HiArrowLongRight fill="black" size={100} />
              </div>
            </div>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img2} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img3} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img4} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img5} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img6} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img7} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div className="flex items-center justify-center mx-auto w-full mb-14">
        <Flightsearchform />
      </div> */}
      <div className="my-12 grid sm:grid-cols-2 items-center gap-16 p-8 mx-6 sm:mx-16 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333]">
        <div>
          <h1 className="text-3xl font-extrabold">Flight Details Form</h1>
          <p className="text-sm text-gray-400 mt-3">Have some flights booking, simply fill a form to get all the details.</p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000" />
                  </svg>
                </div>
                <a  rel='noreferrer' target="_blank" href="mailto:safarandaman@gmail.com" className="text-[#007bff] text-sm ml-3">
                  <small className="block">Mail</small>
                  <strong>safarandaman@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-sky-600">
                <a href="javascript:void(0)">
                  <Facebook size={18}/>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-sky-600">
                <a href="https://www.instagram.com/safarandaman/" target='_blank' rel='noreferrer'>
                  <Instagram size={18}/>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-sky-600">
                <a href="https://x.com/safarandaman" target='_blank' rel='noreferrer'>
                  <Twitter size={18}/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            <input type='text'
              id="name"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
            <input type='email'
              id="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <input type='tel'
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Your Phone"
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
            <input type='text'
              id="subject"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <input type='text'
              id="from"
              name="from"
              value={formData.from}
              placeholder="From"
              onChange={(e) => handleChange('from', e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
            <input type='text'
              id="to"
              name="to"
              value={formData.to}
              placeholder="To"
              onChange={(e) => handleChange('to', e.target.value)}
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
          </div>

          <textarea rows="6"
            id="message"
            name="message"
            value={formData.message}
            placeholder="message"
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
          <button type='submit'
            disabled={loading}
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full flex items-center gap-2 justify-center">
            {loading && <span className='animate-spin '><Loader /></span>}
            Send
          </button>
        </form>
      </div>
      <div className="flex-col items-center justify-center mx-auto w-3/4 mb-14">
        <p className="font-bold text-3xl text-left w-full">Note below:</p>
        <p className="w-full text-base md:text-base font-bold text-center pt-2 pb-4">
          "This is the best place from where you are gonna get the best and
          cheapest flights of your need."
        </p>
        <p className="w-full text-base md:text-lg font-normal text-center pt-2">
          "As soon as you fill up the form, the Safar Andaman&apos;s Team
          will reach out to you very soon with an email, whatsapp msg or a call
          for further enquiry of your flight requirements."
        </p>
      </div>
    </div>
  );
};

export default Flights;
