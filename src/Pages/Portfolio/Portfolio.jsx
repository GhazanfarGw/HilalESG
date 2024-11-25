// import React from 'react'

// function Agency() {
//   return (

//     <>
//     {/* <div data-aos="zoom-in-up" data-aos-delay="300" className='grid-cols-4 px-5 mx-auto justify-center text-center items-center block md:hidden lg:hidden pt-20 pb-20'>
//       <h1 className='text-3xl text-[#dfc660] justify-center text-center mx-auto pt-3'>
//         Protect your transaction from.
//       </h1>
//       <div className='w-80 flex items-center justify-center mx-auto gap-x-2'>
//         <img src="../logos/anduril.jpg" alt="" />
//       </div>
//       <div className='w-80 flex items-center justify-center h-0 mx-auto gap-x-0 pt-5'>

//       </div>
//       <div className='w-80 flex items-center justify-center mx-auto gap-x-3 pt-5'>

//       </div>
//       <div className='flex items-center justify-center h-28 mx-auto'>
 
//       </div>
//       <div className='flex items-center justify-center h-0 mx-auto gap-x-1 pt-3'>

//       </div>
//     </div> */}
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-32 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20 hidden md:block lg:block' >
        // <h1 className='justify-center text-center mx-auto md:py-10 md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
        //     We are proud to partner with some of the most innovative companies in the tech industry. Here's below lists of them.
        // </h1>
//         <div className='grid grid-cols-4 justify-center text-center mx-auto gap-3 mt-10'>
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
//         </div>
//       </div>


//       <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-20 px-5 md:px-10 justify-center mx-auto max-w-screen-xl pb-20 block md:hidden lg:hidden mt-24'>
//         <h1 className='justify-center text-center mx-auto md:py-10 md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
//             We are proud to partner with some of the most innovative companies in the tech industry. Here's below lists of them.
//         </h1>
//         <div className='grid grid-cols-2 justify-center text-center mx-auto gap-3 mt-10'>
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Agency

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Post() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='md:pt-28 pt-24 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='items-center mx-auto text-[#000]'>
        <h1 className="second md:text-5xl font-light text-2xl text-[#444444] py-3 text-center mx-auto md:pt-28">
          Who are we working with?
        </h1>
        <p className='third justify-center text-center mx-auto md:max-w-2xl md:text-xl font-light text-lg text-[#777]'>
          We are proud to foster relationships and are actively securing investment allocations with some of the world’s most prominent and innovative companies.
        </p>
        <p className='text-center mx-auto md:text-xl text-lg text-[#444444] pt-10'>
          Investing Across the Al Value Chain
        </p>

        <Slider {...settings} className='fourth flex mx-auto items-center gap-10 pt-12 pb-10 text-[#000]'>
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/rtgs.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/trustin.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Symanto.jpg" alt="" />
        </Slider>
      </div>
      <div className="border-b md:pb-10 pb-5"/>
    </div>
    </>
  )
}

export default Post;