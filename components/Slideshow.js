/* eslint-disable */
import React, {useState} from "react";
import Link from "next/link";
import slides from "../constants/slideshowData";

function Slideshow() {
  const [value, setValue] = useState(0);

  return (
    <div className='hidden mx-auto slideshow lg:flex lg:justify-center lg:relative lg:z-0 md:max-w-2xl lg:max-w-4xl'>
      <div className='relative z-10 bg-black bg-opacity-5'>
        <img className="hidden lg:flex" src={slides[value].image} layout="responsive"></img>
      </div>
      
      <div className='absolute left-0 z-10 max-w-xl text-white top-1/4 md:max-w-2xl lg:max-w-4xl'>
        <div id="paramour" className='px-12 md:px-24 lg:px-16'>
          <h2 className='pb-6 text-4xl font-bold md:text-5xl lg:text-6xl'>{slides[value].name}</h2>
          <p className='w-full py-4 text-lg lg:w-1/2'>{slides[value].description}</p>
          <div className='flex'>
            <Link href="/portfolio">
              <a className='px-8 py-4 bg-veryDarkBlue hover:bg-darkGrey text-start'>See Our Portfolio
              <span className='pl-4'>
                <img className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10" unoptimized></img>
              </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 z-10 -left-12'>
        <nav className="block">
          <ul className="flex flex-wrap pl-0 list-none rounded">
            <li className={(value === 0
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 0 ? setValue(0) : setValue(0)}
                className="relative flex items-center justify-center p-5 text-xs font-semibold leading-tight first:ml-0">
                01
              </button>
            </li>
            <li className={(value === 1
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 1 ? setValue(1) : setValue(1)} 
                className="relative flex items-center justify-center p-5 text-xs font-semibold leading-tight first:ml-0">
                02
              </button>
            </li>
            <li className={(value === 2
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 2 ? setValue(2) : setValue(2)} className="relative flex items-center justify-center p-5 text-xs font-semibold leading-tight first:ml-0">
                03
              </button>
            </li>
            <li className={(value === 3
                  ? "text-veryLightGrey bg-veryDarkBlue hover:text-veryLightGrey hover:bg-darkGrey"
                  : "text-darkGray bg-white hover:text-veryLightGrey hover:bg-darkGrey")}>
              <button onClick={() => value == 3 ? setValue(3) : setValue(3)} className="relative flex items-center justify-center p-5 text-xs font-semibold leading-tight first:ml-0">
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