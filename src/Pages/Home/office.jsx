timport React, { useState } from 'react';

const Office = () => {
    return (
        <div id='office' className='py-2 justify-center mx-auto md:px-10 px-5 max-w-screen-xl'>
            <div className='mx-auto justify-center'>
                <div className='first items-center py-10 mx-auto'>
                    <p className='text-[#444444] md:text-4xl text-3xl font-light'>
                        Our Offices
                    </p>
                    <p className='md:text-lg text-sm md:pt-8 pt-3 text-[#777]'>
                        Hilal ESG operates in multiple countries.
                    </p>
                </div>
                <div className='lg:grid lg:grid-cols-5 mx-auto justify-center md:gap-5 md:pt-10'>
                    <div className='second py-6 px-3 border md:mt-0 border-opacity-30'
                    >
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./Development BUrj.jpeg' alt='logo'/>
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./145.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg font-light justify-center md:py-5 py-3 text-[#444444]'>
                                United Arab Emirates
                            </h1>
                            <p
                             className='text-sm text-[#777] duration-500'>
                                2472, Al Sila Tower, ADGM, Al Maryah Island, Abu Dhabi, UAE
                            </p>
                        </div>
                    </div>
                    <div className='third py-6 px-3 border md:mt-0 border-opacity-30 mt-5'
                    >
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='.//ksa.jpg' alt='logo'/>
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./7N3oyVLb-Everything-you-need-to-know-about-visiting-KSA-1-1200x800.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg font-light justify-center md:py-5 py-3 text-[#444444]'>
                                Kingdom of Saudi Arabia
                            </h1>
                            <p
                             className='text-sm text-[#777] duration-500'>
                                Khurais Road, Al Rayaan, Riyadh
                            </p>
                        </div>
                    </div>
                    <div className='fourth py-6 px-3 border md:mt-0 border-opacity-30 mt-5'
                    >
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./london.jpg' alt='logo'/>
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./London-1-1024x684.jpeg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg font-light justify-center md:py-5 py-3 text-[#444444]'>
                                United Kingdom London
                            </h1>
                            <p
                             className='text-sm text-[#777] duration-500'>
                                Dartmouth House, 37 Charles St, London W1J 5ED, United Kingdom
                            </p>
                        </div>
                    </div>
                    <div className='five py-6 px-3 border md:mt-0 border-opacity-30 mt-5'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./singapore.jpg' alt='logo'/>
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./Singapore-1170x630.jpg.optimal.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg font-light justify-center md:py-5 py-3 text-[#444444]'>
                                Singapore
                            </h1>
                            <p
                             className='text-sm text-[#777] duration-500'>
                                101 Upper Cross Street People’s Park Centre, Singapore
                            </p>
                        </div>
                    </div>
                    <div className='five py-6 px-3 border md:mt-0 border-opacity-30 mt-5'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./mumbai desktop.jpg' alt='logo'/>
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./mumbai.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg font-light justify-center md:py-5 py-3 text-[#444444]'>
                                India
                            </h1>
                            <p
                             className='text-sm text-[#777] duration-500'>
                                402, Shalimar Complex, Paldi Ahmedabad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b md:pb-10 pb-5"/>
        </div>
    );
}

export default Office;
