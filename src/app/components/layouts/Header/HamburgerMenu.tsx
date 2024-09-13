"use client"

import React, { useState } from 'react';
import { pageLinks } from './headerNav';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="flex items-center p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      {isOpen && (
        <>
        <div className="fixed inset-0 bg-opacity-100 z-40 top-[77px]" onClick={() => setIsOpen(false)}></div>
        <div className="top-[77px] fixed inset-x-0 px-6 bg-secondary-100 z-50" onClick={() => setIsOpen(false)}>
          <nav>
            <ul className="bg-white flex flex-col gap-1 py-5 px-4 z-60">
              {pageLinks.map((pageLink) => (
                  <Link
                    key={pageLink.title}
                    href={pageLink.href}
                    className="font-jost text-primary-950 py-[5px] text-sm font-medium leading-none tracking-wid text-left duration-300 ease-out hover:opacity-60"
                  >
                    <li>{pageLink.title}</li>
                  </Link>
              ))}
            </ul>
          </nav>
        </div>
        </>
      )}
    </div>
  )
};

export default HamburgerMenu;