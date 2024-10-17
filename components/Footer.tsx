import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to elevate your  digital presence?<span className="text-purple"> Contact me today!</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:areebazafar715@gmail.com">
          <MagicButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link}>
              <img src={info.img} alt="icons" width={20} height={20} 
              />
              </Link>
            </div>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light mt-4 md:mt-1 lg:mt-1">
          Copyright &copy; 2024 Areeba Zafar
        </p>
      </div>
    </footer>
  );
};

export default Footer;