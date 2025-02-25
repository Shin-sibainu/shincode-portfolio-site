import ArrowIcon from '@/components/ui/ArrowIcon';
import React from 'react'
import { useFormStatus } from 'react-dom';

const ContactSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="flex justify-center items-center relative py-3 pr-10 sm:pr-[52px] pl-10 bg-primary-950 hover:bg-white w-full lg:w-auto border-[1px] border-primary-950 rounded-[2px] transition duration-300 ease-out group"
      >
        <span className="font-notoSansJP font-medium text-base flex items-center text-white group-hover:text-primary-950">
          {pending ? '送信中...' : '送信する'}
        </span>
        <span className="w-4 h-4 text-white group-hover:text-primary-950 absolute right-[14px] pt-1 flex items-center justify-center transition duration-300 ease-out group-hover:translate-x-1" aria-hidden="true">
          {pending ? (
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <ArrowIcon />
          )}
        </span>
      </button>
    </>
  )
};

export default ContactSubmitButton;
