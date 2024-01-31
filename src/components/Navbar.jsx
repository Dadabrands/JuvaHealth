// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// import { close, logo, menu } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);
// //   <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
// //           {/* <Navbar /> */}
// //           <Navbar2 />
// //         </div>

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//         <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary"><img src={logo} alt="" className="w-10 inline-block items-center" /> <span> JUVA </span></a>
//       {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
//       <h3 className="">JUVA</h3> */}

//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.title ? "text-white" : "text-dimWhite"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </li>
//         ))}
//         <button type="button" className={"flex items-center py-6 px-6 font-inter font-medium text-[18px] text-white bg-primary rounded-[10px] outline-none"}>
//     Login/Sign Up
//   </button>
//       </ul>
      
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// // import { logo} from "../assets";
// // const Navbar = () => {

// //     const navItems = [
// //         {link : "FAQs", path: "faqs"},
// //         {link : "Our Services", path: "our-services"},
// //         {link : "Blog", path: "blog"},
// //         {link : "Health Plan", path: "health-plan"},
// //         {link : "About Us ", path: "about-us"},
// //     ]
// //   return (<nav>
// //     <div>
// //        <div>
// //         <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary"><img src={logo} alt="" className="w-10 inline-block items-center" /> <span> JUVA </span></a>
// //         {/* showing navItems using map */}
// //         <ul>
// //             { 
// //             navItems.map(({link, path}) => <a key={link} href={path} className=" block hover:text-primary ">{link} </a>) }
// //         </ul>
// //        </div>
// //        <div>
// //         {/* signup /login  */}
// //         <button> </button>
// //        </div>
// //     </div>
// //   </nav>
// //   )
// // }

// // export default Navbar

import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
        <img src={logo} alt="" className="w-10 inline-block items-center" />
        <span> JUVA </span>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="px-14">
          <button
            type="button"
            className="font-inter font-medium text-[18px] text-white bg-primary px-6 py-2 rounded"
          >
            Login/Sign Up
          </button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mb-4">
              <button
                type="button"
                className="font-inter font-medium text-[18px] text-white bg-primary px-6 py-2 rounded"
              >
                Login/Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
