import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
    const teamMembers = [
    {
      id: 1,
      name: "Robert B. Gray",
      role: "Chairman",
      image: "./Imagesp/robergrey-354x354.png",
      description: `Financial services professional with over 40 years of experience. Robert has held leadership roles at top institutions like J.P. Morgan and HSBC, specializing in capital markets, debt finance, and regulatory policy. In the latter half of his career, he focused on developing global capital markets.\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Irshad Akhtar",
      role: "Chief Executive Officer (CEO)",
      image: "./Imagesp/Irshad-Akhtar-1-354x354.png",
      description: `Irshad is an Alumni of Imperial College, London University and Said Business School Oxford University.\n
      Irshad is a CA, Investment Banker and a Qualified Corporate Treasurer. Prior to joining Hilal, Irshad Co-founded and Co-led HSBC KSA from 2005 to 2014 as  CFO/COO. In HSBC KSA, Irshad was involved in Investment Banking, Equity brokerage, Asset Management, Custody and Advisory.\n
      Since returning to UK from KSA in 2014, Irshad  licenced 3 new UK banks and Founded BuzzEv. Now joined Hilal ESG as Managing Partner.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Zafar Sareshwala",
      role: "Chief Advisor",
      image: "./Imagesp/zafarfs-354x354.png",
      description: `Mr Sareshwala is the Founder of Hilal ESG. Zafar has over 30 years of experience in the field of Stocks, Islamic Finanace and  Fund Management. In the past, Zafar founded Parsoli Corporation, a Shariah Compliant Stock brokarage Company Listed on the BSE (Bombay Stock Exchange) and set up one of the first Islamic Equity Fund in UK, regulated by FSA.\n
      Zafar is also a leading authority  in the field of Islamic Banking and Finance and often speaks on Islamic Finance across the world.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Zaheer Muneer",
      role: "Chief Strategy Officer (CSO)",
      image: "./Imagesp/zaheer-354x354.png",
      description: `Zaheer is a professional investor specializing in growth strategies and identifying lucrative investment opportunities in both the public and private sectors.\n 
      Before joining Hilal ESG, Zaheer structured deals over $1billion. He has also assisted numerous organizations in adopting fintech, AI, and cybersecurity solutions.\n 
      Previously, Zaheer served as the president of Great Winchester Investment Consultancy in the UK.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "Mohammed Habib Zafar",
      role: "Chief Operations Officer (COO)",
      image: "./Imagesp/habibsareshwala-354x354.png",
      description: `With extensive experience in operations management reporting, management consulting, and controls, Habib is an established UAE corporate figure with a reputation for improving business operations.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 6,
      name: "Simon Bayles",
      role: "Chief Investment Officer (CIO)",
      image: "./Imagesp/simonbayles-354x354.png",
      description: `Simon has 30 years’ experience in Asset Management, and an established expert in both traditional and alternative asset classes. Simon has run Private Equity funds as well as Fund of Funds and managed Long-only funds.\n
        He has successfully constructed 20 distinct model portfolios ranging from Passive Cautious to Alternative Dynamic Growth portfolios. His versatile skill set and wealth of experience position him as a key p[layer in the asset management sector.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 7,
      name: "Cihan Aktas",
      role: "Senior Compliance Advisor",
      image: "./Imagesp/cihan-354x354.png",
      description: `Economist and international civil servant based in Reinach, Switzerland, with over 20 years of experience in global financial stability and international financial architecture.\n
      Cihan excels in building relationships with international organizations and national authorities.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 8,
      name: "Rajnish Kumar",
      role: "Independent Senior Advisor",
      image: "./Imagesp/rajnishkumar-354x354.png",
      description: `Former Chairman of State Bank of India, managing UK operations post-2008 financial crisis. and Boardoards of several successful international companies`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 9,
      name: "Sohail Issa Jaffar",
      role: "Senior Advisor",
      image: "./Imagesp/Jaffar.png",
      description: `Over 40 years of experience in the financial services industry, holding executive and board positions at major international firms. Former Vice President of Scudder Kemper, managed projects with a launch target of $850 million.\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 10,
      name: "Matthew Kang",
      role: "Vice President (VP)",
      image: "./Imagesp/matthew-354x354.png",
      description: `Matthew Kang brings extensive experience in finance, investment management, and entrepreneurship to Hilal ESG. His expertise in strategic oversight, leadership, and community engagement makes him a valuable asset to the company s growth and success.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 11,
      name: "Raihan Choudhury",
      role: "Advisor on Special Initiatives & Sovereign Wealth Funds",
      image: "./Imagesp/knowimage.png",
      description: `Shareholder and stakeholder in various initiatives, alliances, and ventures, spanning both sovereign/government and private sectors. Focus on strategic resource management, trading, PPP, and other special situations.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleMemberClick = (id) => {
    setSelectedMemberId(selectedMemberId === id ? null : id);
  };

  return (
    <div className="md:pt-28 pt-24 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20">
      <h1 className="first md:text-5xl font-light text-2xl text-[#444444] py-3 text-center mx-auto md:pt-28">
        Leadership
      </h1>

      {/* Executive Officers Section */}
      <h2 className="text-3xl pt-10 underline pb-8 second font-light text-[#444444]">Meet the Team</h2>
      <div className="grid grid-cols-4 gap-4 pb-16 border-b-2">
        {teamMembers.map((member) => (
          <React.Fragment key={member.id}>
            {/* Member Card */}
            <div
              className={`team-member third hover:translate-x-0.5 ${
                selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              <img className="hover:scale-105 duration-200" src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

            {/* Expanded Profile */}
            {selectedMemberId === member.id && (
              <div className="expanded-profile w-full mx-auto">
                <div className="profile-content mx-auto">
                  {/* Left: Image */}
                  <div className="mt-8 px-8 py-10 max-w-sm">
                    <img src={member.image} alt={member.name} />
                  </div>

                  {/* Right: Text Content */}
                  <div className="profile-details mt-10 mr-16 mx-auto">
                    <h2>{member.name}</h2>
                    <h4>{member.role}</h4>
                    <p className="text-sm max-w-screen-lg">{member.description}</p>

                    {/* Social Media Links */}
                    <div className="social-links">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </div>

                    <button onClick={() => setSelectedMemberId(null)}>Close</button>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>

  );
};

export default TeamPage;
