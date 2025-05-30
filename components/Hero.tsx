import React from 'react';

// Define the ArrowRightIcon SVG directly within Hero.tsx
const ArrowRightSvgIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32">
      <h1
        className="
          text-6xl sm:text-7xl md:text-8xl lg:text-9xl
          font-black tracking-tighter leading-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-yellow-300 via-lime-400 to-yellow-200
          animate-gradient-xy
        "
        style={{
           animation: 'gradientXY 10s ease infinite alternate',
           backgroundSize: '200% 200%'
        }}
      >
        ASORBIT
      </h1>
      <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 max-w-2xl mx-auto">
        The <span className="text-yellow-300">REAL</span> foundation for the <span className="text-lime-300">FUTURE</span>
      </p>
      <a
        href="#explore"
        className="
          mt-8 sm:mt-10 md:mt-12 inline-flex items-center justify-center
          px-7 py-3 sm:px-8 sm:py-3.5
          text-base sm:text-lg font-semibold
          text-gray-900 bg-gradient-to-r from-yellow-300 via-lime-400 to-yellow-200
          hover:from-yellow-400 hover:via-lime-500 hover:to-yellow-300
          rounded-full
          shadow-lg hover:shadow-xl
          transform hover:scale-105 transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50
        "
      >
        Explore Now
        <ArrowRightSvgIcon className="ml-2 -mr-1 h-5 w-5 sm:h-6 sm:w-6" /> {/* Use the locally defined icon */}
      </a>
      <style>{`
        @keyframes gradientXY {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-xy {
          animation: gradientXY 8s ease infinite alternate;
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};