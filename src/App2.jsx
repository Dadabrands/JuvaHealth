// import * as React from "react";

// function App(props) {
//   return (
//     <div className="flex flex-col items-stretch pt-12 bg-white">
//       <div className="flex gap-5 justify-between items-stretch self-center px-8 py-3.5 mt-5 max-w-full capitalize bg-fuchsia-200 rounded-lg w-[1280px] max-md:flex-wrap max-md:px-5">
//         <div className="flex gap-2 items-stretch my-auto text-2xl font-bold text-purple-800 whitespace-nowrap">
//           <div className="flex flex-col w-9 h-9 bg-purple-800 rounded" />
//           <div className="grow self-start mt-1.5">JUVA</div>
//         </div>
//         <div className="flex gap-5 justify-between items-center pl-6 text-xl font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
//           <div className="self-stretch my-auto">FAQs</div>
//           <div className="flex-auto self-stretch my-auto">Our Services</div>
//           <div className="self-stretch my-auto">Blog</div>
//           <div className="flex-auto self-stretch my-auto">Health Plan</div>
//           <div className="self-stretch my-auto">About Us</div>
//           <div className="grow justify-center items-stretch self-stretch px-6 py-4 text-fuchsia-200 whitespace-nowrap bg-purple-800 rounded max-md:px-5">
//             Login/Sign Up
//           </div>
//         </div>
//       </div>
//       <div className="self-center mt-20 w-full max-w-[1282px] max-md:mt-10 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//           <div className="flex flex-col items-stretch w-[41%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col items-stretch px-5 mt-11 max-md:mt-10 max-md:max-w-full">
//               <div className="text-8xl font-bold tracking-tighter text-black leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
//                 Improving <br />
//                 Healthcare <br />
//                 Access.
//               </div>
//               <div className="mt-6 text-3xl leading-9 text-stone-500 max-md:max-w-full">
//                 Remote Medical Consultations <br />
//                 for Everyone
//               </div>
//               <div className="flex flex-col justify-center items-stretch px-6 py-4 mt-6 max-w-full text-xl font-medium text-white uppercase whitespace-nowrap bg-purple-800 rounded-lg tracking-[2px] w-[250px] max-md:px-5">
//                 <div className="flex gap-3 justify-between items-stretch py-2 pl-2">
//                   <div className="grow">Get Started </div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc969320eb822628d51d559110ceeb7987aea8e5877e5db88226d2208ef42301?"
//                     className="object-center w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch ml-5 w-[59%] max-md:ml-0 max-md:w-full">
//             <div className="grow items-stretch px-10 pt-7 pb-11 w-full font-bold tracking-tighter text-purple-50 capitalize whitespace-nowrap bg-fuchsia-200 leading-[190px] text-[240px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-9">
//               Main
//               <br />
//               Image
//               <br />
//               Here
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center pt-12 mt-16 w-full bg-purple-800 max-md:mt-10 max-md:max-w-full">
//         <div className="flex flex-col justify-center items-center self-stretch px-16 mt-6 w-full max-md:px-5 max-md:max-w-full">
//           <div className="flex flex-col items-stretch w-full max-w-[1009px] max-md:max-w-full">
//             <div className="self-center text-4xl font-bold tracking-tighter leading-10 text-white max-md:max-w-full">
//               Why you should choose us?
//             </div>
//             <div className="mt-16 max-md:mt-10 max-md:max-w-full">
//               <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//                 <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
//                   <div className="flex flex-col grow items-stretch text-white max-md:mt-10">
//                     <div className="self-center text-xl font-bold tracking-tighter leading-5 whitespace-nowrap">
//                       Access to Specialist
//                     </div>
//                     <div className="mt-2.5 text-base leading-6 text-center">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's{" "}
//                     </div>
//                   </div>
//                 </div>{" "}
//                 <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                   <div className="flex flex-col grow items-stretch text-white max-md:mt-10">
//                     <div className="self-center text-xl font-bold tracking-tighter leading-5 whitespace-nowrap">
//                       Always Available 24/7
//                     </div>{" "}
//                     <div className="mt-2.5 text-base leading-6 text-center">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's{" "}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                   <div className="flex flex-col grow items-stretch text-white max-md:mt-10">
//                     <div className="self-center text-xl font-bold tracking-tighter leading-5 whitespace-nowrap">
//                       Secured Data
//                     </div>
//                     <div className="mt-2.5 text-base leading-6 text-center">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//         <div className="px-5 mt-40 w-full max-w-[1276px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//             <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-4 mx-auto w-full bg-white rounded-lg leading-[150%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-center w-full aspect-[1.54]"
//                 />{" "}
//                 <div className="mt-4 text-2xl font-semibold text-purple-800">
//                   Darmatology
//                 </div>{" "}
//                 <div className="mt-1 text-base leading-6 text-stone-500">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's{" "}
//                 </div>
//                 <div className="flex gap-1 items-stretch self-start mt-4 text-xl font-medium whitespace-nowrap text-zinc-800">
//                   <div className="grow">Learn More</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee69009937924616384fb061c931b3e4490b9d7cd3c442f599ea1be98effb152?"
//                     className="object-center my-auto w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-4 mx-auto w-full bg-white rounded-lg leading-[150%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-center w-full aspect-[1.54]"
//                 />
//                 <div className="mt-4 text-2xl font-semibold text-purple-800">
//                   Pediatrics
//                 </div>
//                 <div className="mt-1 text-base leading-6 text-stone-500">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's{" "}
//                 </div>{" "}
//                 <div className="flex gap-1 items-stretch self-start mt-4 text-xl font-medium whitespace-nowrap text-zinc-800">
//                   <div className="grow">Learn More</div>{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee69009937924616384fb061c931b3e4490b9d7cd3c442f599ea1be98effb152?"
//                     className="object-center my-auto w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-4 mx-auto w-full bg-white rounded-lg leading-[150%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-center w-full aspect-[1.54]"
//                 />{" "}
//                 <div className="mt-4 text-2xl font-semibold text-purple-800 whitespace-nowrap">
//                   General Practice
//                 </div>{" "}
//                 <div className="mt-1 text-base leading-6 text-stone-500">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's{" "}
//                 </div>
//                 <div className="flex gap-1 items-stretch self-start mt-4 text-xl font-medium whitespace-nowrap text-zinc-800">
//                   <div className="grow">Learn More</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee69009937924616384fb061c931b3e4490b9d7cd3c442f599ea1be98effb152?"
//                     className="object-center my-auto w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-5 mt-24 w-full max-w-[1276px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//             <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-4 mx-auto w-full bg-white rounded-lg leading-[150%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-center w-full aspect-[1.54]"
//                 />
//                 <div className="mt-4 text-2xl font-semibold text-purple-800">
//                   Optometry
//                 </div>
//                 <div className="mt-1 text-base leading-6 text-stone-500">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's{" "}
//                 </div>{" "}
//                 <div className="flex gap-1 items-stretch self-start mt-4 text-xl font-medium whitespace-nowrap text-zinc-800">
//                   <div className="grow">Learn More</div>{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee69009937924616384fb061c931b3e4490b9d7cd3c442f599ea1be98effb152?"
//                     className="object-center my-auto w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-4 mx-auto w-full bg-white rounded-lg leading-[150%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-center w-full aspect-[1.54]"
//                 />{" "}
//                 <div className="mt-4 text-2xl font-semibold text-purple-800 whitespace-nowrap">
//                   Family Medicine
//                 </div>{" "}
//                 <div className="mt-1 text-base leading-6 text-stone-500">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's{" "}
//                 </div>
//                 <div className="flex gap-1 items-stretch self-start mt-4 text-xl font-medium whitespace-nowrap text-zinc-800">
//                   <div className="grow">Learn More</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee69009937924616384fb061c931b3e4490b9d7cd3c442f599ea1be98effb152?"
//                     className="object-center my-auto w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-4 mx-auto w-full bg-white rounded-lg leading-[150%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-center w-full aspect-[1.54]"
//                 />
//                 <div className="mt-4 text-2xl font-semibold text-purple-800">
//                   Endocrinology
//                 </div>
//                 <div className="mt-1 text-base leading-6 text-stone-500">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's{" "}
//                 </div>{" "}
//                 <div className="flex gap-1 items-stretch self-start mt-4 text-xl font-medium whitespace-nowrap text-zinc-800">
//                   <div className="grow">Learn More</div>{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee69009937924616384fb061c931b3e4490b9d7cd3c442f599ea1be98effb152?"
//                     className="object-center my-auto w-6 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//         <div className="z-10 mt-52 mb-0 max-w-full w-[857px] max-md:mt-10 max-md:mb-2.5">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//             <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch px-11 py-8 mx-auto w-full bg-fuchsia-200 rounded-lg text-zinc-800 max-md:px-5 max-md:mt-10">
//                 <div className="text-2xl tracking-tighter leading-6 text-black">
//                   Basic Plan
//                 </div>{" "}
//                 <div className="flex gap-3 items-stretch self-start mt-6 font-medium text-black whitespace-nowrap">
//                   <div className="grow text-5xl tracking-tighter leading-10 max-md:text-4xl">
//                     #15,000
//                   </div>{" "}
//                   <div className="my-auto text-sm leading-5 uppercase">
//                     Per
//                     <br />
//                     Month
//                   </div>
//                 </div>{" "}
//                 <div className="mt-6 text-base tracking-tighter leading-6 text-black">
//                   For this plan you would have access
//                   <br />
//                   all our services and these:
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-2 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 1 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold tracking-tighter leading-6 text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5">
//                   Buy this plan
//                 </div>
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch px-11 py-8 mx-auto w-full bg-sky-100 rounded-lg text-zinc-800 max-md:px-5 max-md:mt-10">
//                 <div className="text-2xl tracking-tighter leading-6 text-black">
//                   Pro Plan
//                 </div>{" "}
//                 <div className="flex gap-3 justify-between items-stretch mt-6 font-medium text-black whitespace-nowrap">
//                   <div className="grow text-5xl tracking-tighter leading-10 max-md:text-4xl">
//                     #25,000
//                   </div>{" "}
//                   <div className="my-auto text-sm leading-5 uppercase">
//                     Per
//                     <br />
//                     Month
//                   </div>
//                 </div>{" "}
//                 <div className="mt-6 text-base tracking-tighter leading-6 text-black">
//                   For this plan you would have access
//                   <br />
//                   all our services and these:
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-2 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 1 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
//                     className="object-center w-6 aspect-square"
//                   />{" "}
//                   <div className="flex-auto">Benefit 2 and Impact 1</div>
//                 </div>{" "}
//                 <div className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold tracking-tighter leading-6 text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5">
//                   Buy this plan
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>{" "}
//       <div className="flex flex-col justify-center items-stretch px-16 py-12 mt-80 w-full bg-purple-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//         <div className="mx-5 mt-14 mb-12 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//             <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-10 mx-auto w-full bg-white rounded-lg max-md:px-5 max-md:mt-10">
//                 <div className="flex gap-1 items-stretch pr-20 max-md:pr-5">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4acc8e5c8c8a34a2d78a09e7840b924763b79f920a89bff8325acd4a07960f6c?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/19dc4fb60b2284e1758ce0abb2f42b5812715a53beef617e4e6337da843d9eb3?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd2abc63c39bbe17216370107817992ffa3ab0c72bfaea9b66e800ced431aa5?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5ef0c178b473892314df526589a17d80dc6ad15d280393e5cbd31f493d7e39?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e0b3450519709229249a00dac3d51c31286d8614242406170ae113e647ce30?"
//                     className="object-center aspect-[1.05] fill-fuchsia-200 w-[21px]"
//                   />
//                 </div>{" "}
//                 <div className="mt-4 text-base leading-6 text-black">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </div>
//                 <div className="flex gap-2 justify-between items-stretch mt-4 font-medium leading-[150%]">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="object-center w-12 rounded-full aspect-square"
//                   />
//                   <div className="flex flex-col flex-1 items-stretch my-auto">
//                     <div className="text-base text-zinc-800">
//                       Chidinma Adeola
//                     </div>
//                     <div className="text-xs text-stone-500">
//                       Remote Designer
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-10 mx-auto w-full bg-white rounded-lg max-md:px-5 max-md:mt-10">
//                 <div className="flex gap-1 items-stretch pr-20 max-md:pr-5">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4acc8e5c8c8a34a2d78a09e7840b924763b79f920a89bff8325acd4a07960f6c?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/19dc4fb60b2284e1758ce0abb2f42b5812715a53beef617e4e6337da843d9eb3?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd2abc63c39bbe17216370107817992ffa3ab0c72bfaea9b66e800ced431aa5?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b21f9d299f75802c26f76d879312905240819de7c43ddb4bcd6b3f9e0f8b26?"
//                     className="object-center aspect-[1.05] fill-fuchsia-200 w-[21px]"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e0b3450519709229249a00dac3d51c31286d8614242406170ae113e647ce30?"
//                     className="object-center aspect-[1.05] fill-fuchsia-200 w-[21px]"
//                   />
//                 </div>
//                 <div className="mt-4 text-base leading-6 text-black">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </div>{" "}
//                 <div className="flex gap-2 justify-between items-stretch mt-4 font-medium leading-[150%]">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="object-center w-12 rounded-full aspect-square"
//                   />{" "}
//                   <div className="flex flex-col flex-1 items-stretch my-auto">
//                     <div className="text-base text-zinc-800">
//                       Chidinma Adeola
//                     </div>{" "}
//                     <div className="text-xs text-stone-500">
//                       Remote Designer
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-stretch p-10 mx-auto w-full bg-white rounded-lg max-md:px-5 max-md:mt-10">
//                 <div className="flex gap-1 items-stretch pr-20 max-md:pr-5">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4acc8e5c8c8a34a2d78a09e7840b924763b79f920a89bff8325acd4a07960f6c?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/19dc4fb60b2284e1758ce0abb2f42b5812715a53beef617e4e6337da843d9eb3?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd2abc63c39bbe17216370107817992ffa3ab0c72bfaea9b66e800ced431aa5?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5ef0c178b473892314df526589a17d80dc6ad15d280393e5cbd31f493d7e39?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />{" "}
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a4e7c345c5434b130166072603f89e825e2ca8bed33f4292bbef96af77c7288?"
//                     className="object-center aspect-[1.05] fill-purple-800 w-[21px]"
//                   />
//                 </div>{" "}
//                 <div className="mt-4 text-base leading-6 text-black">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </div>
//                 <div className="flex gap-2 justify-between items-stretch mt-4 font-medium leading-[150%]">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="object-center w-12 rounded-full aspect-square"
//                   />
//                   <div className="flex flex-col flex-1 items-stretch my-auto">
//                     <div className="text-base text-zinc-800">
//                       Chidinma Adeola
//                     </div>
//                     <div className="text-xs text-stone-500">
//                       Remote Designer
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="self-center mt-16 w-full max-w-[1259px] max-md:mt-10 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//           <div className="flex flex-col items-stretch w-[55%] max-md:ml-0 max-md:w-full">
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="object-center grow w-full aspect-square max-md:mt-10 max-md:max-w-full"
//             />
//           </div>
//           <div className="flex flex-col items-stretch ml-5 w-[45%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col items-stretch self-stretch px-5 my-auto text-2xl font-medium tracking-tighter leading-6 text-zinc-800 max-md:mt-10 max-md:max-w-full">
//               <div className="text-5xl font-bold tracking-tighter leading-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
//                 Frequently Asked
//                 <br />
//                 Questions
//               </div>
//               <div className="flex gap-5 justify-between items-stretch mt-44 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//                 <div className="flex-auto">Is this an Hospital App?</div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcdb3085cd077ea800be31814caf298b525c51890d8500d6e79792844c181714?"
//                   className="object-center w-6 aspect-square"
//                 />
//               </div>
//               <div className="mt-3 text-base tracking-tighter leading-6 text-stone-500 max-md:max-w-full">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. <br />
//                 Lorem Ipsum has been the industry's standard dummy text ever
//                 since the <br />
//                 1500s, when an unknown printer took a galley of type and
//                 scrambled it to <br />
//                 make a type specimen book.
//               </div>{" "}
//               <div className="shrink-0 mt-5 h-px bg-fuchsia-200 max-md:max-w-full" />{" "}
//               <div className="flex gap-5 justify-between items-stretch mt-4 max-md:flex-wrap max-md:max-w-full">
//                 <div className="flex-auto">
//                   How reliable is this online service?
//                 </div>{" "}
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/c667cb002690b6d24fed9834bb6fb5f9835e729ba55f141ac37d32cff8ee84c6?"
//                   className="object-center w-6 aspect-square"
//                 />
//               </div>{" "}
//               <div className="shrink-0 mt-5 h-px bg-fuchsia-200 max-md:max-w-full" />{" "}
//               <div className="flex gap-5 justify-between items-stretch mt-4 max-md:flex-wrap max-md:max-w-full">
//                 <div className="flex-auto">
//                   Do I need to have purchase a card?
//                 </div>{" "}
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/c667cb002690b6d24fed9834bb6fb5f9835e729ba55f141ac37d32cff8ee84c6?"
//                   className="object-center w-6 aspect-square"
//                 />
//               </div>{" "}
//               <div className="shrink-0 mt-5 h-px bg-fuchsia-200 max-md:max-w-full" />{" "}
//               <div className="flex gap-5 justify-between items-stretch mt-4 max-md:flex-wrap max-md:max-w-full">
//                 <div className="flex-auto">Una de do giveaway fro the app?</div>{" "}
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/c667cb002690b6d24fed9834bb6fb5f9835e729ba55f141ac37d32cff8ee84c6?"
//                   className="object-center w-6 aspect-square"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>{" "}
//       <div className="flex flex-col px-20 py-12 mt-24 w-full bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//         <div className="flex gap-5 justify-between items-stretch self-center mt-5 w-full whitespace-nowrap max-w-[1170px] max-md:flex-wrap max-md:max-w-full">
//           <div className="flex gap-2 justify-between items-stretch text-2xl font-bold capitalize text-zinc-300">
//             <div className="flex flex-col w-9 h-9 rounded bg-zinc-300" />{" "}
//             <div className="grow self-start mt-1.5">JUVA</div>
//           </div>{" "}
//           <div className="flex gap-5 justify-between items-stretch my-auto text-base font-semibold text-white uppercase max-md:flex-wrap max-md:max-w-full">
//             <div className="">Resources</div> <div className="">Support</div>{" "}
//             <div className="">Product</div> <div className="">Company</div>
//           </div>
//         </div>{" "}
//         <div className="self-end mt-10 mr-32 mb-11 max-w-full w-[779px] max-md:mr-2.5 max-md:mb-10">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
//             <div className="flex flex-col items-stretch w-[30%] max-md:ml-0 max-md:w-full">
//               <div className="text-base font-medium leading-10 text-white capitalize max-md:mt-10">
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-[31%] max-md:ml-0 max-md:w-full">
//               <div className="text-base font-medium leading-10 text-white capitalize max-md:mt-10">
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-[30%] max-md:ml-0 max-md:w-full">
//               <div className="text-base font-medium leading-10 text-white capitalize max-md:mt-10">
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//               </div>
//             </div>{" "}
//             <div className="flex flex-col items-stretch ml-5 w-[8%] max-md:ml-0 max-md:w-full">
//               <div className="text-base font-medium leading-10 text-white capitalize max-md:mt-10">
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//                 <br />
//                 Lorem
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default  App