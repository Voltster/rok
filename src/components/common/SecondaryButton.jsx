import { Link } from "react-router-dom";

const SecondaryButton = ({ to, children, className }) => {
  return (
    <button className="secondaryButton text-gray-50 relative leading-7 z-10 hover:text-gray-50 overflow-hidden rounded-full border border-[#911515] py-2 px-6  bg-[#911515] after:bg-gradient-to-r from-[#460f0f] to-[#460f0f] hover:shadow-md">
      <Link to={`${to}`} className={` ${className}`}>
        {children}
      </Link>
    </button>
  );
};

export default SecondaryButton;
