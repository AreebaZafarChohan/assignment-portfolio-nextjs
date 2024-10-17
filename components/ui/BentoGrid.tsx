"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from 'react-lottie';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "areebazafar715@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
        <div className={`${id === 6 && 'flex justify-center'} h-full`}>
            <div className="w-full h-full absolute">
                {
                    img && (
                        <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, 'object-cover, object-center')}
                        />
                    )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                {
                    spareImg && (
                        <img
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover, object-center w-full h-full'}
                        />
                    )}
            </div>
            {id === 6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>

                </BackgroundGradientAnimation>
            )}
            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10 ">
          {title}
        </div>
        <div className="font-sans font-extralight text-sm md:text-xs lg:text-base text-[#c1c2d3] z-10">
                    {description}
                </div>
            {id === 2 && <GlobeDemo/>}
            {id === 3 && (
                <div className="flex justify-between gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                    <div className="flex flex-col gap-3 lg:gap-8">
                        {['Next.js', 'JavaScript', 'HTML'].map((item) => (
                            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                {item}
                            </span>
                        ))}
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-8">
                        {['CSS', 'Tailwind', 'TypeScript'].map((item) => (
                            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                {item}
                            </span>
                        ))}
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                    </div>
                </div>
            )}
            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    }
                  }}/>
                </div>
                <MagicButton 
                 title={copied ? "Email is Copied!" : "Copy my email address"}
                 icon={<IoCopyOutline />}
                 position="left"
                 handleclick={handleCopy}
                 otherClasses="!bg-[#161A31]"/>
              </div>
            )}
        </div>
    </div>
    </div>
  );
};
