import React from 'react';

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div>
      <svg
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default HamburgerIcon;