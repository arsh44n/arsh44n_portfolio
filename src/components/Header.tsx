import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top line */}
      <div className="w-full h-2.5 bg-background" />
      
      <div className="max-w-[1800px] mx-auto px-10 flex items-start">
        {/* Logo Box */}
        <div className="flex items-center justify-between w-auto pr-4 h-20 bg-background rounded-b-[30px] mr-3 relative z-20">
          <a href="#" className="relative">
            <div className="w-[200px] h-16 bg-foreground rounded-lg flex items-center justify-center px-4">
              <span className="text-background text-xl font-bold">Arshaan Khan</span>
            </div>
          </a>

          {/* Corner decorations */}
          <svg className="absolute -bottom-[30px] left-0 w-[30px] h-[30px]" viewBox="0 0 30 30">
            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor" className="text-background"/>
          </svg>
          <svg className="absolute -right-[30px] top-0 w-[30px] h-[30px]" viewBox="0 0 30 30">
            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor" className="text-background"/>
          </svg>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center w-20 h-10 border-2 border-foreground rounded-[20px] ml-2 font-medium"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center h-[58px] rounded-[50px] px-2 backdrop-blur-[10px] bg-white/50 border border-gray-300/50 shadow-lg mt-2.5">
          <a href="#projects" className="px-3.5 py-2 text-base font-normal transition-opacity hover:opacity-70">Projects</a>
          <a href="#about" className="px-3.5 py-2 text-base font-normal transition-opacity hover:opacity-70">About</a>
          <a href="#" target="_blank" className="px-3.5 py-2 text-base font-normal transition-opacity hover:opacity-70">Blog</a>
          <a href="#contact" className="px-3.5 py-2 text-base font-normal transition-opacity hover:opacity-70 mr-8">Contact</a>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 border border-foreground rounded-[35px] cursor-pointer"
          >
            <div className={`rounded-full w-5 h-5 relative transition-all duration-300 ${
              isDarkMode 
                ? 'shadow-[inset_32px_-32px_black] scale-50' 
                : 'shadow-[inset_8px_-8px_0_0_black] scale-100 rotate-[-2deg]'
            }`}>
              {!isDarkMode && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full shadow-[0_-13px_0_white,0_13px_0_white,13px_0_0_white,-13px_0_0_white,9px_9px_0_white,-9px_9px_0_white,9px_-9px_0_white,-9px_-9px_0_white] scale-150 transition-all duration-500" />
              )}
            </div>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#5C54F9] h-[80vh] max-h-[540px] rounded-[30px_0_30px_30px] shadow-2xl flex flex-col p-8 text-white md:hidden">
            <a href="#projects" className="text-2xl border-b border-white pb-1 mb-1 transition-opacity hover:opacity-80" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#about" className="text-2xl border-b border-white pb-1 mb-1 transition-opacity hover:opacity-80" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#" target="_blank" className="text-2xl border-b border-white pb-1 mb-1 transition-opacity hover:opacity-80">Blog</a>
            <a href="#contact" className="text-2xl border-b border-white pb-1 mb-1 transition-opacity hover:opacity-80" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            
            <div className="absolute bottom-4 flex items-center border border-white rounded-[50px] h-15 px-2.5">
              <button onClick={toggleTheme} className="w-10 h-10 bg-white rounded-full">
                <div className={`rounded-full w-5 h-5 relative transition-all duration-300 mx-auto ${
                  isDarkMode 
                    ? 'shadow-[inset_32px_-32px_black] scale-50' 
                    : 'shadow-[inset_8px_-8px_0_0_black] scale-100'
                }`} />
              </button>
              <p className="ml-4 text-white/50">Dark Mode</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}