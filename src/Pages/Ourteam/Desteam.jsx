import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zafar Sareshwala",
      role: "Founder",
      image: "./Imagesp/zafarfs-354x354.png",
      description: `Zafar Sareshwala is a distinguished Indian entrepreneur, philanthropist, and public figure renowned for his contributions to business, community development, and Islamic banking and finance.\n
        Born in Ahmedabad, India, Zafar is perhaps best known for serving as a bridge between the Indian Muslim community and the Government of India. He was personally selected by the current Prime Minister of India, Shri Narendra Modi, to serve as the Chancellor (2015-2018) of Maulana Azad National Urdu University (MANUU).\n
        In addition to his academic pursuits, Zafar is a leading authority in the field of Islamic Banking and Finance. He has been a regular invitee and speaker at the esteemed Harvard Islamic Banking and Finance Forum held by Harvard University, Massachusetts. He has presented numerous papers and spoken at various global conferences.\n
        Zafar’s entrepreneurial ventures span fund management, real estate, and education. He was a pioneer in establishing an FSA-regulated Sharia Compliant Investment Fund in the UK in 2001.\n
        Zafar Sareshwala is also renowned for his active involvement in philanthropy and social initiatives. He was sent by the Government of India as their goodwill ambassador representing the Prime Minister for Haj 2016. In January 2018, he was invited by the Ministry of Human Resource Development to contribute his valuable views on the betterment of the Minority Education System.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Zaheer Muneer",
      role: "Co-Founder",
      image: "./Imagesp/zaheer-354x354.png",
      description: `Zaheer Muneer is an Investor, Entrepreneur, Philanthropist and Co-Founder of Hilal ESG. Well known in Middle East banking and finance circles, Zaheer was previously advisor to Saudi Excellence Co where he was involved in Saudi-German private investments of more than $560 Million.\n
        Zaheer has been involved in assisting numerous organisations in their adoption of Fintech, AI, and cybersecurity solutions. Zaheer is a past president of Great Winchester Investment Consultancy, a leading UK brokerage.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Irshad Akhtar",
      role: "Co-Founder",
      image: "./Imagesp/Irshad-Akhtar-1-354x354.png",
      description: `Irshad Akhtar, Hilal’s managing partner is an engineer, chartered accountant, corporate treasurer and an investment banker. A graduate of Imperial College, London, Irshad trained with Ernst and Young where he qualified as a Corporate Treasurer receiving the Association of Corporate Treasury and Fintech diploma at the Said Business School at the University of Oxford,\n
        Before joining Hilal, Irshad had a distinguished career in Financial Services. He both co-founded and co-led HSBC’s Investment Bank in the Kingdom of Saudi Arabia from 2005 to 2014 serving as both CFO and COO,\n 
        Irshad played a key role in various areas of the bank’s operations establishing Investment Banking teams working in Equity brokerage, Asset Management, Custody, and Advisory. On returning to the UK from KSA in 2014 Irshad founded a peer-to-peer Fintech company. He has since worked as a consultant and obtained licenses for three new UK banks. He is passionate about ESG and is also founder of a renewables company in the UK which focusses on Energy management solutions.\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },

    // Add more team members here
  ];

  const seniorLeadership = [
    {
        id: 4,
        name: "Irshad Akhtar",
        role: "Co-Founder and Managing Partner",
        image: "./Imagesp/Irshad-Akhtar-1-354x354.png",
        description: `Irshad Akhtar, Hilal’s managing partner is an engineer, chartered accountant, corporate treasurer and an investment banker. A graduate of Imperial College, London, Irshad trained with Ernst and Young where he qualified as a Corporate Treasurer receiving the Association of Corporate Treasury and Fintech diploma at the Said Business School at the University of Oxford,\n
          Before joining Hilal, Irshad had a distinguished career in Financial Services. He both co-founded and co-led HSBC’s Investment Bank in the Kingdom of Saudi Arabia from 2005 to 2014 serving as both CFO and COO,\n 
          Irshad played a key role in various areas of the bank’s operations establishing Investment Banking teams working in Equity brokerage, Asset Management, Custody, and Advisory. On returning to the UK from KSA in 2014 Irshad founded a peer-to-peer Fintech company. He has since worked as a consultant and obtained licenses for three new UK banks. He is passionate about ESG and is also founder of a renewables company in the UK which focusses on Energy management solutions.\n`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 5,
        name: "Zaheer Muneer",
        role: "Co-Founder and Head of Strategy",
        image: "./Imagesp/zaheer-354x354.png",
        description: `Zaheer Muneer is an Investor, Entrepreneur, Philanthropist and Co-Founder of Hilal ESG. Well known in Middle East banking and finance circles, Zaheer was previously advisor to Saudi Excellence Co where he was involved in Saudi-German private investments of more than $560 Million.\n
          Zaheer has been involved in assisting numerous organisations in their adoption of Fintech, AI, and cybersecurity solutions. Zaheer is a past president of Great Winchester Investment Consultancy, a leading UK brokerage.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 6,
        name: "Mohammed Habib Zafar",
        role: "Chief Operations Officer",
        image: "./Imagesp/habibsareshwala-354x354.png",
        description: `With extensive experience in operations management reporting, management consulting, and controls, Habib is an established UAE corporate figure with a reputation for improving business operations.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 7,
        name: "Simon Bayles",
        role: "Chief Investment Officer",
        image: "./Imagesp/simonbayles-354x354.png",
        description: `Simon has 30 years’ experience in Asset Management, and an established expert in both traditional and alternative asset classes. Simon has run Private Equity funds as well as Fund of Funds and managed Long-only funds.\n
          He has successfully constructed 20 distinct model portfolios ranging from Passive Cautious to Alternative Dynamic Growth portfolios. His versatile skill set and wealth of experience position him as a key p[layer in the asset management sector.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },
  ];

  const boardMember = [

    {
      id: 8,
      name: "Robert B. Gray",
      role: "Non-Executive Director",
      image: "./Imagesp/robergrey-354x354.png",
      description: `Robert B. Gray is a distinguished financial services professional with over 40 years’ experience in international banking. Throughout his career—much of it spent in the Middle East—Robert has held leadership roles at top institutions including J.P. Morgan and HSBC where he specialised in capital markets, debt finance, and regulatory policy.\n
        During the latter half of his banking career Robert led on the development of global capital markets. Robert is a Director of the Arab-British Chamber of Commerce and is Chairman of its Audit Committee.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 9,
      name: "Cihan Aktas",
      role: "Non-Executive Director",
      image: "./Imagesp/cihan-354x354.png",
      description: `Cihan Aktas is an international civil servant and economist based in Reinach, Switzerland. Cihan brings over 20 years of expertise in global financial stability and international financial architecture. Known for his dynamic personality and extensive experience in policy and research within financial institutions and markets,\n
      Cihan is highly regarded for his consultative approach to decision-making. He consistently demonstrates sound judgment and enthusiasm in developing contacts and working relationships with a wide range of international organizations and national authorities.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 10,
      name: "Matthew Kang Holding",
      role: "Non-Executive Director",
      image: "./Imagesp/matthew-354x354.png",
      description: `Matthew Kang Holding brings both extensive experience and a diverse skill set to Hilal ESG. With a solid foundation in finance, investment management, and entrepreneurial ventures,\n
        Matthew is well-equipped to provide strategic oversight and governance. His broad expertise in finance, investments, leadership, and community engagement makes him a valuable asset, and his strategic insights and diverse skill set will contribute significantly to the company’s continued growth and success.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
        id: 11,
        name: "Irshad Akhtar",
        role: "Co-Founder and Managing Partner",
        image: "./Imagesp/Irshad-Akhtar-1-354x354.png",
        description: `Irshad Akhtar, Hilal’s managing partner is an engineer, chartered accountant, corporate treasurer and an investment banker. A graduate of Imperial College, London, Irshad trained with Ernst and Young where he qualified as a Corporate Treasurer receiving the Association of Corporate Treasury and Fintech diploma at the Said Business School at the University of Oxford,\n
          Before joining Hilal, Irshad had a distinguished career in Financial Services. He both co-founded and co-led HSBC’s Investment Bank in the Kingdom of Saudi Arabia from 2005 to 2014 serving as both CFO and COO,\n 
          Irshad played a key role in various areas of the bank’s operations establishing Investment Banking teams working in Equity brokerage, Asset Management, Custody, and Advisory. On returning to the UK from KSA in 2014 Irshad founded a peer-to-peer Fintech company. He has since worked as a consultant and obtained licenses for three new UK banks. He is passionate about ESG and is also founder of a renewables company in the UK which focusses on Energy management solutions.\n`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },
  ];

  const advisors = [
    {
      id: 12,
      name: "Zafar Sareshwala",
      role: "Chief Advisor",
      image: "./Imagesp/zafarfs-354x354.png",
      description: `Zafar Sareshwala is a distinguished Indian entrepreneur, philanthropist, and public figure renowned for his contributions to business, community development, and Islamic banking and finance.\n
        Born in Ahmedabad, India, Zafar is perhaps best known for serving as a bridge between the Indian Muslim community and the Government of India. He was personally selected by the current Prime Minister of India, Shri Narendra Modi, to serve as the Chancellor (2015-2018) of Maulana Azad National Urdu University (MANUU).\n
        In addition to his academic pursuits, Zafar is a leading authority in the field of Islamic Banking and Finance. He has been a regular invitee and speaker at the esteemed Harvard Islamic Banking and Finance Forum held by Harvard University, Massachusetts. He has presented numerous papers and spoken at various global conferences.\n
        Zafar’s entrepreneurial ventures span fund management, real estate, and education. He was a pioneer in establishing an FSA-regulated Sharia Compliant Investment Fund in the UK in 2001.\n
        Zafar Sareshwala is also renowned for his active involvement in philanthropy and social initiatives. He was sent by the Government of India as their goodwill ambassador representing the Prime Minister for Haj 2016. In January 2018, he was invited by the Ministry of Human Resource Development to contribute his valuable views on the betterment of the Minority Education System.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },

      {
        id: 13,
        name: "Rajnish Kumar",
        role: "Chairman and Non-Executive Director",
        image: "./Imagesp/rajnishkumar-354x354.png",
        description: `Rajnish Kumar is former chairman of State Bank of India. Credited with steering the bank successfully through very challenging times by successfully managing UK operations immediately after the 2008 financial crisis, he is an independent director of Hilal and also serves on the Governing Boards of a range of successful international companies.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 14,
        name: "Faisal Iqbal",
        role: "Partner at Paradigm Investment Partners",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, Umbria Capital Partners, 10AK Financial Group, Credit Suisse, Bahrain Institute of Banking and Finance, Goldman Sachs`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 15,
        name: "Jafar Hamid",
        role: "Advisor to Ultra High Net Worth families",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, Union Bancaire Privée, J.P. Morgan, Credit Suisse, UBS, Citi.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 15,
        name: "Sandeep Khanna",
        role: "Private Equity Investor in Emerging Markets",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, Stonetown Capital, Libstar Holdings, The Abraaj Group, Aureos Capital, CDC Group plc, Nanga Farms.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 15,
        name: "Jehaan Ismael",
        role: "Chairman at M Power Capital; Member Board of Directors, Bank of Ceylon",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, First Capital Holdings, HSBC, University of Colombo.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 16,
        name: "Steven Thomas",
        role: "Financial Broker at Mountview Capital",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, Amoradha, Lambert Smith Hampton Coreco Group,, CLP Structured Finance.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 17,
        name: "Sohail Malik",
        role: "Head of Structuring at Truva Corp, Founder of Pendolum AI",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, RAM, ECM Asset Management, Agilo, Credit Suisse, IBM, Euler Hermes, Rothmans International.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 18,
        name: "Nicola Steen",
        role: "Encompass, Rewired Earth",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, RAM, ECM Asset Management, Agilo, Credit Suisse, IBM, Euler Hermes, Rothmans International.`,
        social: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
      },

      {
        id: 18,
        name: "Sev Pillai",
        role: "Private Captial Investor into Emerging Markets",
        image: "./Imagesp/knowimage.png",
        description: `Formerly, LGT Impact Investment Advisers, The Abraaj Group, Aureos Capital, CDC Group.`,
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
      <h2 className="text-3xl pt-10 underline pb-8 second font-light text-[#444444]">Executive Officers</h2>
      <div className="grid grid-cols-4 gap-4 pb-16 border-b-2">
        {teamMembers.map((member) => (
          <React.Fragment key={member.id}>
            {/* Member Card */}
            <div
              className={`team-member third  ${
                selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              <img src={member.image} alt={member.name} />
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

      {/* Senior Leadership Section */}
      <h2 className="text-3xl pt-16 underline pb-10 first">Senior Leadership</h2>
      <div className="grid grid-cols-4 gap-4 pb-16 border-b-2">
        {seniorLeadership.map((member) => (
          <React.Fragment key={member.id}>
            {/* Member Card */}
            <div
              className={`team-member third ${
                selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

            {/* Expanded Profile */}
            {selectedMemberId === member.id && (
              <div className="expanded-profile">
                <div className="profile-content">
                  {/* Left: Image */}
                  <div className="mt-8 px-8 py-10 max-w-sm">
                    <img src={member.image} alt={member.name} />
                  </div>

                  {/* Right: Text Content */}
                  <div className="profile-details mt-10 mr-16">
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

    {/* Senior Leadership Section */}
    <h1 className="first md:text-5xl font-light text-2xl text-[#444444] py-3 pb-10 text-center mx-auto md:pt-28 underline">
        Board Members
    </h1>
    <div className="grid grid-cols-4 gap-4 pb-16 border-b-2">
        {boardMember.map((member) => (
          <React.Fragment key={member.id}>
            {/* Member Card */}
            <div
              className={`team-member second ${
                selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

            {/* Expanded Profile */}
            {selectedMemberId === member.id && (
              <div className="expanded-profile">
                <div className="profile-content">
                  {/* Left: Image */}
                  <div className="mt-8 px-8 py-10 max-w-sm">
                    <img src={member.image} alt={member.name} />
                  </div>

                  {/* Right: Text Content */}
                  <div className="profile-details mt-10 mr-16">
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
          {/* Advisors Leadership Section */}
    <h1 className="first md:text-5xl font-light text-2xl text-[#444444] pb-10 py-3 text-center mx-auto md:pt-28 underline">
        Advisors
    </h1>
    <div className="grid grid-cols-4 gap-4 pb-16">
        {advisors.map((member) => (
          <React.Fragment key={member.id}>
            {/* Member Card */}
            <div
              className={`team-member second ${
                selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

            {/* Expanded Profile */}
            {selectedMemberId === member.id && (
              <div className="expanded-profile">
                <div className="profile-content">
                  {/* Left: Image */}
                  <div className="mt-8 px-8 py-10 max-w-sm">
                    <img src={member.image} alt={member.name} />
                  </div>

                  {/* Right: Text Content */}
                  <div className="profile-details mt-10 mr-16">
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