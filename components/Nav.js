import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center flex-wrap bg-white text-darkGrey max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-12 md:px-12 lg:px-0 pb-6 gap-12'>
      <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4'>
          <Image src="/assets/logo.svg" width="75" height="40">
          </Image>
        </a>
      </Link>
      <button
        className='inline-flex p-3 md:hidden text-black ml-auto outline-none'
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
        <div className='flex flex-col md:flex-row justify-start md:w-auto w-full md:items-center items-start md:h-auto bg-lightGrey text-3xl md:text-sm md:bg-white text-veryDarkBlue md:text-darkGrey'>
          <ul className='flex flex-col md:flex-row py-6 px-2 gap-6 md:gap-12 text-veryDarkBlue md:text-darkGrey'>
            <li>
              <Link href='/portfolio'>
                <a className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer p-1 pl-6 pt-4 md:pl-0 hover:text-veryDarkBlue focus:text-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                    Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer p-1 pl-6 pt-4 md:pl-0 hover:text-veryDarkBlue focus:text-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer p-1 pl-6 pt-4 md:pl-0 hover:text-veryDarkBlue focus:text-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
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