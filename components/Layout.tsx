
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
       - 'fixed inset-0': Pins this container to the edges of the browser window.
       - style={{ backgroundColor: bgColor }}: Dynamically sets the background color.
       - 'flex items-center justify-center': Perfectly centers the inner white rectangle.
       - 'p-16': Applies exactly 64px (4rem) of padding on all sides.
       - 'overflow-hidden': Prevents the main body from scrolling.
    */
    <div 
      className="fixed inset-0 flex items-center justify-center p-16 overflow-hidden transition-colors duration-500"
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
           - 'max-w-6xl mx-auto': Prevents text stretching.
           - 'px-12 py-12': Internal padding.
           - 'flex flex-col': Standard vertical layout.
        */}
        <div className="max-w-6xl mx-auto h-full px-12 py-12 flex flex-col">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
