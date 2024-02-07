import { useState } from "react";
import { logo } from "../assets";
import { MiniNavbar } from "../components";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    
      <div className="flex flex-col  px-2 md:px-20 py-4 md:py-12 bg-fuchsia-200 max-md:px-5">
        <MiniNavbar />
        <form className="flex flex-col self-center px-2 md:px-16 py-4 md:py-12 mt-2 md:mt-10 max-w-full text-base bg-white rounded-2xl md:w-[1060px]
        w-[621px] max-md:px-5 max-md:mt-10">
      
      {/* <h1 className="self-center mt-8 text-2xl md:text-4xl font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter whitespace-nowrap">
            <span>
              <img
                src={logo}
                alt=""
                className="grow self-start mt-1.5 inline-flex"
              />
            </span>
            Welcome to JUVA
          </h1> */}
     <h1 className="self-center mt-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter whitespace-nowrap max-w-full md:max-w-4xl xxxs:text-center xxxs:block">
  <img
    src={logo}
    alt=""
    className="grow self-center mt-1.5 mx-auto block xxxs:mx-auto xxxs:block"
  />
  <span className="xxs:block xxxs:mt-2">
    Welcome to JUVA
  </span>
</h1>





          <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
            We provide healthcare services for all by offering remote medical
            consultation. Each of our service is tailored to help you achieve
            the most as a patient and an health professional.
          </p>

          <form >
          <div className=" flex flex-col justify-center items-start py-3 pr-16 pl-6 mt-5 text-xl whitespace-nowrap rounded bg-stone-50 text-stone-500 max-md:px-5 max-md:max-w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" my-auto focus:outline-none bg-stone-50 text-sm md:text-base p-2 mt-2 focus:w-full rounded-lg"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className= "flex gap-5 justify-between px-6 py-3.5 mt-7 text-xl whitespace-nowrap rounded bg-stone-50 text-stone-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full" >
          <div className="flex items-center justify-between w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="my-auto focus:outline-none bg-stone-50 text-sm md:text-base"
              placeholder="Password"

            /> 
        
          <FaEyeSlash size={20} color="black" className="ml-2"/>
          </div>
          </div>

    
          <button type="submit"
          className="justify-center items-center px-16 py-5 mt-7 font-semibold text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full">
            Login to your account
          </button>
          </form>
          
          <button className="justify-center items-center px-16 py-5 mt-4 mb-8 font-semibold text-center text-purple-800 whitespace-nowrap bg-fuchsia-200 rounded-lg max-md:px-5 max-md:max-w-full">
            Click here to   <span className="font-extrabold text-purple-800">Sign Up</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;


