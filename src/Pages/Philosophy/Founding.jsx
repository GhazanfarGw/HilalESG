import React from "react";

function Description() {
  return (
    <>
    <div className="mx-auto justify-between pt-16 max-w-screen-xl md:px-10 px-5">
      <div className="">
        <div className="md:flex grid-cols-2 gap-16">
            <div className="max-w-screen-xl">
                <img width="800px" src="./Funding.jpg" alt="" />
            </div>
            <div className="md:pt-0 pt-10">
                <span className="text-[#00713B] border-b border-[#00713B]">
                    Our Founding Principles
                </span>
                <h1 className="md:text-4xl font-light text-2xl text-[#444444] py-3">
                    Founding Principles
                </h1>
                <div className="max-w-screen-lg pt-5 md:pt-8 text-[#777]">
                    <p className="md:text-lg text-sm first-letter:text-5xl">
                        The founders of Hilal are united by a shared commitment
                        to ethical finance and a belief in the transformational
                        power of Sharia-compliant investment. Their combined
                        expertise forms the bedrock of Hilal ESG. As they embark on
                        this ambitious journey, starting in ADGM and expanding to KSA
                        and India, Hilal ESG is poised to set new standards in the world
                        of Sharia-compliant asset management, offering investors a
                        pathway to ethical and sustainable wealth creation
                        <br/>
                        <br/>
                        Hilal ESG is poised to become a beacon for Shariacompliant investment offering opportunities for
                        investors who seek to align their financial goals with their
                        ethical and religious principles. Through strategic deployment
                        of capital Hilal ESG aims to create a ripple effect of positive
                        change, fostering economic resilience and prosperity within
                        the communities in which it operates.
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="border-b md:pb-10 pb-5"/>
    </div>
    </>
  );
}

export default Description;