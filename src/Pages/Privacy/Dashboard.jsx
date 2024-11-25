import React from 'react'
export default function home() {
  return (
    <>
            <div className='first bg-local md:h-72 h-48'>
                <img className='w-full object-cover md:h-[25rem] h-[20rem]' src='./privacy.jpg' alt='image'/>
            </div>
            <div className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl'>
                <div className='text-white'>
                      <h1 className='second md:text-6xl font-light font-sans text-4xl pt-2 md:pt-0'>
                        Privacy Policy
                    </h1>
                </div>
            </div>
    </>
  )
}