/* eslint-disable */
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import slides from "../constants/slideshowData";

function Slideshow() {
  const [value, setValue] = useState(0);

  return (
    <div className='slideshow hidden lg:flex lg:justify-center lg:relative lg:z-0 md:max-w-2xl lg:max-w-4xl mx-auto'>
      <div className='relative z-10 bg-black bg-opacity-5'>
        <img className="hidden lg:flex" src={slides[value].image} layout="responsive"></img>
      </div>
      
      <div className='absolute z-10 left-0 top-1/4 text-white max-w-xl md:max-w-2xl lg:max-w-4xl'>
        <div id="paramour" className='px-12 md:px-24 lg:px-16'>
          <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl pb-6'>{slides[value].name}</h2>
          <p className='w-full text-lg lg:w-1/2 py-4'>{slides[value].description}</p>
          <div className='flex'>
            <Link href="/portfolio">
              <a className='bg-veryDarkBlue hover:bg-darkGrey px-8 py-4 text-start'>See Our Portfolio
              <span className='pl-4'>
                <Image className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></Image>
              </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute z-10 -left-12 bottom-0'>
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            <li className={(value === 0
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 0 ? setValue(0) : setValue(0)}
                className="first:ml-0 text-xs font-semibold flex p-5 items-center justify-center leading-tight relative">
                01
              </button>
            </li>
            <li className={(value === 1
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 1 ? setValue(1) : setValue(1)} 
                className="first:ml-0 text-xs font-semibold flex p-5 items-center justify-center leading-tight relative">
                02
              </button>
            </li>
            <li className={(value === 2
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 2 ? setValue(2) : setValue(2)} className="first:ml-0 text-xs font-semibold flex p-5 items-center justify-center leading-tight relative">
                03
              </button>
            </li>
            <li className={(value === 3
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 3 ? setValue(3) : setValue(3)} className="first:ml-0 text-xs font-semibold flex p-5 items-center justify-center leading-tight relative">
                04
              </button>
            </li>
          </ul>
        </nav>          
      </div>
    </div>
  );
}

export default Slideshow;