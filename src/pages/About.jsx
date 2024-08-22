import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
// import founder3 from '@/assets/founder_3.svg'

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        handleIntersection(entries);
      },
      {
        root: null, // Use the viewport as the root element
        threshold: 1, // Trigger when 50% of the component is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const speed = 20;
        const counterNum = document.querySelectorAll('.number');
        counterNum?.forEach((element) => {
          const updateNumber = () => {
            const targetNumber = parseInt(element.dataset.number);
            const initialNumber = parseInt(element.innerText);
            const incrementNumber = Math.trunc(targetNumber / speed);
            if (initialNumber < targetNumber) {
              element.innerText = `${initialNumber + incrementNumber}+`;
              setTimeout(updateNumber, 100);
            }
          };
          updateNumber();
        });
      }
    });
  };

  return (
    <div className="">
      <div className="flex flex-col w-full md:w-3/4 items-center justify-center gap-6 mx-auto text-center">
        <h1 className="text-5xl font-semibold w-3/4 md:w-full pt-5 mt-28">
          Why Choose Safar Andaman
        </h1>
        <p className="w-3/4 md:w-4/5 text-base font-extralight">
          "Safar Andaman offers a perfect blend of breathtaking natural
          beauty and diverse activities, ensuring a memorable experience. With
          professional services, customization options, and positive customer
          reviews, it provides value-for-money packages for a seamless and
          enjoyable journey."
        </p>
        <Link
          to="/packages"
          className="px-6 py-3 rounded-md bg-gradient-to-tl from-[#3dff77] to-[#93f7cd] text-sm font-poppins font-bold hover:underline"
        >
          Checkout Packages
        </Link>
      </div>

      {/* <section className="max-w-4/5 flex flex-col xl:flex-row items-center justify-evenly mx-auto gap-y-10 mt-28">
        <div className="ml-20 xl:ml-0">
          <img
            src={founderLogo}
            className="w-80"
            alt="A logo with text About written in it"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-2 font-bold text-xl font-montserrat italic">
              M Ganga Raj
            </h1>
            <img
              src={founder1}
              alt="Mr. Dinesh Lal, CEO & Founder of Unicorniz Innovation. He is wearing a Blue Suit with Purple Tie on a White Shirt & a plant's shade falling on the background"
              className="w-60 rounded-full brightness-100 contrast-125"
            />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="mb-2 font-bold text-xl font-montserrat italic">
              K Mahesh
            </h1>
            <img
              src={founder2}
              alt="Mr. M Vinod, COO & Founder of Unicorniz Innovation. He is wearing a Black Shirt with a very good smile in his face & a aesthic,aysemetric abstract design on the background"
              className="w-60 rounded-full brightness-100 contrast-125"
            />
          </div>
        </div>
      </section> */}

      <div
        ref={statsRef}
        className="flex items-center justify-center flex-col sm:flex-row xl:justify-between gap-5 flex-wrap font-popins w-full max-w-7xl mx-auto my-20"
      >
        <div className="flex items-center justify-center flex-col">
          <h3
            data-number="25"
            className="font-bold text-black-100 text-5xl number"
          >
            0+
          </h3>
          <p className="font-bold text-black-100 lg:text-5xl md:text-4xl">
            Awards
          </p>
        </div>
        <div className="flex items-center justify-center flex-col order-3">
          <h3
            data-number="970"
            className="font-bold text-black-100 text-5xl number"
          >
            0+
          </h3>
          <p className="font-bold text-black-100 lg:text-5xl md:text-4xl">
            Tours
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3
            data-number="10000"
            className="font-bold text-black-100 text-5xl number"
          >
            0+
          </h3>
          <p className="font-bold text-black-100 lg:text-5xl md:text-4xl">
            Travellers
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3
            data-number="50"
            className="font-bold text-black-100 text-5xl number"
          >
            0+
          </h3>
          <p className="font-bold text-black-100 lg:text-5xl md:text-4xl">
            Team Members
          </p>
        </div>
      </div>

      <div className="relative flex flex-col w-full px-10 items-center justify-center gap-6 my-24 mx-auto text-center">
        <p className="md:w-full text-base font-normal">
          " Safar Andaman beckons travelers to explore the pristine beauty
          and adventure of the Andaman and Nicobar Islands. Their meticulously
          crafted packages promise a harmonious fusion of breathtaking natural
          landscapes and a myriad of activities, including water sports and
          cultural exploration. With a focus on professionalism, the agency
          offers seamless travel experiences, boasting customization options
          that allow visitors to tailor their itineraries to individual
          preferences. Backed by positive customer reviews, Safar Andaman
          stands out as a trusted choice, ensuring value-for-money packages and
          an unforgettable journey for every traveler. "
          <br />
          <br />" From the azure waters and sandy beaches to historical
          landmarks like Cellular Jail, Safar Andaman curates experiences
          that capture the essence of the islands. The company's commitment to
          providing top-notch services is reflected in its knowledgeable guides,
          reliable transportation, and responsive customer support. As travelers
          immerse themselves in the vibrant culture and diverse activities
          offered by the Andaman Islands, Safar Andaman remains a reliable
          partner, offering not just vacations but memories that last a
          lifetime. "
        </p>
      </div>
    </div>
  );
};

export default About;
