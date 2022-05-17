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
    <nav className='flex items-center flex-wrap bg-white max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-12 md:px-12 lg:px-0 pb-6 gap-12'>
      <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4'>
          <Image src="/assets/logo.svg" width="75" height="40">
          </Image>
        </a>
      </Link>
      <button
        className='inline-flex p-3 md:hidden text-black ml-auto hover:text-blue outline-none'
        onClick={handleClick}
      >
        <img src={`${
          active ? '/assets/icons/icon-close.svg' : '/assets/icons/icon-hamburger.svg'
        }`} />
      </button>

      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full md:inline-flex md:flex-grow md:w-auto uppercase text-sm`}
      >
        <div className='md:inline-flex md:flex-row md:justify-start md:w-auto w-full md:items-center items-start flex flex-col md:h-auto'>
            <ul className='flex gap-12'>
                <li>
                    <Link href='/portfolio'>
                        <a className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-black p-1 hover:border-b-2 hover:border-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                            Portfolio
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-black p-1 hover:border-b-2 hover:border-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
                        About Us
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-black p-1 hover:border-b-2 hover:border-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue">
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