// import { FaArrowUpRightLong } from "react-icons/fa6";

// export default function Footer() {
//   const links = [
//     {
//       number: "01",
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/bastab-saikia",
//     },
//     {
//       number: "02",
//       name: "GitHub",
//       url: "https://github.com/Bastab10",
//     },
//     {
//       number: "03",
//       name: "Twitter",
//       url: "https://twitter.com/",
//     },
//   ];

//   return (
//     <footer className="bg-white">
//       <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16 pt-20 pb-10">

//         {/* Divider */}
//         <div className="border-t border-neutral-200" />

//         {/* Footer Content */}
//         <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

//           {/* Left */}
//           <div className="flex flex-wrap items-center gap-8">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-2 text-[17px] text-neutral-700 transition-colors duration-300 hover:text-black"
//               >
//                 <span className="text-xs text-neutral-400">
//                   {link.number}
//                 </span>

//                 <span className="relative">
//                   {link.name}

//                   <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
//                 </span>

//                 <FaArrowUpRightLong className="translate-y-[1px] text-[11px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
//               </a>
//             ))}
//           </div>

//           {/* Right */}
//           <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
//             © {new Date().getFullYear()} BASTAB SAIKIA — PORTFOLIO
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }