/* eslint-disable react/prop-types */
import './page.css';

const QuickLinksBg = ({ img, text }) => {
    return (
        <div className="">
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={img}
                    height={3919}
                    width={5938}
                    className="object-cover w-full h-full"
                    alt="banner boat"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <p className="text-4xl mb-4">Quick Links</p>
                    <p className="">QUICK LINKS &nbsp;&nbsp;/&nbsp;&nbsp; {text}</p>
                </div>
            </div>
        </div>
    );
};

export default QuickLinksBg;