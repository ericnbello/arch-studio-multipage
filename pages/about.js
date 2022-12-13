/* eslint-disable */
import leaderData from "../constants/leaderData";

export default function About() {
    return(
        <div className="w-full mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl">
            <div className='hero flex flex-col justify-between md:max-w-2xl lg:max-w-4xl mx-auto relative z-0'>
                <div className='px-0 md:px-12 lg:px-0'>
                    <img className="flex w-screen md:hidden" src="/assets/about/mobile/image-hero.jpg" layout="responsive"></img>          
                    <img className="hidden md:flex lg:hidden" src="/assets/about/tablet/image-hero.jpg" layout="responsive"></img>
                    <img className="hidden lg:flex" src="/assets/about/desktop/image-hero.jpg" layout="responsive"></img>
                </div>
            
                <div className='flex-col md:absolute z-10 -mt-16 w-4/5 lg:w-1/2 md:pl-36 md:pt-56 pl-12 pt-16 md:bottom-0 md:right-0 bg-white text-black max-w-xl md:max-w-2xl lg:max-w-4xl'>
                    <h1 className="hidden md:flex md:justify-end md:-mt-72 md:font-bold md:text-9xl md:text-veryLightGrey">About</h1>
                    <h2 className='font-bold text-4xl md:text-5xl lg:text-5xl pb-6'>Your team of<br></br>professionals</h2>
                    <p className='w-full py-2'>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                </div>
            </div>
            
            <div className='heritage flex flex-col lg:flex-row w-full pt-24 pb-16 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-12 md:px-12 lg:px-0'>
                <div className='flex lg:w-1/2'>
                    <div className='md:pt-12 lg:pt-16'>
                        <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl'>Our<br></br>Heritage</h2>
                        <div className="w-full lg:w-3/4 py-6">
                            <p className='pb-6'>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                            
                            <p className='pb-6'>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.</p>
                            
                            <p className='pb-6'>Our small team of world-class professionals provides input on every project.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end lg:w-1/2">
                    <img className="hidden lg:flex" src="/assets/about/desktop/image-heritage.jpg" layout="responsive"></img>
                </div>
            </div>
            
            <div className='the-leaders justify-center max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-12 md:px-12 lg:px-0 pb-16 lg:flex lg:flex-row lg:gap-16'>
                <div className="font-bold text-3xl pb-6">
                    <h2 className="">The<br></br>Leaders</h2>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                    {leaderData.leaders.map((leader) => (
                    <div className='mx-auto pb-4 md:pb-0'>
                        <img className="flex" src={leader.headshot} layout="responsive"></img>
                        <div className="pt-2">
                            <p className="font-bold text-xl">{leader.name}</p>
                            <p className="text-sm">{leader.role}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}