/*
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export function ContactSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 1600;
    canvas.height = 1000;

    // Create animated gradient
    let frame = 0;
    const animate = () => {
      frame++;
      
      // Create flowing gradient animation
      const gradient = ctx.createRadialGradient(
        800 + Math.sin(frame * 0.005) * 200, 
        500 + Math.cos(frame * 0.003) * 150, 
        100,
        800, 
        500, 
        600
      );
      
      gradient.addColorStop(0, '#5C54F9');
      gradient.addColorStop(0.2, '#4D20FF');
      gradient.addColorStop(0.5, '#E46289');
      gradient.addColorStop(0.8, '#FF5789');
      gradient.addColorStop(1, '#1CF2CC');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arsh44n",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/arsh44n",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:arsh44n.work@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="w-full max-w-[1800px] mx-auto mt-8 px-10">
      <div className="relative w-full overflow-x-hidden h-[700px] rounded-[30px] p-20 mb-8">
        {/* Gradient Background */}
        <div className="rounded-[30px] overflow-hidden h-full w-full left-0 top-0 absolute">
          <canvas 
            ref={canvasRef}
            className="absolute h-full object-cover w-full blur-[10px] scale-110"
          />
          
          {/* Grain overlay */}
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iMiIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz4KPHN2Zz4=')] rounded-[30px]" />
        </div>

        {/* Content */}
        <div className="h-full relative flex flex-col justify-between z-[2]">
          <div>
            <h2 className="text-[6rem] font-normal text-white leading-[1.1em] max-w-[12ch] md:text-[3rem] md:text-center lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] mb-6">
              Ready to transform <br /> your business with <span className="font-bold">AI automation?</span>
            </h2>
            
            <p className="text-white/80 text-xl max-w-[30ch] leading-relaxed">
              Let's discuss how AI automation and business analysis can streamline your operations and drive growth.
            </p>
          </div>

          <div className="self-end flex flex-col items-end md:self-center md:items-center">
            <Button 
              asChild
              className="text-white text-[1.8rem] font-normal rounded-[50px] border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 flex gap-2 items-center mb-6 px-6 py-3"
            >
              <a href="mailto:arsh44n.work@gmail.com">
                <span className="text-[1.5rem] animate-spin" style={{animationDuration: '2s', animationDelay: '4s'}}>
                  ✦
                </span>
                Let's collaborate
                <span className="text-[1.5rem] animate-spin" style={{animationDuration: '2s', animationDelay: '4s'}}>
                  ✦
                </span>
              </a>
            </Button>
            
            <p className="font-light text-[1.4rem] text-white text-center md:text-base mb-6">
              Prefer email? Reach out at{' '}
              <a 
                href="mailto:arsh44n.work@gmail.com"
                className="text-white font-medium border-b-2 border-transparent hover:border-white transition-all duration-300 cursor-pointer"
              >
                arsh44n.work@gmail.com
              </a>
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="flex justify-between items-center text-foreground/60">
          <p>&copy; 2025 Arshaan Khan. All rights reserved.</p>
          <p>AI Automater • Business Analyst • Web Designer</p>
        </div>
      </footer>
    </section>
  );
}
*/