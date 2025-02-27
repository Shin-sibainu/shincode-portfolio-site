import ContactForm from '@/components/sections/contact/ContactForm';
import React from 'react';

const Contact = () => {
  return (
    <main className="flex flex-col justify-center items-center py-10 md:py-16 w-full md:px-6.67">
      <div className="flex flex-col items-start px-6 max-w-[1248px] w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full">
          <div className="flex flex-col justify-center items-start gap-6 w-full max-w-[520px]">
            <div className="flex flex-col items-start">
              <span className="font-jost font-medium text-lg leading-[27px] flex items-center tracking-wider text-primary-500">
                Contact
              </span>
              <h2 className="font-notoSansJP font-medium text-2xl leading-[36px] flex items-center tracking-wider text-primary-950">
                お問い合わせ
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-notoSansJP font-medium text-sm leading-[23px] flex items-center tracking-wider text-primary-950">
                お問い合わせありがとうございます。<br/>
                プログラミング学習、Web開発、テクニカルコンサルティングに関するご質問やご相談を承っております。<br/>
                お気軽にご連絡ください。通常2営業日以内にご返信いたします。
              </p>
              <p className="font-notoSansJP font-medium text-sm leading-[23px] flex items-center tracking-wider text-primary-950">
                お急ぎの場合や、より詳細な情報交換をご希望の場合は、Zoomでの無料相談も承っております。フォーム内でその旨をお知らせください。
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start bg-white w-full max-w-[600px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
};

export default Contact;
