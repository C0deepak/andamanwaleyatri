import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { Dropdown } from 'primereact/dropdown';

const Flightsearchform = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const choices = [
    {
      choice: 'One Way',
      value: 'OW',
    },
    { choice: 'Two Way', value: 'TW' },
  ];

  const [modeOfTravel, setModeOfTravel] = useState(null);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    mode: '',
    departure: '',
    returnDate: '',
    adult: 1,
    children: 0,
    infant: 0,
  });

  const resetForm = () => {
    setDepartureDate(null);
    setReturnDate(null);
    setModeOfTravel(null);
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      from: '',
      to: '',
      mode: '',
      departure: '',
      returnDate: '',
      adult: 1,
      children: 0,
      infant: 0,
    });
  };

  const departureCalendarRef = useRef(null);
  const returnCalendarRef = useRef(null);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleChoice = (field) => {
    if (modeOfTravel === 'TW') {
      handleChange(field, formData[field] === 'Two Way');
    } else {
      handleChange(field, formData[field] === 'One Way');
    }
  };

  const handleIncrement = (field) => {
    handleChange(field, formData[field] + 1);
  };

  const handleDecrement = (field) => {
    if (formData[field] >= 1) {
      handleChange(field, formData[field] - 1);
    }
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log(form.current);
    emailjs
      .sendForm(
        'service_j51o8rf',
        'template_nfv806b',
        form.current,
        'kCCk2LrIS2qYM90PK'
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleDocumentClick = (e) => {
    if (
      departureCalendarRef.current &&
      departureCalendarRef.current.contains(e.target)
    ) {
      return;
    }

    if (
      returnCalendarRef.current &&
      returnCalendarRef.current.contains(e.target)
    ) {
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const success = () => {
    Swal.fire({
      icon: 'success',
      position: 'center',
      title: 'Success! Flight Details Filled',
      text: "Andaman Wale Yatri's Team. They will reach out to you very soon",
      showConfirmButton: false,
      timer: 3500,
    });
  };

  const alert = () => {
    Swal.fire({
      icon: 'error',
      position: 'center',
      title: 'Oops.. Something went wrong',
      text: 'Pls fill in every details, check every input field',
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OKAY!',
      timer: 3500,
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="rounded-2xl bg-black border-2 text-gray-700 border-gray-800 xl:w-[50%] lg:w-[60%] md:w-[60%] h-full sm:p-6 sm:w-[80%] w-full p-4"
    >
      {/* <h1 className="tracking-[0.3em] text-xl text-white mb-2 font-medium ml:text-lg">
        GETTING TO THE ISLAND
      </h1> */}
      <h1 className="text-3xl text-yellow-400 font-bold ml:text-2xl">
        FLIGHT DETAILS FILL UP
      </h1>
      <div className="w-full flex gap-2 mt-4">
        {/* ... First Name input */}
        <div className="w-[50%] flex flex-col gap-y-2">
          <h1 className="text-white text-sm font-semibold pl-3">FIRST NAME</h1>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            placeholder="First Name"
            onChange={(e) => handleChange('firstname', e.target.value)}
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
            required
          />
        </div>
        {/* ... Last Name input */}
        <div className="w-[50%] flex flex-col gap-y-2">
          <h1 className="text-white text-sm font-semibold pl-3">LAST NAME</h1>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            placeholder="Last Name"
            onChange={(e) => handleChange('lastname', e.target.value)}
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
            required
          />
        </div>
      </div>
      <div className="w-full flex gap-2 mt-4">
        {/* ... E-mail input */}
        <div className="w-[50%] flex flex-col gap-y-2">
          <h1 className="text-white text-sm font-semibold pl-3">E-MAIL</h1>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
            required
          />
        </div>
        {/* ... Ph no. input */}
        <div className="w-[50%] flex flex-col gap-y-2">
          <h1 className="text-white text-sm font-semibold pl-3">PH NO.</h1>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Contact Number"
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
            required
          />
        </div>
      </div>
      <div className="w-full flex gap-2 mt-4">
        {/* ... FROM input */}
        <div className="w-[50%] flex flex-col gap-y-2">
          <h1 className="text-white text-sm font-semibold pl-3">FROM</h1>
          <input
            type="text"
            name="from"
            value={formData.from}
            placeholder="Current Destination"
            onChange={(e) => handleChange('from', e.target.value)}
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
            required
          />
        </div>
        {/* ... TO input */}
        <div className="w-[50%] flex flex-col gap-y-2">
          <h1 className="text-white text-sm font-semibold pl-3">TO</h1>
          <input
            type="text"
            name="to"
            value={formData.to}
            placeholder="Next Destination"
            onChange={(e) => handleChange('to', e.target.value)}
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
            required
          />
        </div>
      </div>
      <div className="w-full flex gap-2 mt-2 relative">
        <div className="w-full flex flex-col gap-y-2 relative">
          <h1 className="text-white text-sm font-semibold pl-3">
            TRAVEL CHOICE
          </h1>
          <Dropdown
            value={modeOfTravel}
            onChange={(e) => {
              setModeOfTravel(e.value);
              handleChoice('mode', e);
            }}
            options={choices}
            optionLabel="choice"
            optionValue="value"
            placeholder="Select One Way or Two Way"
            className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm bg-white"
            panelClassName="bg-white flex px-2 items-center justify-start rounded-md mt-1 py-2"
          />
        </div>
      </div>

      {/* ... DEPARTURE and RETURN inputs */}
      <div className="w-full flex gap-2 mt-4">
        {modeOfTravel && (
          <div className="w-[50%] flex flex-col gap-y-2 relative">
            {/* ... DEPARTURE input */}
            <h1 className="text-white text-sm font-semibold pl-3">DEPARTURE</h1>
            <DatePicker
              selected={departureDate}
              onChange={(date) => {
                setDepartureDate(date);
                handleChange('departure', date);
              }}
              name="departure"
              placeholderText="Select Date"
              className="w-full py-3 p-invalid px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
              required
            />
          </div>
        )}

        {modeOfTravel === 'TW' && (
          <div className="w-[50%] flex flex-col gap-y-2 relative">
            {/* ... RETURN input */}
            <h1 className="text-white text-sm font-semibold pl-3">RETURN</h1>
            <DatePicker
              selected={returnDate}
              onChange={(date) => {
                setReturnDate(date);
                handleChange('returnDate', date);
              }}
              name="returnDate"
              placeholderText="Select Date"
              className="w-full py-3 px-5 rounded-md placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm"
              required
            />
          </div>
        )}
      </div>

      {/* ... PASSENGERS dropdowns */}
      <div className="w-full flex gap-2 mt-6 flex-col">
        <h1 className="text-white font-semibold">PASSENGERS</h1>
        <div className="flex w-full flex-wrap gap-y-2">
          {/* ADULT buttons */}
          <div className="flex flex-col gap-y-1 md:w-1/3 w-1/2">
            <h1 className="text-white text-sm pl-3 font-semibold lexs:text-xs">
              ADULT
            </h1>
            <div className="flex gap-x-2">
              <button
                className="bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3"
                onClick={() => handleDecrement('adult')}
                type="button"
              >
                -
              </button>
              <div className="flex justify-center items-center bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3 lexs:text-xs">
                <input
                  className="w-2 h-4"
                  type="text"
                  value={formData.adult}
                  name="adult"
                  required
                />
              </div>
              <button
                className="bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3"
                onClick={() => handleIncrement('adult')}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          {/* CHILDREN buttons */}
          <div className="flex flex-col gap-y-1 md:w-1/3 w-1/2">
            <h1 className="text-white text-sm pl-3 font-semibold lexs:text-xs">
              CHILDREN
            </h1>
            <div className="flex gap-x-2">
              <button
                className="bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3"
                onClick={() => handleDecrement('children')}
                type="button"
              >
                -
              </button>
              <div className="flex justify-center items-center bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3 lexs:text-xs">
                <input
                  className="w-2 h-4"
                  type="text"
                  value={formData.children}
                  name="children"
                  required
                />
              </div>
              <button
                className="bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3"
                onClick={() => handleIncrement('children')}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          {/* INFANT buttons */}
          <div className="flex flex-col gap-y-1 md:w-1/3 w-1/2">
            <h1 className="text-white text-sm pl-3 font-semibold lexs:text-xs">
              INFANT
            </h1>
            <div className="flex gap-x-2">
              <button
                className="bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3"
                onClick={() => handleDecrement('infant')}
                type="button"
              >
                -
              </button>
              <div className="flex justify-center items-center bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3 lexs:text-xs">
                <input
                  className="w-2 h-4"
                  type="text"
                  value={formData.infant}
                  name="infant"
                  required
                />
              </div>
              <button
                className="bg-white py-2 px-4 rounded-md text-gray-700 font-semibold text-sm lexs:py-1 lexs:px-3"
                onClick={() => handleIncrement('infant')}
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ... SEARCH FLIGHTS button */}
      <div className="mx-auto text-center">
        <button
          type="submit"
          className="rounded-md bg-yellow-400 text-black font-semibold py-3 text-center sm:w-[50%] w-[100%] mt-8 xs:w-[90%]"
          onClick={() => (departureDate ? success() : alert())}
        >
          SUBMIT FLIGHT DETAILS
        </button>
      </div>
    </form>
  );
};

export default Flightsearchform;
