"use client"

import React, { useState } from 'react';
import { pageLinks } from './headerLinks';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import HamburgerIcon from './HamburgerIcon';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <div className="p-2">
        <SheetTrigger asChild>
          <button
            className="relative flex items-center justify-center w-6 h-6"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </SheetTrigger>
      </div>
      <SheetContent closeable={false} className="bg-secondary-100 px-6 py-0">
        <div className="bg-white w-full">
          <nav>
            <ul className="flex flex-col gap-1 py-5 px-4">
              {pageLinks.map((pageLink) => (
                <Link
                  key={pageLink.title}
                  href={pageLink.href}
                  className="font-jost text-primary-950 py-[5px] text-sm font-medium leading-none tracking-wid text-left duration-500 ease-out hover:opacity-60"
                >
                  <li>{pageLink.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;