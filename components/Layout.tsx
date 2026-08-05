
import React from 'react';

/**
 * LayoutProps: Defines the expected properties for the Layout component.
 */
interface LayoutProps {
  children: React.ReactNode;
  // Optional background color for the outer frame
  bgColor?: string;
}

/**
 * Layout: The master structural frame of the application.
 * This component handles the outer background frame and the centered white workspace.
 */
const Layout: React.FC<LayoutProps> = ({ children, bgColor = '#FFE5E0' }) => {
  return (
    /*
       OUTER WRAPPER:
       - Uses lighter padding on smaller/shorter screens so the border frame
         doesn't overpower the canvas on mobile.
    */
    <div 
      className="fixed inset-0 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-10 lg:p-16 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      
      {/* 
         WHITE CANVAS:
         - 'bg-white': Pure white background for the content area.
         - 'w-full h-full': Stretches to fill the space.
      */}
      <main className="bg-white w-full h-full rounded-none overflow-auto relative">
        
        {/*
           CONTENT CONSTRAINER:
           - Uses smaller interior padding on mobile for breathing room.
        */}
        <div className="max-w-6xl mx-auto h-full px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-12 flex flex-col">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
