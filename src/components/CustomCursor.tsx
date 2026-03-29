"use client";

// CUSTOM CURSOR DISABLED - Normal mouse pointer active
// To enable custom cursor, uncomment the code below

// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isIdle, setIsIdle] = useState(false);
//   const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//       setIsVisible(true);
//       setIsIdle(false);

//       if (idleTimerRef.current) {
//         clearTimeout(idleTimerRef.current);
//       }
//       idleTimerRef.current = setTimeout(() => setIsIdle(true), 3000);
//     };

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName.toLowerCase() === "a" ||
//         target.tagName.toLowerCase() === "button" ||
//         target.closest("a") ||
//         target.closest("button") ||
//         target.classList.contains("hover-trigger")
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };

//     const handleMouseLeave = () => setIsVisible(false);

//     window.addEventListener("mousemove", updateMousePosition);
//     window.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//       window.removeEventListener("mouseover", handleMouseOver);
//       document.removeEventListener("mouseleave", handleMouseLeave);
//       if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
//     };
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <>
//       <style jsx global>{`
//         * {
//           cursor: none !important;
//         }
//         body {
//           cursor: none !important;
//         }
//       `}</style>

//       {[...Array(3)].map((_, index) => (
//         <motion.div
//           key={index}
//           className="fixed rounded-full pointer-events-none z-[9998]"
//           style={{
//             width: 12 - index * 3,
//             height: 12 - index * 3,
//             background: "radial-gradient(circle, #ec4899 0%, transparent 70%)",
//             boxShadow: index === 0 ? "0 0 15px #ec4899" : "none",
//           }}
//           animate={{
//             x: mousePosition.x - (12 - index * 3) / 2,
//             y: mousePosition.y - (12 - index * 3) / 2,
//             scale: isHovering ? 1.5 - index * 0.1 : 1,
//             opacity: isHovering ? 0.7 - index * 0.15 : 0.8 - index * 0.2,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 500 - index * 50,
//             damping: 30 + index * 5,
//             mass: 0.2 + index * 0.1,
//           }}
//         />
//       ))}

//       <motion.div
//         className="fixed rounded-full pointer-events-none z-[9998]"
//         style={{
//           width: 40,
//           height: 40,
//           border: "2px solid #ec4899",
//           boxShadow: "0 0 30px #ec4899, inset 0 0 20px rgba(236, 72, 153, 0.3)",
//         }}
//         animate={{
//           x: mousePosition.x - 20,
//           y: mousePosition.y - 20,
//           scale: isHovering ? 2 : isIdle ? 1.2 : 1,
//           rotate: isIdle ? 360 : 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 150,
//           damping: 15,
//           mass: 1,
//           rotate: {
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear",
//           },
//         }}
//       />

//       <motion.div
//         className="fixed rounded-full pointer-events-none z-[9997]"
//         style={{
//           width: 60,
//           height: 60,
//           border: "1px solid rgba(236, 72, 153, 0.3)",
//           boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)",
//         }}
//         animate={{
//           x: mousePosition.x - 30,
//           y: mousePosition.y - 30,
//           scale: isHovering ? 2.5 : isIdle ? 1.3 : 1,
//           opacity: isHovering ? 0.6 : 0.4,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 100,
//           damping: 20,
//           mass: 1.5,
//         }}
//       />

//       <motion.div
//         className="fixed rounded-full pointer-events-none z-[9999]"
//         style={{
//           width: 10,
//           height: 10,
//           backgroundColor: "#ffffff",
//           boxShadow: "0 0 25px #ffffff, 0 0 50px #ec4899",
//         }}
//         animate={{
//           x: mousePosition.x - 5,
//           y: mousePosition.y - 5,
//           scale: isHovering ? 2.5 : 1,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 600,
//           damping: 20,
//           mass: 0.2,
//         }}
//       />

//       {isIdle && (
//         <motion.div
//           className="fixed rounded-full pointer-events-none z-[9996]"
//           style={{
//             width: 100,
//             height: 100,
//             border: "2px solid rgba(236, 72, 153, 0.2)",
//           }}
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{
//             x: mousePosition.x - 50,
//             y: mousePosition.y - 50,
//             scale: [0.5, 1.5, 0.5],
//             opacity: [0.8, 0, 0.8],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       )}
//     </>
//   );
// }

// Return null to show normal mouse pointer
export default function CustomCursor() {
  return null;
}
