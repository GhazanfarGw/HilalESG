import React from 'react'

export default function Team() {
  return (
    <>
    <div className='max-w-screen-xl mx-auto justify-center text-center min-h-screen overflow-hidden md:px-10 px-5'>
      <div className='items-center md:py-80 py-40'>
        <h1 className='first md:text-6xl font-light text-4xl text-[#444444]'>
          Page is Under Construction
        </h1>
        <p className='second md:text-lg text-sm mt-6 text-[#777]'>
          Our team is working hard to bring this page to life. Please check back soon!
        </p>
        <p className='third md:text-lg text-sm mt-10 text-[#777] pb-10'>
          Thank you for your patience as we finalize the details.
        </p>
        <a className='fourth mt-5' href="/">
        <span className='py-2 px-4 border border-[#00713B] text-[#444444]'>
          Back to Dashboard Page
        </span>
        </a>
      </div>
    </div>
    </>
  )
}