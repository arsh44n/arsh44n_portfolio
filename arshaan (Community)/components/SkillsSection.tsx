/*
import { ImageWithFallback } from "./figma/ImageWithFallback";

const skills = [
  {
    text: ["AI", "automation"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&crop=center"
  },
  {
    text: ["Business", "analysis"], 
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=center"
  },
  {
    text: ["Web", "design"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop&crop=center"
  },
  {
    text: ["Data", "analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center"
  },
  {
    text: ["Process", "optimization"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200&h=200&fit=crop&crop=center"
  }
];

const services = [
  {
    title: "AI Automation Solutions",
    description: "Custom AI-powered automation systems that streamline business processes and reduce manual workload.",
    features: ["Workflow Automation", "Intelligent Decision Making", "Process Optimization", "AI Integration"]
  },
  {
    title: "Business Analysis & Consulting",
    description: "Strategic business analysis to identify opportunities, optimize operations, and drive growth.",
    features: ["Requirements Analysis", "Process Mapping", "Performance Metrics", "Strategic Planning"]
  },
  {
    title: "Web Design & Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and user-centric design.",
    features: ["Custom Web Apps", "Responsive Design", "User Experience", "Performance Optimization"]
  }
];

export function SkillsSection() {
  return (
    <section className="overflow-x-hidden my-40 px-10 max-w-[1800px] mx-auto">
      {/* Skills Showcase */}
      <div className="flex items-center justify-center flex-col gap-20 mb-32">
        <p className="text-[1.2rem] font-light tracking-[0.5px] uppercase opacity-50 text-foreground">
          Skills & Expertise
        </p>

        {skills.map((skill, index) => (
          <div key={index} className="flex items-center group">
            <p className="text-[7rem] whitespace-nowrap tracking-[-0.05em] font-semibold text-foreground md:text-[6rem] lg:text-[5rem] xl:text-[4rem] 2xl:text-[7rem]">
              {skill.text[0]}
            </p>
            
            <div className="w-0 rounded-[30px] border-2 border-transparent mx-4 overflow-hidden flex items-center justify-center group-hover:w-[12rem] group-hover:border-foreground transition-all duration-500 ease-in-out">
              <div className="rounded-[30px] w-full max-w-[12rem] h-[12rem] scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={skill.image}
                  alt={`${skill.text[0]} ${skill.text[1]}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-[7rem] whitespace-nowrap tracking-[-0.05em] font-semibold text-foreground md:text-[6rem] lg:text-[5rem] xl:text-[4rem] 2xl:text-[7rem]">
              {skill.text[1]}
            </p>
          </div>
        ))}
      </div>

      {/* Services Grid */}
      <div className="w-full">
        <p className="text-[1.2rem] font-light tracking-[0.5px] uppercase opacity-50 text-foreground text-center mb-16">
          Services Offered
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-[30px] p-8 border border-border hover:border-[#5C54F9] transition-all duration-300 group hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-medium mb-4 text-foreground group-hover:text-[#5C54F9] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-[#5C54F9] rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-2 border-[#5C54F9] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#5C54F9]" fill="none" stroke="currentColor" viewBox="0 0 19 19">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.5H2.5M16.5 9.5L10.5 15.5M16.5 9.5L10.5 3.5"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/