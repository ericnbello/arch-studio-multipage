/* eslint-disable */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-xl px-0 mx-auto md:max-w-2xl lg:max-w-4xl">
        <div className="flex flex-col items-center gap-5 pb-6 md:relative md:z-0 md:flex-row lg:gap-20 bg-veryLightGrey md:pb-0 md:w-10/12 lg:w-11/12">
          <div className="flex flex-row justify-between -mt-8 md:mt-0 md:py-2 bg-veryDarkBlue">
            <Link href="/">
              <a className="p-6">
                  <img src="/assets/logo-white.svg" width="50" height="20" fill="#FFF" unoptimized></img>
              </a>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
              <div className='flex flex-row justify-evenly'>
                <ul className="flex flex-col justify-end gap-5 md:flex-row md:gap-6">
                    <li className="py-3 md:py-0 md:pb-4">
                        <Link href="/portfolio">
                            <a className="pt-2 transition duration-150 ease-in-out text-darkGrey">
                                Portfolio
                            </a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-0 md:pb-4">
                        <Link href="/about">
                            <a className="transition duration-150 ease-in-out text-darkGrey">
                                About Us
                            </a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-0 md:pb-4">
                        <Link href="/contact">
                            <a className="transition duration-150 ease-in-out text-darkGrey">
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
              </div>

              <div className='flex md:absolute md:z-10 md:right-12 lg:right-0 md:-mr-44 md:w-4/12'>
                <Link href="/portfolio">
                    <a className='px-4 py-2 text-white bg-veryDarkBlue hover:bg-darkGrey'>
                        See Our Portfolio
                        <span className='pl-4'>
                          <img className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10" unoptimized></img>
                        </span>
                    </a>
                </Link>
             </div>
          </div>
        </div>
    </footer>
  );
}