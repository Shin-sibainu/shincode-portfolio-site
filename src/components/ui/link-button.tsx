import Link from "next/link";
import ArrowIcon from "./arrow-icon";

interface LinkButtonProps {
  href: string;
  text: string;
  variant: 'default' | 'white' | 'underline';
}

const LinkButton = ({ href, text, variant = 'default' }: LinkButtonProps) => {
  const baseStyles = "flex justify-center items-center relative";

  const variantStyles = {
    default: `${baseStyles} py-3 pr-10 sm:pr-[52px] pl-10 bg-primary-950 hover:bg-white w-full lg:w-auto border-[1px] border-primary-950 rounded-[2px] transition duration-300 ease-out group`,
    white: `${baseStyles} py-3 pr-[52px] pl-10 bg-white hover:bg-primary-100 border-[1px] border-white rounded-[2px] shadow-contact transition duration-300 ease-out group`,
    underline: `${baseStyles} py-2 pr-9 border-b-[1px] border-primary-950 group`
  };

  const textStyles = {
    default: "font-notoSansJP font-medium text-base flex items-center text-white group-hover:text-primary-950",
    white: "font-notoSansJP font-medium text-base flex items-center text-primary-950",
    underline: "font-notoSansJP font-medium flex items-center text-primary-950"
  };

  const arrowIconStyles = {
    default: "w-4 h-4 text-white group-hover:text-primary-950 absolute right-[14px] pt-1 flex items-center justify-center transition duration-300 ease-out group-hover:translate-x-1",
    white: "w-4 h-4 text-primary-950 absolute right-[14px] pt-1 flex items-center justify-center transition duration-300 ease-out group-hover:translate-x-1",
    underline: "w-4 h-4 text-primary-950 absolute right-[9px] pt-1 flex items-center justify-center transition duration-300 ease-out group-hover:translate-x-1"
  };

  return (
    <Link 
      href={href} 
      className={variantStyles[variant]}
    >
      <span className={textStyles[variant]}>
        {text}
      </span>
      <span className={arrowIconStyles[variant]} aria-hidden="true">
        <ArrowIcon />
      </span>
    </Link>
  );
};

export default LinkButton;