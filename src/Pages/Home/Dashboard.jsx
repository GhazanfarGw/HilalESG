import React from 'react'
export default function home() {
  return (
    <>
        <div className='first min-h-screen'>
            <div className=''>
                <video className='w-full min-h-screen object-cover' loop autoPlay muted>
                    <source src='./Grey and Brown Modern Real Estate Video.mp4' type='video/mp4'/>
                </video>
                {/* <img className='w-full object-cover md:h-[50rem] h-[36rem]' src='./9.jpg' alt='image'/> */}
            </div>
        </div>
    </>
  )
}
