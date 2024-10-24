/* eslint-disable */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex flex-wrap items-center max-w-xl gap-12 pb-6 mx-auto bg-white md:px-12 text-darkGrey md:max-w-2xl lg:max-w-4xl lg:px-0'>
      <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4'>
          <img src="/assets/logo.svg" width="75" height="40" unoptimized>
          </img>
        </a>
      </Link>
      <button
        className='inline-flex p-3 ml-auto text-black outline-none md:hidden'
        onClick={handleClick}
      >
        <img src={`${
          active ? '/assets/icons/icon-close.svg' : '/assets/icons/icon-hamburger.svg'
        }`} />
      </button>

      <div
        className={`${
          active ? '' : 'hidden'
        } w-4/5 md:w-full right-0 md:-right-24 max-w-xl mx-auto absolute md:flex z-20 -m-2 mt-72 md:max-w-2xl lg:max-w-4xl md:flex-grow md:z-0 md:m-0 md:mt-0 text-sm md:text-darkGrey`}
      >
        <div className='flex flex-col items-start justify-start w-full text-3xl md:flex-row md:w-auto md:items-center md:h-auto bg-lightGrey md:text-sm md:bg-white text-veryDarkBlue md:text-darkGrey'>
          <ul className='flex flex-col gap-6 px-2 py-6 md:flex-row md:gap-12 text-veryDarkBlue md:text-darkGrey'>
            <li>
              <Link href='/portfolio'>
                <a className="inline-flex items-center p-1 pt-4 pl-6 font-medium leading-6 transition duration-75 ease-in-out cursor-pointer md:pl-0 hover:text-veryDarkBlue focus:text-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                    Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className="inline-flex items-center p-1 pt-4 pl-6 font-medium leading-6 transition duration-75 ease-in-out cursor-pointer md:pl-0 hover:text-veryDarkBlue focus:text-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className="inline-flex items-center p-1 pt-4 pl-6 font-medium leading-6 transition duration-75 ease-in-out cursor-pointer md:pl-0 hover:text-veryDarkBlue focus:text-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                Contact
                </a>
              </Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};