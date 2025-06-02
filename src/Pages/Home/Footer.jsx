import React from 'react';

const Footer = () => {
    return (
    <footer className='bg-[#111316]'>
  <div className='max-w-screen-xl mx-auto py-10 md:pt-20 md:px-10'>
    <h1 className='text-[#aaa] text-sm md:text-base text-center pb-5'>
      Website last updated: Jan 02, 2025
    </h1>
    
    <div className='md:grid md:grid-cols-3 gap-x-20 text-white px-7'>
      {/* Contact Us */}
      <div className='pt-10 md:pt-0'>
        <h1 className='text-[#bebebe] text-base font-semibold'>Contact Us</h1>
        <p className='text-[#0C6E33] pt-2'>
          <a href="mailto:admin@hilalesg.com">admin@hilalesg.com</a>
        </p>
        <p className='text-sm text-[#C3CDD3] pt-2'>Tel: +971 50 378 5404</p>
      </div>

      {/* Address */}
      <div className='pt-10 md:pt-0'>
        <h1 className='text-[#bebebe] text-base font-semibold'>Address</h1>
        <p className='text-sm text-[#C3CDD3] pt-2 md:pt-4'>
          2472, Al Sila Tower, ADGM, Al Maryah Island, Abu Dhabi, UAE
        </p>
      </div>

      {/* Community */}
      <div className='pt-10 md:pt-0'>
        <h1 className='text-[#bebebe] text-base font-semibold'>Community</h1>
        <div className='flex flex-row gap-7 pt-5'>
          {/* LinkedIn */}
          <a
            target="_blank"
            href="https://www.linkedin.com/company/hilalesg/"
            className="hover:text-[#0C6E33]"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            {/* SVG */}
          </a>

          {/* Map Link */}
          <a
            target="_blank"
            href="https://maps.app.goo.gl/FgDZ2b5QzdamTLo49"
            className="hover:text-[#0C6E33]"
            rel="noreferrer"
            aria-label="Google Maps"
          >
            {/* SVG */}
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className='text-center mt-10'>
      <div className='border-b border-[#0C6E33] py-3' />
      <p className='text-sm text-[#C3CDD3] pt-5'>
        Hilal ESG Holdings Ltd &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
      <a href="./privacy-policy" className='text-sm text-[#C3CDD3] underline block pt-2'>
        Privacy Policy
      </a>
    </div>
  </div>
</footer>
    );
}

export default Footer;
