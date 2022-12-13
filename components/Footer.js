/* eslint-disable */
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="max-w-xl md:max-w-2xl lg:max-w-4xl px-0 mx-auto">
        <div className="flex flex-col md:relative md:z-0 md:flex-row gap-5 lg:gap-20 items-center bg-veryLightGrey pb-6 md:pb-0 md:w-10/12 lg:w-11/12">
          <div className="flex flex-row justify-between -mt-8 md:mt-0 md:py-2 bg-veryDarkBlue">
            <Link href="/">
              <a className="p-6">
                  <Image src="/assets/logo-white.svg" width="50" height="20" fill="#FFF"></Image>
              </a>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
              <div className='flex flex-row justify-evenly'>
                <ul className="flex flex-col md:flex-row justify-end gap-5 md:gap-6">
                    <li className="py-3 md:py-0 md:pb-4">
                        <Link href="/portfolio">
                            <a className="text-darkGrey transition ease-in-out duration-150 pt-2">
                                Portfolio
                            </a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-0 md:pb-4">
                        <Link href="/about">
                            <a className="text-darkGrey transition ease-in-out duration-150">
                                About Us
                            </a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-0 md:pb-4">
                        <Link href="/contact">
                            <a className="text-darkGrey transition ease-in-out duration-150">
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
              </div>

              <div className='flex md:absolute md:z-10 md:right-12 lg:right-0 md:-mr-44 md:w-4/12'>
                <Link href="/portfolio">
                    <a className='bg-veryDarkBlue text-white hover:bg-darkGrey py-2 px-4'>
                        See Our Portfolio
                        <span className='pl-4'>
                          <Image className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></Image>
                        </span>
                    </a>
                </Link>
             </div>
          </div>
        </div>
    </footer>
  );
}