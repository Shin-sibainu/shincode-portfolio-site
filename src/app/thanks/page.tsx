import LinkButton from '@/components/ui/link-button';
import React from 'react';

const Thanks = () => {
  return (
    <main className="flex flex-col justify-center items-center py-10 md:py-16 w-full md:px-6.67"> 
      <div className="flex flex-col items-start px-6 w-full max-w-[1248px]">
        <section className="flex flex-col items-start gap-8 w-full">
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex flex-col items-start">
              <p className="font-jost font-medium text-lg leading-[27px] flex items-center tracking-wider text-primary-500">
                Contact
              </p>
              <h1 className="font-notoSansJP font-medium text-2xl leading-[36px] flex items-center tracking-wider text-primary-950">
                お問い合わせ 送信完了
              </h1>
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              <p className="font-notoSansJP font-medium text-sm leading-[23px] flex items-center tracking-wider text-primary-950">
                お問い合わせありがとうございます。<br/>
                お問い合わせ頂いた内容につきましては、確認の上、担当者よりご連絡させて頂きます。<br/>
                2営業日以内に返信がない場合は、お手数ですが再度ご連絡頂けますようお願い致します。
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <LinkButton
              href="/"
              text="TOPページに戻る"
              variant="default"
            />
          </div>
        </section>
      </div>
    </main>
  )
};

export default Thanks;
