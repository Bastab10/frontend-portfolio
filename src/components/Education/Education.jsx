// import { motion } from "framer-motion";
// import education from "../../data/education";

// function Education() {
//   return (
//     <section
//       id="education"
//       className="relative overflow-hidden bg-white py-28"
//     >
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-black/5 blur-[120px]" />
//         <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-black/5 blur-[120px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-24"
//         >
//           <p className="mb-4 uppercase tracking-[0.45em] text-xs text-neutral-500">
//             EDUCATION
//           </p>

//           <h2 className="text-6xl md:text-8xl font-light leading-none tracking-tight text-black">
//             My
//             <br />
//             Journey
//           </h2>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Vertical Line */}
//           <div className="absolute left-4 top-0 h-full w-px bg-neutral-300" />

//           <div className="space-y-20">
//             {education.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 70 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.15,
//                 }}
//                 viewport={{ once: true }}
//                 className="relative flex gap-10"
//               >
//                 {/* Dot */}
//                 <div className="relative z-10 mt-2">
//                   <div className="h-8 w-8 rounded-full border-4 border-white bg-black shadow-lg" />
//                 </div>

//                 {/* Card */}
//                 <div
//   className="
//   flex-1
//   rounded-[28px]
//   border
//   border-neutral-200
//   bg-white
//   p-10
//   shadow-sm
//   transition-all
//   duration-300
//   hover:-translate-y-1
//   hover:shadow-xl
//   "
// >
//                   <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
//                     {item.period}
//                   </p>

//                   <h3 className="mt-4 text-3xl md:text-4xl font-light text-black leading-tight">
//                     {item.degree}
//                   </h3>

//                   <h4 className="mt-5 text-xl text-neutral-800">
//                     {item.institution}
//                   </h4>

//                   <p className="mt-2 text-neutral-500">
//                     {item.location}
//                   </p>

//                   <p className="mt-8 max-w-4xl text-[16px] leading-8 text-neutral-600">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Education;