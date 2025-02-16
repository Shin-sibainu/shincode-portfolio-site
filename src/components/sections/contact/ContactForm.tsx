import LinkButton from '@/components/ui/link-button';
import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-start py-8 px-6 lg:p-12 gap-6 md:gap-8 w-full">
      <div className="flex flex-col items-start gap-6 w-full">

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center py-[3px] px-[6px] gap-2.5 bg-primary-950 border-[1px] border-primary-950">
              <p className="font-notoSansJP font-medium text-xs leading-[18px] flex items-center tracking-wider text-white">
                必須
              </p>
            </div>
            <p className="font-notoSansJP font-medium text-sm md:text-base flex items-center tracking-wider text-primary-950">
              お名前
            </p>
          </div>
          <input
            type="text"
            className="flex items-start p-3 bg-white border-[1px] border-secondary-300 w-full text-secondary-900 placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider"
            placeholder="例）山田 太郎"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center py-[3px] px-[6px] gap-2.5 bg-primary-950 border-[1px] border-primary-950">
              <p className="font-notoSansJP font-medium text-xs leading-[18px] flex items-center tracking-wider text-white">
                必須
              </p>
            </div>
            <p className="font-notoSansJP font-medium text-sm md:text-base flex items-center tracking-wider text-primary-950">
              メールアドレス
            </p>
          </div>
          <input
            type="email"
            className="flex items-start p-3 bg-white border-[1px] border-secondary-300 w-full text-secondary-900 placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider"
            placeholder="例）example@example.com"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center py-[3px] px-[6px] gap-2.5 bg-white border-[1px] border-primary-950">
              <p className="font-notoSansJP font-medium text-xs leading-[18px] flex items-center tracking-wider text-primary-950">
                任意
              </p>
            </div>
            <p className="font-notoSansJP font-medium text-sm md:text-base flex items-center tracking-wider text-primary-950">
              会社名
            </p>
          </div>
          <input
            type="text"
            className="flex items-start p-3 bg-white border-[1px] border-secondary-300 w-full text-secondary-900 placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider"
            placeholder="例）株式会社 〇〇〇〇"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center py-[3px] px-[6px] gap-2.5 bg-primary-950 border-[1px] border-primary-950">
              <p className="font-notoSansJP font-medium text-xs leading-[18px] flex items-center tracking-wider text-white">
                必須
              </p>
            </div>
            <p className="font-notoSansJP font-medium text-sm md:text-base flex items-center tracking-wider text-primary-950">
              お問い合わせ種別
            </p>
          </div>
          <div className="relative w-full group">
            <select
              className="flex items-start p-3 bg-white border-[1px] border-secondary-300 w-full text-secondary-900 font-notoSansJP font-medium text-base tracking-wider appearance-none cursor-pointer group-hover:border-primary-950"
              defaultValue=""
              required
            >
              <option value="" disabled>以下から選択してください。</option>
              <option value="general">プログラミング学習について</option>
              <option value="business">ビジネスに関するお問い合わせ</option>
            </select>
            <div className="w-6 h-6 absolute flex items-center justify-center right-[9px] top-3 pointer-events-none group-hover:text-primary-950">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#73675B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center py-[3px] px-[6px] gap-2.5 bg-primary-950 border-[1px] border-primary-950">
              <p className="font-notoSansJP font-medium text-xs leading-[18px] flex items-center tracking-wider text-white">
                必須
              </p>
            </div>
            <p className="font-notoSansJP font-medium text-sm md:text-base flex items-center tracking-wider text-primary-950">
              具体的なご相談内容
            </p>
          </div>
          <textarea
            className="flex items-start p-3 bg-white border-[1px] border-secondary-300 w-full text-secondary-900 min-h-[144px] placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider"
            placeholder="例）Webアプリ開発の依頼についてZoomで相談したい。"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center py-[3px] px-[6px] gap-2.5 bg-primary-950 border-[1px] border-primary-950">
              <p className="font-notoSansJP font-medium text-xs leading-[18px] flex items-center tracking-wider text-white">
                必須
              </p>
            </div>
            <p className="font-notoSansJP font-medium text-sm md:text-base flex items-center tracking-wider text-primary-950">
              プライバシーポリシーへの同意
            </p>
          </div>
          <div className="flex items-center pt-1 gap-3">
            <input
              type="checkbox"
              required
              className="h-5 w-5 accent-white"
            />
            <label  className="font-notoSansJP font-medium text-sm leading-[21px] flex items-center tracking-wider text-primary-950">
              プライバシーポリシーに同意する
            </label>
          </div>
        </div>
      </div>

      <div className="w-full">
        <LinkButton
          href="#"
          text="送信する"
          variant="default"
        />
      </div>
    </div>
  )
};

export default ContactForm;
