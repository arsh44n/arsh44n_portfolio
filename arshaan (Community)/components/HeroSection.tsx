/*
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import robotImage from 'figma:asset/b60e9c32eddd0109f92efa772475edbb8a817711.png';

const statsData = [
  { number: "50+", description: "AI automation solutions deployed" },
  { number: "200K", description: "Hours saved through automation" },
  { number: "15+", description: "Business processes optimized" },
  { number: "95%", description: "Client satisfaction rate" },
  { number: "3", description: "Years of AI expertise" }
];

const blogPosts = [
  {
    title: "Creating Creative Creations🧬🤖",
    image: robotImage
  },
  {
    title: "Data-driven insights: transforming business analytics.",
    image: "/api/placeholder/248/150"
  },
  {
    title: "Modern web design trends for 2025.",
    image: "/api/placeholder/247/150"
  },
  {
    title: "AI integration strategies for small businesses.",
    image: "/api/placeholder/249/150"
  },
  {
    title: "The future of business process automation.",
    image: "/api/placeholder/248/150"
  }
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 463;
    canvas.height = 855;

    // Create gradient animation
    let frame = 0;
    const animate = () => {
      frame++;
      
      // Create animated gradient
      const gradient = ctx.createRadialGradient(
        200 + Math.sin(frame * 0.01) * 50, 
        400 + Math.cos(frame * 0.01) * 50, 
        50,
        200, 
        400, 
        300
      );
      
      gradient.addColorStop(0, '#5C54F9');
      gradient.addColorStop(0.3, '#4D20FF');
      gradient.addColorStop(0.6, '#E46289');
      gradient.addColorStop(1, '#FF5789');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex mt-2.5 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-10">
        <div className="flex justify-between gap-2.5 min-h-[630px] h-[95vh]">
          {/* Left Side - Hero Content */}
          <div className="relative w-full h-full rounded-[30px] flex items-end">
            {/* Gradient Background */}
            <div className="overflow-hidden rounded-[30px] absolute h-full w-full">
              <div className="w-full rounded-[30px]">
                <canvas 
                  ref={canvasRef}
                  className="rounded-[30px] w-full h-full object-cover"
                  style={{ filter: 'hue-rotate(330deg)' }}
                />
              </div>
            </div>

            {/* Grain overlay */}
            <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iMiIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz4KPHN2Zz4=')] rounded-[30px] z-[1]" />

            {/* Content Box */}
            <div className="rounded-[0_30px_0_0] w-full max-w-[50%] h-[250px] relative z-[2] flex flex-col items-start justify-between p-5 pr-5 pb-0 bg-background">
              {/* Corner decorations */}
              <svg className="absolute -right-[30px] bottom-0 w-[30px] h-[30px] rotate-[-90deg]" viewBox="0 0 30 30">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor" className="text-background"/>
              </svg>
              <svg className="absolute left-0 -top-[30px] w-[30px] h-[30px] rotate-[-90deg]" viewBox="0 0 30 30">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor" className="text-background"/>
              </svg>

              <h1 className="text-[clamp(2.35rem,2.114rem+1vw,3.75rem)] max-w-[20ch] font-normal leading-[1.1] text-foreground">
                AI Automater, Business Analyst & Web Designer
              </h1>

              <a 
                href="#about"
                className="w-[50px] min-h-[50px] border-2 border-foreground rounded-[50px] mb-1 flex items-center justify-center group hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 rotate-90 group-hover:rotate-[110deg] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 19 19">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.5H2.5M16.5 9.5L10.5 15.5M16.5 9.5L10.5 3.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Stats and Blog */}
          <div className="flex flex-col justify-between gap-2.5 items-center h-full">
            {/* Statistics Carousel */}
            <div className="w-[280px] aspect-square rounded-full bg-background border-2 border-foreground overflow-hidden">
              <Carousel className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {statsData.map((stat, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="h-full flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-[4rem] font-normal text-foreground mb-2">
                          {stat.number}
                        </h2>
                        <p className="text-base opacity-70 max-w-[15ch] text-foreground">
                          {stat.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Blog Posts Carousel */}
            <div className="relative w-[280px] h-full bg-[#5C54F9] rounded-[30px]">
              <Carousel className="h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {blogPosts.map((post, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="h-full flex flex-col items-start justify-start p-4 text-white">
                        <div className="w-full h-[150px] rounded-[20px] mb-4 overflow-hidden bg-white/10">
                          {index === 0 ? (
                            <img
                              src={post.image}
                              alt="Robot AI creation"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <ImageWithFallback
                              src={post.image}
                              alt="Blog post thumbnail"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <p className="w-[15ch] text-[1.6rem] font-normal text-white">
                          {post.title}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Button */}
              <button className="absolute bottom-0 right-0 w-[60px] aspect-square rounded-[35px_0_0_0] bg-background flex items-end justify-end group">
                <div className="w-[50px] aspect-square bg-background border-2 border-foreground rounded-full flex items-center justify-center mr-1 mb-1 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 group-hover:rotate-[-20deg] group-hover:scale-125 transition-all" fill="none" stroke="currentColor" viewBox="0 0 19 19">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.5H2.5M16.5 9.5L10.5 15.5M16.5 9.5L10.5 3.5"/>
                  </svg>
                </div>
                
                {/* Corner decorations */}
                <svg className="absolute -left-[30px] bottom-0 w-[30px] h-[30px] rotate-180" viewBox="0 0 30 30">
                  <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor" className="text-background"/>
                </svg>
                <svg className="absolute -top-[30px] right-0 w-[30px] h-[30px] rotate-180" viewBox="0 0 30 30">
                  <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor" className="text-background"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/