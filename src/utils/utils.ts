import React from "react"
import ReactDOM from "react-dom";

// export const customCursor = (): void => {
//     console.log("debug", 'we are here')
//   const myCursor = document.querySelectorAll(".mouse-cursor");
//   const hamburger = document.querySelector(".hamburger");
//   const kura_tm_topbar = document.querySelector(".kura_tm_topbar ");
//   const pointer = document.querySelector(".cursor-pointer");
//   const e = document.querySelector(".cursor-inner") as HTMLElement;
//   const t = document.querySelector(".cursor-outer") as HTMLElement;

//   const mouseEvent = (element: any) => {
  
//     ReactDOM.findDOMNode(element)!.addEventListener("mouseenter", () => {
//       e.classList.add("cursor-hover");
//       t.classList.add("cursor-hover");
//     });
//     ReactDOM.findDOMNode(element)!.addEventListener("mouseleave", () => {
//       e.classList.remove("cursor-hover");
//       t.classList.remove("cursor-hover");
//     });
//   };

//   if (myCursor.length) {
//     if (document.body) {
//       let n: number, i: number = 0, o: boolean = false;
//       window.onmousemove = (s: MouseEvent) => {
//         o || (t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`);
//         e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
//         n = s.clientY;
//         i = s.clientX;
//       };

//       document.body.addEventListener("mouseenter", () => {
//         const a = document.querySelectorAll("a");
//         e.classList.add("cursor-inner");
//         t.classList.add("cursor-outer");

//         for (let i = 0; i < a.length; i++) {
//           const element = a[i] as HTMLElement;
//           mouseEvent(element);
//         }

//         hamburger && mouseEvent(hamburger as HTMLElement);
//         kura_tm_topbar && mouseEvent(kura_tm_topbar as HTMLElement);
//         pointer && mouseEvent(pointer as HTMLElement);
//       });

//       e.style.visibility = "visible";
//       t.style.visibility = "visible";
//     }
//   }
// };






