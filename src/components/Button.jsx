import { FaArrowRight } from "react-icons/fa";

// const Button = ({ styles }) => (
//   <button type="button" className={`py-4 px-6 font-inter font-medium text-[18px] text-white bg-primary rounded-[10px] outline-none ${styles}`}>
//     GET STARTED <FaArrowRight className={`ml-2`} />
//   </button>
// );
const Button = ({ styles }) => (
  <button type="button" className={`flex items-center py-4 px-6 font-inter font-medium text-[18px] text-white bg-primary rounded-[10px] outline-none ${styles}`}>
    GET STARTED <FaArrowRight className={`ml-2`} />
  </button>
);

export default Button;

