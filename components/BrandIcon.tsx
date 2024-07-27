import React from "react";

export default function BrandIconSvg() {
  return (
    <>
      <style jsx>{`
        #Brand path {
          @apply transition-all duration-500 ease-in-out;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: animate 8s ease-in-out forwards infinite;
        }

        @keyframes animate {
          0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 500;
          }
          50% {
            stroke-dashoffset: 500;
            stroke-dasharray: 100;
          }
          100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 500;
          }
        }

        #Brand stop:nth-child(1) {
          animation: gradient 4s ease infinite alternate;
        }

        #Brand stop:nth-child(2) {
          animation: gradient 4s ease infinite;
        }

        @keyframes gradient {
          0% {
            stop-color: #a293ff;
          }
          50% {
            stop-color: #00f0ff;
          }
          100% {
            stop-color: #a293ff;
          }
        }

        #Brand:hover > * {
          animation-play-state: paused;
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="50"
        fill="none"
        viewBox="0 0 42 50"
        id="Brand"
      >
        <path
          fill="url(#paint0_linear_90_16)"
          d="M20.833 0C13.649 0 8 5.649 8 12.833s5.649 12.833 12.833 12.833h6.5c2.548 0 4.667 2.119 4.667 4.667s-2.119 4.667-4.667 4.667h-13.5v6.5h13.5c7.184 0 12.833-5.649 12.833-12.833s-5.649-12.833-12.833-12.833h-6.5c-2.548 0-4.667-2.119-4.667-4.667S18.285 0 20.833 0h6.5v6.5h-6.5z"
        ></path>
        <path
          stroke="#000"
          strokeWidth="0.5"
          d="M20.833 0C13.649 0 8 5.649 8 12.833s5.649 12.833 12.833 12.833h6.5c2.548 0 4.667 2.119 4.667 4.667s-2.119 4.667-4.667 4.667h-13.5v6.5h13.5c7.184 0 12.833-5.649 12.833-12.833s-5.649-12.833-12.833-12.833h-6.5c-2.548 0-4.667-2.119-4.667-4.667S18.285 0 20.833 0h6.5v6.5h-6.5z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_90_16"
            x1="2.522"
            x2="46.64"
            y1="24.976"
            y2="24.976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A293FF"></stop>
            <stop offset="1" stopColor="#00F0FF"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
