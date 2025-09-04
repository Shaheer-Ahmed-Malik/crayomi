"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    heading: (
      <>
        Comfort Meets{" "}
        <span className="text-yellow-300">
          Style!
        </span>
      </>
    ),
    desc: "Soft, colorful clothing that kids love to wear and parents trust for quality.",
    img: "/banner/banner1.jpg",
  },
  {
    heading: (
      <>
        Playful{" "}
        <span className="text-green-300">
          Designs!
        </span>
      </>
    ),
    desc: "Fun patterns and bright colors for every adventure.",
    img: "/banner/banner2.jpg",
  },
  {
    heading: (
      <>
        Trusted{" "}
        <span className="text-yellow-300">
          Quality!
        </span>
      </>
    ),
    desc: "Durable fabrics and comfy fits for happy kids and parents.",
    img: "/banner/banner3.jpg",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // 👇 agar header ka height 80px hai to yeh calc use karo
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
      {/* Slider Wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 h-full"
          >
            {/* Left Content */}
            <div className="flex-1 max-w-xl text-center md:text-left flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-snug">
                {slide.heading}
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8">
                {slide.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-400 transition">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
                  Watch Video
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center relative mt-6 md:mt-0">
              <div className="relative w-[300px] sm:w-[380px] md:w-[480px] lg:w-[550px] aspect-[4/3]">
                {/* Decorative Dots */}
                <span className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-400 rounded-full z-20"></span>
                <span className="absolute -bottom-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full z-20"></span>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg rotate-3 w-full h-full relative">
                  <Image
                    src={slide.img}
                    alt="Banner"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for slider */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white/90" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const slides = [
//   {
//     heading: (
//       <>
//         Comfort Meets{" "}
//         <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
//           Style!
//         </span>
//       </>
//     ),
//     desc: "Soft, colorful clothing that kids love to wear and parents trust for quality.",
//     img: "/banner/kid.jpg",
//   },
//   {
//     heading: (
//       <>
//         Playful{" "}
//         <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Designs!
//         </span>
//       </>
//     ),
//     desc: "Fun patterns and bright colors for every adventure.",
//     img: "/banner/kid2.jpg",
//   },
//   {
//     heading: (
//       <>
//         Trusted{" "}
//         <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
//           Quality!
//         </span>
//       </>
//     ),
//     desc: "Durable fabrics and comfy fits for happy kids and parents.",
//     img: "/banner/kid3.jpg",
//   },
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
//       {/* Slider Wrapper */}
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide, idx) => (
//           <div
//             key={idx}
//             className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-12"
//           >
//             {/* Left Content */}
//             <div className="flex-1 max-w-xl text-center md:text-left">
//               <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
//                 {slide.heading}
//               </h1>
//               <p className="text-base sm:text-lg text-white/90 mb-8">
//                 {slide.desc}
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                 <button className="bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-400 transition">
//                   Shop Now
//                 </button>
//                 <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
//                   Watch Video
//                 </button>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
//               <div className="relative w-[260px] h-[180px] sm:w-[340px] sm:h-[220px] md:w-[500px] md:h-[350px]">
//                 {/* Decorative Dots */}
//                 <span className="absolute -top-6 -left-6 w-8 h-8 sm:w-10 sm:h-10 bg-pink-400 rounded-full z-20"></span>
//                 <span className="absolute -bottom-6 -right-6 w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full z-20"></span>

//                 {/* Image */}
//                 <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-3 w-full h-full">
//                   <Image
//                     src={slide.img}
//                     alt="Banner"
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots for slider */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-3 h-3 rounded-full transition ${
//               idx === current ? "bg-white/90" : "bg-white/40"
//             }`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

