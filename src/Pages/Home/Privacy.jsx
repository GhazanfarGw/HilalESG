import React from 'react'
export default function home() {
  return (
    <>
            <div className='first bg-local md:h-80 h-48'>
                <img className='w-full object-cover md:h-[30rem] h-[20rem]' src='./the-surge-of-environmental-social-and-governance-esg-banner.jpg' alt='image'/>
            </div>
            <div className='md:px-10 mx-auto justify-center overflow-hidden px-5 max-w-screen-xl'>
                <div className='text-white'>
                      <h1 className='second md:text-6xl font-light font-sans text-4xl pt-2 md:pt-0'>
                        Philosophy
                    </h1>
                </div>
            </div>
    </>
  )
}