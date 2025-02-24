"use client"

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { contactSchema } from './contact-schema';
import { sendContactForm } from './action';
import { useRouter } from 'next/navigation';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const ContactForm = () => {
  const router = useRouter();
  const [lastResult, formAction] = useFormState(sendContactForm, undefined);
  useEffect(() => {
    if (lastResult?.status === 'success') {
      router.push('/thanks');
    }
  }, [lastResult, router]);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactSchema });
    },
    shouldValidate: "onBlur"
  });

  return (
    <form className="flex flex-col items-start py-8 px-6 lg:p-12 gap-6 md:gap-8 w-full"
      action={formAction}
      id={form.id} 
      onSubmit={form.onSubmit}
    >
      <div className="flex flex-col items-start gap-6 w-full" >

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
            className={`flex items-start p-3 bg-white border-[1px] ${
              fields.name.errors ? 'border-warning' : 'border-secondary-300'
              } w-full text-secondary-900 placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider`}
            placeholder="例）山田 太郎"
            name={fields.name.name}
          />
          {fields.name.errors && (
            <p className="text-warning text-sm">{fields.name.errors}</p>
          )}
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
            name={fields.email.name}
            className={`flex items-start p-3 bg-white border-[1px] ${
              fields.email.errors ? 'border-warning' : 'border-secondary-300'
              } w-full text-secondary-900 placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider`}
              placeholder="例）example@example.com"
            />
          {fields.email.errors && (
            <p className="text-warning text-sm">{fields.email.errors}</p>
          )}
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
            name={fields.company.name}
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
              name={fields.inquiryType.name}
              className={`flex items-start p-3 bg-white border-[1px] ${
                fields.inquiryType.errors ? 'border-warning' : 'border-secondary-300'
                } w-full text-secondary-900 font-notoSansJP font-medium text-base tracking-wider appearance-none cursor-pointer group-hover:border-primary-950`}
              defaultValue=""
            >
              <option value="">以下から選択してください。</option>
              <option value="general">プログラミング学習について</option>
              <option value="business">ビジネスに関するお問い合わせ</option>
            </select>
            <div className="w-6 h-6 absolute flex items-center justify-center right-[9px] top-3 pointer-events-none group-hover:text-primary-950">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#73675B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          {fields.inquiryType.errors && (
            <p className="text-warning text-sm">{fields.inquiryType.errors}</p>
          )}
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
            name={fields.message.name}
            className={`flex items-start p-3 bg-white border-[1px] ${
              fields.message.errors ? 'border-warning' : 'border-secondary-300'
              } w-full text-secondary-900 min-h-[144px] placeholder:text-secondary-300 font-notoSansJP font-medium text-base tracking-wider`}
            placeholder="例）Webアプリ開発の依頼についてZoomで相談したい。"
          />
            {fields.message.errors && (
              <p className="text-warning text-sm">{fields.message.errors}</p>
            )}
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
              name={fields.privacyPolicy.name}
              className="h-5 w-5 accent-white"
              value="true"
            />

            <label className="font-notoSansJP font-medium text-sm leading-[21px] flex items-center tracking-wider text-primary-950">
              <PrivacyPolicyModal />
              に同意する
            </label>

          </div>
          {fields.privacyPolicy.errors && (
            <p className="text-warning text-sm">{fields.privacyPolicy.errors}</p>
          )}
        </div>
      </div>

      <div className="w-full">
        <button
          type="submit">
          送信する
        </button>
        {form.errors && (
        <div>
          <h2>Error:</h2>
          <ul>
            {form.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </form>
  )
};

export default ContactForm;
