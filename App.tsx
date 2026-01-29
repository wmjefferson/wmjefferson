import React, { useState } from 'react';
import Layout from './components/Layout';
import handshakeWordmark from './assets/icons/handshakewordmark.png';
import linkedinWordmark from './assets/icons/linkedinwordmark.png';
import profilePic from './assets/profile.png';

/**
 * App: The core controller for William's minimalist portfolio.
 * * DESIGN SPECIFICATION:
 * - Employs a "Card-in-Frame" aesthetic.
 * - RESPONSIVE UPDATE: Uses 'md:' prefixes to scale text from mobile to desktop.
 * - COLOR UPDATE: "Learn" button is Peach on mobile, Black on desktop.
 */
const App: React.FC = () => {
  type ViewType = 'home' | 'alt' | 'blue' | 'been' | 'lavender' | 'jefferson' | 'message';
  
  // Navigation states
  const [view, setView] = useState<ViewType>('home');
  const [previousView, setPreviousView] = useState<ViewType>('home');

  const changeView = (newView: ViewType) => {
    if (newView !== view) {
      setPreviousView(view);
      setView(newView);
    }
  };

  const colors = {
    home: '#FFE5E0',      // Peach
    alt: '#E0EEE3',       // Mint
    blue: '#E0F7FF',      // Sky Blue
    been: '#F5FFE0',      // Lime/Yellow
    lavender: '#FAE0FF',  // Purple
    jefferson: '#F0F0EF', // Light Grey/Beige
    message: '#FFF2E0'    // Warm White/Cream
  };

  const currentBgColor = colors[view];

  const handleBack = () => {
    if (view === 'message') {
      setView(previousView);
      return;
    }
    
    if (['blue', 'been', 'lavender'].includes(view)) setView('alt');
    else if (view === 'jefferson' || view === 'alt') setView('home');
  };

  return (
    <Layout bgColor={currentBgColor}>
      {/* TOP NAVIGATION */}
      <nav className="flex items-center mb-12 md:mb-24">
        <button 
          onClick={() => changeView('home')}
          style={{ '--hover-color': currentBgColor } as React.CSSProperties}
          className="text-xl font-black tracking-tighter text-black transition-colors duration-300 hover:text-[var(--hover-color)] cursor-pointer focus:outline-none uppercase"
        >
          {view === 'jefferson' ? 'ABOUT' : 'WILLIAM'}
        </button>
      </nav>

      {/* MAIN CONTENT ENGINE */}
      <section className="max-w-5xl flex-1 flex flex-col">
        {view === 'home' && (
          <h1 className="text-4xl md:text-7xl mb-8 leading-tight text-black font-normal">
            I Am a College Sophomore Looking for an Opportunity to{' '}
            {/* UPDATE: 
                - text-[#FFE5E0]: Sets text to Peach on mobile (default).
                - md:text-black: Sets text to Black on desktop screens.
                - hover:text-[#FFE5E0]: Ensures hover turns Peach on desktop.
            */}
            <button 
              onClick={() => changeView('alt')}
              className="italic transition-colors duration-300 text-[#FFE5E0] md:text-black hover:text-[#FFE5E0] cursor-pointer focus:outline-none text-left inline-block"
            >
              Learn.
            </button>
          </h1>
        )}

        {view === 'alt' && (
          <div className="space-y-1">
            <button 
              onClick={() => changeView('blue')}
              className="text-4xl md:text-7xl text-black italic leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Here is where I am
            </button>
            <button 
              onClick={() => changeView('been')}
              className="text-4xl md:text-7xl text-black font-light leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
            >
              That is where I've been.
            </button>
            <button 
              onClick={() => changeView('lavender')}
              className="text-4xl md:text-7xl text-black uppercase leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              This is where I'm going.
            </button>
            <button 
              onClick={() => changeView('message')}
              className="text-4xl md:text-7xl text-black font-extralight italic tracking-tighter leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
            >
              Reach out to me
            </button>
          </div>
        )}

        {view === 'blue' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div
              className="text-4xl md:text-7xl text-black italic leading-[1.1] mb-6 md:mb-10"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Here is where I am
            </div>

            <div className="text-lg md:text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                I am William "Bill" Jefferson, a sophomore at City College of San Francisco, a Studio Arts major expecting to transfer to a Cal State school for the Spring 2027 semester.
              </p>
              <p>
                I am an INFP who has a beautiful dog that loves everyone. My top O*NET codes are Artistic, Enterprising, and Conventional, and my VIA Strengths include Zest, Curiosity, and Humor.
              </p>
              <p>
                I am an average photographer with lukewarm poetry writing skills, that hopes to one day become a flawed painter. And my goals for playing the piano are not based in reality.
              </p>
              <p>
                I am learning to combine the abilities of AI with my own insight and capability, bringing design to this website and distinctiveness to the sometimes uncomfortable process of looking for an internship.
              </p>
              <p>
                Though, having taken this first step I feel successful, and I'm more confident in my potential to learn the professional world as well as the technical one.
              </p>
              <p className="text-sm md:text-base opacity-70">
                I wrote this.
              </p>
            </div>
          </div>
        )}

        {view === 'been' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div 
              className="text-4xl md:text-7xl text-black font-light leading-[1.1] mb-6 md:mb-10"
            >
              That is where I've been.
            </div>
            <div className="text-lg md:text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                At The Winery SF I served as an Inventory Manager and Front-of-House Associate managing complex logistics for wholesale and direct-to-consumer shipments, and actively contributing to the brand’s visual identity by designing menus, advertisements, and signage. I honed my public speaking skills by conducting winery tours and barrel tastings, ensuring that every guest interaction reinforced the brand’s reputation for excellence.
              </p>
              <p>
                As a Shift Manager at Jack in the Box, I led teams through high-volume shifts while maintaining strict health and safety standards. I was responsible for processing shift reports, managing employee schedules, and de-escalating customer service issues in real-time. This experience taught me how to lead by example and maintain operational efficiency even in chaotic environments.
              </p>
              <p>
                My experience as a Mail Handler Assistant with the United States Postal Service sharpened my attention to detail and logistical efficiency. I was responsible for the accurate separation and dispatch of high volumes of mail, operating processing machinery, and inspecting equipment. I bring this same level of precision and reliability to the administrative and organizational tasks required to support a busy PR team.
              </p>
              <p>
                My professional background blends creative strategy with operational discipline. I've done inventory management, designed marketing materials, led public tours, directly shaped a brand's visitor experience, honed my crisis communication skills, managed team operations and de-escalated customer issues in a high-pressure environment. I offer a proven history of adaptability and brand stewardship.
              </p>
              <p className="text-sm md:text-base opacity-70">
                AI wrote this.
              </p>
            </div>
          </div>
        )}

        {view === 'lavender' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div 
              className="text-4xl md:text-7xl text-black uppercase leading-[1.1] mb-6 md:mb-10"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              This is where I'm going.
            </div>
            <div className="text-lg md:text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                  The undertakings of building and maintaining this website have been quite rewarding. I am learning industry standards, best practices, and the nuances of how both Artificial Intelligence and the 2026 Internet works. But it's more than that - I am challenging myself to generate content and determine purpose, to have a need to understand these things, to capture perspectives about what matters to me most. This website serves as a testament to what I've learned thus far.
              </p>
               <p>
                  And I'd like to apply my studies in the visual arts and in business to the field of Public Relations. I am an amazing photographer and writer with the organizational discipline of an operations manager. I am proficient in the Adobe Creative Suite and Microsoft 365, as well as the Google Workspace, and I am looking for an internship where I can begin to understand the process of creating compelling narratives that resonate with the public.
              </p>
              <p className="text-sm md:text-base opacity-70">
                I wrote this with a little bit of AI.
              </p>
            </div>
          </div>
        )}

        {view === 'message' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div 
              className="text-4xl md:text-7xl text-black font-extralight italic tracking-tighter leading-[1.1] mb-6 md:mb-10"
            >
              Reach out to me
            </div>

            <div className="text-lg md:text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                This is{' '}
                <a 
                  href="/assets/docs/wmjefferson11a.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic border-b border-black hover:opacity-50 transition-opacity"
                >
                  my resume
                </a>
                .
              </p>
              <p>
                My email address is:{' '}
                <a 
                  href="mailto:wm@wmjefferson.com" 
                  className="italic border-b border-black hover:opacity-50 transition-opacity"
                >
                  wm@wmjefferson.com
                </a>
              </p>
              <p>
                I'm always open to new connections, professional opportunities, or creative projects. 
                Feel free to drop me a line.
              </p>
            </div>
          </div>
        )}

        {view === 'jefferson' && (
          <div className="flex flex-col animate-in fade-in duration-700 space-y-10">
            <div className="space-y-2">
              <p className="text-lg md:text-2xl leading-relaxed text-black max-w-3xl font-light">
                © 2026 William Jefferson.
              </p>
            </div>
            {/*
            THIS IS THE BITCOIN ORANGE PROFILE PICTURE BLOCK
            <div className="w-[144px] h-[144px] overflow-hidden bg-[#FF9100]">
              <img
                src={profilePic}
                alt="Portrait of William Jefferson"
                className="w-full h-full object-cover"
              />
            </div>
            */}

            <p className="text-lg md:text-2xl leading-relaxed text-black max-w-3xl font-light">
              <a 
                href="https://www.jeffersonwm.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="italic border-b border-black hover:opacity-50 transition-opacity"
              >
                Elsewhere
              </a>
            </p>
          </div>
        )}
      </section>

      {/* FOOTER BANNER */}
      <footer className="flex items-center justify-between mt-auto pt-12 md:pt-24 min-h-[3rem]">
        <div className="flex items-center">
          {view === 'home' ? (
            <button 
              onClick={() => changeView('jefferson')}
              className="text-xl font-black tracking-tighter text-black transition-colors duration-300 cursor-pointer uppercase focus:outline-none hover:text-[#FFE5E0]"
            >
              JEFFERSON
            </button>
          ) : (
            <button 
              onClick={handleBack}
              style={{ '--hover-color': currentBgColor } as React.CSSProperties}
              className="text-xl font-black tracking-tighter text-black transition-colors duration-300 cursor-pointer uppercase focus:outline-none hover:text-[var(--hover-color)]"
            >
              BACK
            </button>
          )}
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://ccsf.joinhandshake.com/profiles/wmjefferson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            title="Handshake Profile"
          >
            <div className="h-8 px-2 flex items-center justify-center bg-[#ffffff] rounded-sm">
              <img
                src={handshakeWordmark}
                alt="Handshake"
                className="h-4 w-auto object-contain"
              />
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/wmjefferson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            title="LinkedIn Profile"
          >
            <div className="h-8 px-2 flex items-center justify-center bg-[#ffffff] rounded-sm">
              <img
                src={linkedinWordmark}
                alt="LinkedIn"
                className="h-4 w-auto object-contain"
              />
            </div>
          </a>
        </div>
      </footer>
    </Layout>
  );
};

export default App;