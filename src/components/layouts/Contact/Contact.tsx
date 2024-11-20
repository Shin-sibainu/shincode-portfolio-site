import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-primary-900">
      <div className="max-w-[1248px] px-6">
        <div className="space-y-8">
          <div className="text-center text-white font-notoSansJP font-bold text-xl md:text-2xl leading-[30px] md:leading-[36px] tracking-wider">
            <p>お仕事、サービスに関するお問い合わせなど</p>
            <p>お気軽にご連絡ください</p>
          </div>  

          <div className="flex flex-col justify-center items-center w-full">
            <Link
              href="/#"
              className="inline-flex items-center py-3 pl-12 md:pl-10 bg-white rounded-sm border border-white transition duration-300 ease-out shadow-contact hover:shadow-contact hover:bg-primary-100 pr-3 md:pr-4 group">
              <span className="font-notoSansJP font-medium text-base flex items-center text-primary-950 pr-5">
                お問い合わせはこちら
              </span>
              <span className="flex items-center justify-center flex-shrink-0 w-4 h-4 transition duration-300 ease-out group-hover:translate-x-1">
                <Image
                  src="/button-arrow.svg"
                  width={6}
                  height={10}
                  alt="allow"
                  className="w-auto h-auto pt-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;