import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Contact = () => {
  return (
    <div className="bg-primary-900 w-full h-[280px] py-16 px-0 md:px-6.67">
      <div className="w-full max-w-[1248px] px-6">
        <div className="gap-8 flex flex-col items-center font-notoSansJP">
          <div className="text-white md:text-2xl text-xl md:leading-9 leading-[30px] font-bold tracking-wider text-center">
            <p>お仕事、サービスに関するお問い合わせなど</p>
            <p>お気軽にご連絡ください</p>
          </div>  
          <Link href="/#" className="flex items-center gap-5 bg-white py-3 w-[252px] h-12 rounded-sm border border-white transition duration-300 ease-out hover:bg-primary-100 shadow-custom">
            <p className="text-base font-medium leading-6 text-left pl-10 text-primary-950">お問い合わせはこちら</p>
            <Image
              src="/button-arrow.svg"
              width={6}
              height={10}
              alt="allow"
              className="py-1 w-4 h-4 mt-1"
            />
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Contact;