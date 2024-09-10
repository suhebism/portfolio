// 'use client'
// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";
// import Image from "next/image";
// export default function App({pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,className }) {
//   const ref = useRef(null);
//   const { scrollXProgress } = useScroll({ container: ref });

//   return (
//     <>
//       <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
//         <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="30"
//           pathLength="1"
//           className="indicator"
//           style={{ pathLength: scrollXProgress }}
//         />
//       </svg>
//       <ul ref={ref}>
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic1} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic2} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic3} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic4} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic5} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic6} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic7} />
//         </li >
//         <li className={`flex-shrink-0 flex-grow-0 ${className}`} >
//             <Image src={pic8} />
//         </li >

//       </ul>
//     </>
//   );
// }

"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import {ChevronsRight} from 'lucide-react'

export default function App({ pics = [], className }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between items-center w-full">
        <div className="flex">
            <h1 className="font-light">Swipe to right</h1>
            <ChevronsRight />
        </div>
        <svg id="progress" width="30" height="30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
      </div>
      <ul ref={ref} className="flex">
        {pics.map((pic, index) => (
          <li key={index} className={`flex-shrink-0 flex-grow-0 ${className}`}>
            <Image
              width={100}
              height={100}
              src={pic}
              alt={`Image ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
