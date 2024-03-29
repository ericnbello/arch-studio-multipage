/* eslint-disable */
import Link from 'next/link';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto">

      <Slideshow />

      <div className='relative z-0 flex justify-center mx-auto hero md:max-w-2xl lg:max-w-4xl'>
        <div className='relative z-10 bg-black bg-opacity-5'>
          <img className="flex w-screen md:hidden" src="/assets/home/mobile/image-hero-paramour.jpg" layout="responsive"></img>          
          <img className="hidden md:flex lg:hidden" src="/assets/home/tablet/image-hero-paramour.jpg" layout="responsive"></img>
        </div>
        
        <div className='absolute left-0 z-10 max-w-xl text-white top-1/4 md:max-w-2xl lg:max-w-4xl'>
          <div id="paramour" className='px-12 md:px-24 lg:hidden lg:px-16'>
            <h2 className='pb-6 text-4xl font-bold md:text-5xl lg:text-6xl'>Project<br></br>Paramour</h2>
            <p className='w-full py-4 text-lg lg:w-1/2'>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
            <div className='flex'>
              <Link href="/portfolio">
                <a className='px-8 py-4 bg-veryDarkBlue hover:bg-darkGrey text-start'>See Our Portfolio
                <span className='pl-4'>
                  <img className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></img>
                </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-row w-full max-w-xl px-12 pt-24 pb-16 mx-auto welcome lg:px-0 md:max-w-2xl lg:max-w-4xl'>
        <div className='relative z-0 flex lg:w-2/3'>
          <div className='lg:px-16 md:pt-12 lg:pt-16'>
            <h2 className='text-4xl font-bold md:text-5xl lg:text-6xl '>Welcome to<br></br>Arch Studio</h2>
            <div className="w-full py-6 lg:w-3/4">
              <p className='pb-6'>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.</p>
              
              <p className='pb-6'>Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.</p>
              
              <p className='pb-6'>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
            </div>
          </div>
          <div className='hidden md:w-full md:absolute md:z-10 md:-top-16 md:flex md:text-center lg:justify-start md:max-w-md'>
            <h2 className="font-bold text-6xl md:text-9xl lg:text-[175px] text-veryLightGrey my-20 md:my-0 ">
              Welcome
            </h2>
          </div>
        </div>
        <div className="flex justify-end lg:w-1/3">
          <img className="hidden lg:flex" src="/assets/home/desktop/image-welcome.jpg" layout="responsive"></img>
        </div>
      </div>
      
      <div className='relative z-0 flex justify-center max-w-xl pb-16 mx-auto small-team md:max-w-2xl lg:max-w-4xl '>
        <div className='bg-black bg-opacity-5'>
          <img className="flex w-screen md:hidden" src="/assets/home/mobile/image-small-team.jpg" layout="responsive"></img>
          <img className="hidden md:flex lg:hidden" src="/assets/home/tablet/image-small-team.jpg" layout="responsive"></img>
          <img className="hidden lg:flex" src="/assets/home/desktop/image-small-team.jpg" layout="responsive"></img>
        </div>
        
        <div className='absolute left-0 z-10 px-12 text-white top-1/3 md:px-24 lg:px-16'>
          <h2 className='pb-6 text-4xl font-bold md:text-5xl lg:text-6xl'>Small team,<br></br>big ideas</h2>
          <Link href="/about">
            <a className='px-8 py-4 bg-veryDarkBlue hover:bg-darkGrey'>About Us
              <span className='pl-4'>
                <img className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></img>
              </span>
            </a>
          </Link>
        </div>
      </div>
      
      <div className='flex flex-col w-full max-w-xl pb-16 mx-auto featured md:max-w-2xl lg:max-w-4xl'>
        <div className='hidden px-12 pb-12 md:flex md:justify-between lg:px-0'>
          <h2 className='font-bold md:text-5xl lg:text-6xl'>Featured</h2>
          <Link href="/portfolio">
            <a className='items-center hidden md:flex md:px-4 md:bg-veryDarkBlue md:hover:bg-darkGrey md:text-white'>See all
              <span className='pl-4'>
                <img className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></img>
              </span>
            </a>
          </Link>
        </div>

        {/*Featured Projects */}
        <div className='flex flex-col w-full gap-6 px-12 mx-auto text-white lg:flex-row lg:justify-evenly lg:px-0'>
          <div className='flex text-black md:hidden'>
            <h2 className='flex text-4xl font-bold md:hidden'>Featured</h2>
          </div>

          {/* Project 1*/}
          <div className='relative right-0 z-0 mx-auto'>
            <img className="md:hidden" src="/assets/portfolio/mobile/image-del-sol.jpg" layout="responsive" alt="Project del sol screenshot"></img>
            <img className="hidden md:flex md:bg-cover lg:hidden" src="/assets/portfolio/tablet/image-del-sol.jpg" layout="responsive" alt="Project del sol screenshot"></img>
            <img className="hidden lg:flex" src="/assets/portfolio/desktop/image-del-sol.jpg" layout="responsive" alt="Project del sol screenshot"></img>
              
            <div className='absolute z-10 bottom-5 left-5'>
              <p className='text-2xl font-bold'>Project Del Sol</p>
              <Link href="/portfolio">
                <a className='text-white hover:underline hover:font-bold'>View All Projects</a>
              </Link>
            </div>

            <div className='absolute z-10 hidden md:top-1/4 md:right-0 lg:top-1 lg:right-1 md:flex'>
              <p className='font-bold opacity-75 md:text-9xl lg:text-8xl'>1</p>
            </div>
          </div>

          {/* Project 2*/}
          <div className='relative z-0 mx-auto bg-black bg-opacity-5'>
            <img className="md:hidden" src="/assets/portfolio/mobile/image-228b.jpg" layout="responsive"></img>
            <img className="hidden md:flex lg:hidden" src="/assets/portfolio/tablet/image-228b.jpg" layout="responsive"></img>
            <img className="hidden lg:flex" src="/assets/portfolio/desktop/image-228b.jpg" layout="responsive"></img>

            <div className='absolute z-10 bottom-5 left-5'>
              <p className='text-2xl font-bold'>228B Tower</p>
              <Link href="/portfolio">
                <a className='text-white hover:underline hover:font-bold'>View All Projects</a>
              </Link>            
            </div>

            <div className='absolute z-10 hidden md:top-1/4 md:right-0 lg:top-1 lg:right-1 md:flex'>
              <p className='font-bold opacity-75 md:text-9xl lg:text-8xl'>2</p>
            </div>
          </div>

          {/* Project 3*/}
          <div className='relative z-0 mx-auto bg-black bg-opacity-5'>
            <img className="md:hidden" src="/assets/portfolio/mobile/image-prototype.jpg" layout="responsive"></img>
            <img className="hidden md:flex lg:hidden" src="/assets/portfolio/tablet/image-prototype.jpg" layout="responsive"></img>
            <img className="hidden lg:flex" src="/assets/portfolio/desktop/image-prototype.jpg" layout="responsive"></img>

            <div className='absolute z-10 bottom-5 left-5'>
              <p className='text-2xl font-bold'>Le Prototype</p>
              <Link href="/portfolio">
                <a className='text-white hover:underline hover:font-bold'>View All Projects</a>
              </Link>            
            </div>

            <div className='absolute z-10 hidden md:top-1/4 md:right-0 lg:top-1 lg:right-1 md:flex'>
              <p className='font-bold opacity-75 md:text-9xl lg:text-8xl'>3</p>
            </div>
          </div>

          <Link href="/portfolio">
            <a className='items-center px-4 py-2 text-center text-white md:hidden bg-veryDarkBlue hover:bg-darkGrey'>See all
              <span className='pl-4'>
                <img className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></img>
              </span></a>
          </Link> 
        </div>
      </div>
    </div>
  )
}
