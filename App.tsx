import React, { useState } from 'react';
import Layout from './components/Layout';
// Make sure the capitalization matches the filename exactly!
import handshakeLogo from './assets/icons/handshakelogo.png';
import linkedinLogo from './assets/icons/linkedinlogo.png';
import profilePic from './assets/profile.png';
/**
 * App: The core controller for William's minimalist portfolio.
 * 
 * DESIGN SPECIFICATION:
 * - Employs a "Card-in-Frame" aesthetic with a fixed 64px padding.
 * - Uses a state-driven navigation system to swap content and theme colors.
 * - Typography: Archivo for structural clarity, DM Serif Text for editorial elegance.
 */
const App: React.FC = () => {
  type ViewType = 'home' | 'alt' | 'blue' | 'been' | 'lavender' | 'jefferson' | 'message';
  
  // Navigation states
  const [view, setView] = useState<ViewType>('home');
  const [previousView, setPreviousView] = useState<ViewType>('home');

  /**
   * changeView:
   * Updates the current view while tracking the previous one for contextual "Back" behavior.
   */
  const changeView = (newView: ViewType) => {
    if (newView !== view) {
      setPreviousView(view);
      setView(newView);
    }
  };

  /**
   * Theme Palette:
   * Carefully selected pastels that provide high contrast for black text.
   */
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

  /**
   * handleBack:
   * Returns deep-level pages to the navigation hub (Alt) before returning Home.
   */
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
      {/* 
         TOP NAVIGATION:
         - Brand Identity: "WILLIAM" acts as a persistent 'Home' anchor.
      */}
      <nav className="flex items-center mb-24">
        <button 
          onClick={() => changeView('home')}
          style={{ '--hover-color': currentBgColor } as React.CSSProperties}
          className="text-xl font-black tracking-tighter text-black transition-colors duration-300 hover:text-[var(--hover-color)] cursor-pointer focus:outline-none uppercase"
        >
          {view === 'jefferson' ? 'ABOUT' : 'WILLIAM'}
        </button>
      </nav>

      {/* 
         MAIN CONTENT ENGINE:
         - Conditional rendering for page transitions.
      */}
      <section className="max-w-5xl flex-1 flex flex-col">
        {view === 'home' && (
          <h1 className="text-7xl mb-8 leading-tight text-black font-normal">
            I Am a College Sophomore Looking for an Opportunity to{' '}
            <button 
              onClick={() => changeView('alt')}
              className="italic transition-colors duration-300 hover:text-[#FFE5E0] cursor-pointer focus:outline-none text-left inline-block"
            >
              Learn.
            </button>
          </h1>
        )}

        {view === 'alt' && (
          <div className="space-y-1">
            <button 
              onClick={() => changeView('blue')}
              className="text-7xl text-black italic leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Here is where I am
            </button>
            <button 
              onClick={() => changeView('been')}
              className="text-7xl text-black font-light leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
            >
              That is where I've been.
            </button>
            <button 
              onClick={() => changeView('lavender')}
              className="text-7xl text-black uppercase leading-[1.1] transition-colors duration-300 hover:text-[#E0EEE3] cursor-pointer block text-left w-full focus:outline-none"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              This is where I'm going.
            </button>
          </div>
        )}

        {view === 'blue' && (
/* "I wrote this part, Gemini edited for the site." */
<div className="flex flex-col animate-in fade-in duration-700">
  <div
    className="text-7xl text-black italic leading-[1.1] mb-10"
    style={{ fontFamily: "'DM Serif Text', serif" }}
  >
    Here is where I am
  </div>

  <div className="text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
    <p>
      I am William "Bill" Jefferson, a sophomore at City College of San Francisco,
      a Studio Arts major expecting to transfer to a Cal State school in Spring
      2027.
    </p>
    <p>
      I am an INFP who has a beautiful dog that loves everyone. My top O*NET
      codes are Artistic, Enterprising, and Conventional, and my VIA Strengths
      include Zest, Curiosity, and Humor.
    </p>
    <p>
      I am an average photographer with lukewarm poetry writing skills, that
      hopes to one day become a flawed painter. And my goals for playing the
      piano are not based in reality.
    </p>
    <p>
      I am learning to combine the abilities of AI with my own insight and
      capability, bringing design to this website and distinctiveness to the
      sometimes uncomfortable process of looking for an internship.
    </p>
    <p>
      Though, having taken this first step I feel successful, and I'm more
      confident in my potential to learn the professional world as well as the
      technical one.
    </p>
  </div>
</div>
        )}

        {view === 'been' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div 
              className="text-7xl text-black font-light leading-[1.1] mb-10"
            >
              That is where I've been.
            </div>
            <div className="text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                My professional journey is defined by a decade of dedication across diverse sectors. In the hospitality industry, I served as a Shift Manager and Inventory Manager, where I mastered the art of high-pressure logistics and team leadership.
              </p>
              <p>
                Beyond management, I’ve contributed to the essential infrastructure of my community through roles with the United States Postal Service and San Francisco Clean City. These positions required a high degree of accountability and organizational precision.
              </p>
              <p>
                For a detailed look at my professional history, you can{' '}
                <a 
                  href="/assets/docs/WmJefferson11a.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic border-b border-black hover:opacity-50 transition-opacity"
                >
                  view my full resume here
                </a>.
              </p>
            </div>
          </div>
        )}

        {view === 'lavender' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div 
              className="text-7xl text-black uppercase leading-[1.1] mb-10"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              This is where I'm going.
            </div>
            <div className="text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                I am well-positioned for careers in Public Relations, Marketing, or Nonprofit Administration. My educational focus on Studio Arts provides the creativity and visual communication skills essential for designing campaigns and managing public images.
              </p>
            </div>
          </div>
        )}

        {view === 'message' && (
          <div className="flex flex-col animate-in fade-in duration-700">
            <div 
              className="text-7xl text-black font-extralight italic tracking-tighter leading-[1.1] mb-10"
            >
              Reach out to me
            </div>
            <div className="text-2xl leading-relaxed text-black max-w-4xl font-light mb-8 space-y-6">
              <p>
                I'm always open to new connections, professional opportunities, or collaborative creative projects. Feel free to drop me a line.
              </p>
              <p>
                You can reach me directly via email at:{' '}
                <a 
                  href="mailto:wm@wmjefferson.com" 
                  className="italic border-b border-black hover:opacity-50 transition-opacity"
                >
                  wm@wmjefferson.com
                </a>
              </p>
            </div>
          </div>
        )}

        {view === 'jefferson' && (
          <div className="flex flex-col animate-in fade-in duration-700 space-y-10">
            <div className="space-y-2">
              <p className="text-2xl leading-relaxed text-black max-w-3xl font-light">
                © 2025 William Jefferson.
              </p>
            </div>
            
            <div className="w-[144px] h-[144px] overflow-hidden bg-[#FF9100]">
              <img
                src={profilePic}   // <--- This was "/assets/profile.png"
                alt="Portrait of William Jefferson"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-2xl leading-relaxed text-black max-w-3xl font-light">
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
      <footer className="flex items-center justify-between mt-auto pt-24 min-h-[3rem]">
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
          <button 
            onClick={() => changeView('message')}
            className="transition-opacity duration-300 hover:opacity-60 focus:outline-none"
            title="Send me a message"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#D63A3A' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </button>

          <a 
            href="https://ccsf.joinhandshake.com/profiles/wmjefferson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            title="Handshake Profile"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-[#d2fa4c] rounded-sm">
              <img
                src={handshakeLogo}
                alt="Handshake"
                className="h-5 w-auto object-contain"
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
            <div className="w-8 h-8 flex items-center justify-center bg-[#ffffff] rounded-sm">
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="h-5 w-auto object-contain"
              />
            </div>
          </a>
        </div>
      </footer>
    </Layout>
  );
};

export default App;