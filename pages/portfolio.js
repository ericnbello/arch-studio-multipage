import Link from "next/link";
import projectData from "../constants/portfolioData";

export default function Portfolio() {
    return(
        <div className="flex flex-col lg:grid lg:grid-cols-3 text-white gap-6 py-16">

            {/* Projects */}
            {projectData.projects.map((proj) => (
            <div className='mx-auto bg-black bg-opacity-5 relative z-0'>
                <Link href="/">
                    <a>
                        <img className="md:hidden" src={proj.images.mobile} layout="responsive"></img>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <img className="hidden md:flex lg:hidden" src={proj.images.tablet} layout="responsive"></img>
                    </a>
                </Link>
                <Link href="/">
                    <a className="hover:bg-black hover:mix-blend-overlay">
                        <img className="hidden lg:flex" src={proj.images.desktop} layout="responsive"></img>
                    </a>
                </Link>
                
                <div className='absolute z-10 bottom-5 left-5'>
                    <p className='font-bold text-3xl'>{proj.title}</p>
                    <p>{proj.date}</p>
                </div>
            </div>
            ))}
        </div>
    )
}