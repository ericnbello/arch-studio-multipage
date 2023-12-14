/* eslint-disable */
import ContactForm from '../components/ContactForm';

// const imageLoader = ({ src, width, quality }) => {
//     src = 'maps/api/staticmap?&zoom=5&size='
//     width = '800'
    
//     return `https://maps.googleapis.com/${src}${width}x400&maptype=roadmap&markers=color:black%7Clabel:S%7C35.952461,-83.991531&markers=color:black%7Clabel:C%7C29.897430,-97.827507&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}${quality || 75}`
//   }
  
export default function Contact() {
    return(
        <div className="w-full max-w-xl mx-auto md:max-w-2xl lg:max-w-4xl">
            <div className='relative z-0 flex flex-col justify-between mx-auto hero'>
                <div className='px-0 md:px-12 lg:px-0'>
                    <img className="flex w-screen md:hidden" src="/assets/contact/mobile/image-hero.jpg" layout="responsive"></img>          
                    <img className="hidden md:flex lg:hidden" src="/assets/contact/tablet/image-hero.jpg" layout="responsive"></img>
                    <img className="hidden lg:flex" src="/assets/contact/desktop/image-hero.jpg" layout="responsive"></img>
                </div>
            
                <div className='z-10 flex-col w-4/5 max-w-xl pt-16 pl-12 -mt-16 text-black bg-white md:absolute lg:w-1/2 md:pl-36 md:pt-56 md:bottom-0 md:right-0 md:max-w-2xl lg:max-w-4xl'>
                        <h1 className="hidden md:flex md:justify-end md:-mt-72 md:font-bold md:text-9xl md:text-veryLightGrey">Contact</h1>
                        <h2 className='pb-6 text-4xl font-bold md:text-5xl lg:text-5xl'> Tell us about your project</h2>
                        <p className='w-full py-2'>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                </div>
            </div>

            <div className='flex flex-col w-full max-w-xl gap-6 px-12 pt-24 pb-16 mx-auto locations lg:flex-row md:max-w-2xl lg:max-w-4xl lg:px-0'>
                <div className='flex lg:w-1/3'>
                    <div className=''>
                        <h2 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Contact<br></br>Details</h2>
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <div className="flex flex-col w-full gap-16 lg:flex-row">
                        <div className="flex flex-col justify-between md:flex-row lg:flex-col">
                            <div className="w-full md:w-1/2 lg:w-full">
                                <p className='pb-6 font-bold'>Main Office</p>
                                <p>Mail: archone@mail.com</p>
                                <p>Address: 1892 Chenoweth Drive TN</p>
                                <p>Phone: 123-456-3451</p>
                            </div>
                            <div className="flex items-end w-full md:w-1/2 lg:w-full md:justify-end lg:justify-start">
                                <a className="font-bold cursor-pointer hover:underline">View on Map
                                    <span className='pl-4'>
                                        <img className="" src="/assets/icons/icon-arrow-black.svg" height="10" width="10" unoptimized></img>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between md:flex-row lg:flex-col">
                            <div className="w-full md:w-1/2 lg:w-full">
                                <p className='pb-6 font-bold'>Office II</p>
                                <p>Mail: archtwo@mail.com</p>
                                <p>Address: 3399 Wines Lane TX</p>
                                <p>Phone: 832-123-4321</p>
                            </div>
                            <div className="flex items-end w-full md:w-1/2 lg:w-full md:justify-end lg:justify-start">
                                <a className="font-bold cursor-pointer hover:underline">View on Map
                                    <span className='pl-4'>
                                        <img className="" src="/assets/icons/icon-arrow-black.svg" height="10" width="10" unoptimized></img>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-12 mx-auto map md:px-12 lg:px-0">
                <img className="px-12" src={`https://maps.googleapis.com/maps/api/staticmap?&zoom=5&size=800x400&maptype=roadmap&markers=color:black%7Clabel:S%7C35.952461,-83.991531&markers=color:black%7Clabel:C%7C29.897430,-97.827507&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`} width="2000" height="1200"></img>
            </div>
            
            <div className='justify-center max-w-xl px-12 pt-10 pb-16 mx-auto contact-form md:max-w-2xl lg:max-w-4xl lg:px-0 lg:flex lg:flex-row lg:gap-16'>
                <div className="flex w-full lg:w-1/3">
                    <h2 className="pb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Connect with us</h2>
                </div>
                <div className="flex flex-col w-full lg:w-2/3">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}