export default function Contact() {
    // var map = L.map('map').setView([51.505, -0.09], 13);

	// var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	// 	maxZoom: 18,
	// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
	// 		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	// 	id: 'mapbox/streets-v11',
	// 	tileSize: 512,
	// 	zoomOffset: -1
	// }).addTo(map);

    return(
        // <div>
        <div className="py-12">
            <div className="w-full mx-auto max-w-4xl">
                <div className='hero flex flex-col justify-between md:max-w-2xl lg:max-w-4xl mx-auto relative z-0'>
                    <div className='px-0 md:px-12 lg:px-0'>
                        <img className="flex w-screen md:hidden" src="/assets/contact/mobile/image-hero.jpg" layout="responsive"></img>          
                        <img className="hidden md:flex lg:hidden" src="/assets/contact/tablet/image-hero.jpg" layout="responsive"></img>
                        <img className="hidden lg:flex" src="/assets/contact/desktop/image-hero.jpg" layout="responsive"></img>
                    </div>
                
                    <div className='flex-col md:absolute z-10 -mt-16 w-4/5 lg:w-1/2 md:pl-36 md:pt-56 pl-12 pt-16 md:bottom-0 md:right-0 bg-white text-black max-w-xl md:max-w-2xl lg:max-w-4xl'>
                        {/* <div className="px-12"> */}
                            <h1 className="hidden md:flex md:justify-end md:-mt-72 md:font-bold md:text-9xl md:text-veryLightGrey">Contact</h1>
                            <h2 className='font-bold text-4xl md:text-5xl lg:text-5xl pb-6'> Tell us about your project</h2>
                            <p className='w-full py-2'>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                        {/* </div> */}
                    </div>
                </div>

                <div className='locations flex flex-col lg:flex-row w-full pt-24 pb-16 max-w-xl md:max-w-2xl lg:max-w-4xl gap-6 mx-auto px-12 lg:px-0'>
                    <div className='flex lg:w-1/3'>
                        <div className=''>
                            <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl'>Contact<br></br>Details</h2>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col lg:flex-row w-full gap-16">
                            <div className="flex flex-col md:flex-row lg:flex-col justify-between">
                                <div className="w-full md:w-1/2 lg:w-full">
                                    <p className='font-bold pb-6'>Main Office</p>
                                    <p>Mail: archone@mail.com</p>
                                    <p>Address: 1892 Chenoweth Drive TN</p>
                                    <p>Phone: 123-456-3451</p>
                                </div>
                                <div className="flex w-full md:w-1/2 lg:w-full md:justify-end lg:justify-start items-center hover:underline">
                                    <a className="font-bold cursor-pointer">View on Map</a>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-col justify-between">
                                <div className="w-full md:w-1/2 lg:w-full">
                                    <p className='font-bold pb-6'>Office II</p>
                                    <p>Mail: archtwo@mail.com</p>
                                    <p>Address: 3399 Wines Lane TX</p>
                                    <p>Phone: 832-123-4321</p>
                                </div>
                                <div className="flex w-full md:w-1/2 lg:w-full md:justify-end lg:justify-start items-center">
                                    <a className="font-bold cursor-pointer hover:underline">View on Map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="map" style={{height: '180px'}} className="px-12 lg:px-0">
                    {/* {{tiles}} */}
                </div>
                
                <div className='contact-form justify-center max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-12 lg:px-0 pb-16 lg:flex lg:flex-row lg:gap-16'>
                    <div className="font-bold text-3xl pb-6">
                        <h2 className="">Connect with us</h2>
                    </div>
                    <div className="flex flex-col ">
                        {/**Contact Form */}
                        Name 
                        Email 
                        Message
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}