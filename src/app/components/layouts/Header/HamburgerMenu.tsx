"use client"

import React, { useEffect, useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

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
        <div className="fixed inset-0 bg-opacity-100 z-40" onClick={() => setIsOpen(false)}></div>
        <div className="top-[77px] fixed inset-x-0 px-6 bg-secondary-100 z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white flex flex-col gap-1 py-5 px-4 z-60">
            <a href="#" className="font-jost text-primary-950 py-[5px] text-sm font-medium leading-none tracking-wid text-left duration-300 ease-out hover:opacity-60">ABOUT</a>
            <a href="#" className="font-jost text-primary-950 py-[5px] text-sm font-medium leading-none tracking-wid text-left duration-300 ease-out hover:opacity-60">SERVICES</a>
            <a href="#" className="font-jost text-primary-950 py-[5px] text-sm font-medium leading-none tracking-wid text-left duration-300 ease-out hover:opacity-60">CONTACT</a>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

// "確認すること

// 中サイズのときのハンバーガーメニューの文字サイズ
// ハンバーガーメニューが開いた後、ドロップダウン以外をクリックすると閉じるように実装
// ハンバーガーメニューを開くときのアニメーション"

export default HamburgerMenu;