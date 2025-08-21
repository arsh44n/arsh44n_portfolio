/*
import neurionImage from 'figma:asset/fe58bfeec4e845a0ca79da58da7394a638cf0661.png';
import aiDoctorImage from 'figma:asset/d54c9cebb0461903dc022054e9188ca044f04bd7.png';
import hrAnalyticsImage from 'figma:asset/551e1fa11ac451e73c4352556e075e9d60da1c19.png';

const projects = [
  {
    title: "Neurion AI",
    category: "AI Automation Platform",
    description: "Advanced neural network platform for business automation and intelligent decision-making systems.",
    href: "https://neurionai.netlify.app/",
    image: neurionImage,
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    status: "Live"
  },
  {
    title: "AI Doctor",
    category: "Healthcare AI Solution",
    description: "Intelligent medical diagnosis system using machine learning to assist healthcare professionals.",
    href: "https://github.com/arsh44n/AI-Voice-Prescription",
    image: aiDoctorImage,
    technologies: ["AI/ML", "Python", "React", "PostgreSQL"],
    status: "Live"
  },
  {
    title: "HR Analytics",
    category: "Business Intelligence",
    description: "Comprehensive analytics dashboard for human resources performance tracking and insights.",
    href: "https://github.com/arsh44n/HR-insight-Analytics",
    image: hrAnalyticsImage,
    technologies: ["Power BI", "SQL", "Python", "React"],
    status: "Live"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-[1800px] mx-auto px-10 mt-20">
      <div className="flex flex-col items-center w-full">
        <p className="text-[1.2rem] font-light tracking-[0.5px] uppercase opacity-50 mb-16 text-foreground">
          Selected Work
        </p>
        
        <div className="w-full flex flex-col gap-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`w-full flex items-center gap-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              } group`}
            >
              {/* Project Image */}
              <div className="w-1/2 h-[400px] rounded-[30px] overflow-hidden bg-secondary relative group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="w-1/2 flex flex-col">
                <div className="mb-6">
                  <p className="text-[0.9rem] font-light tracking-[1px] uppercase mb-3 opacity-70 text-[#5C54F9]">
                    {project.category}
                  </p>
                  <h2 className="text-[4rem] font-normal leading-[1] tracking-[-2px] text-foreground mb-4 group-hover:text-[#5C54F9] transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80 mb-6 max-w-[25ch]">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-sm font-medium mb-3 text-foreground/60">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <a 
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-foreground hover:text-[#5C54F9] transition-colors group/link w-fit"
                >
                  <span className="text-lg font-medium">View Project</span>
                  <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center group-hover/link:scale-110 transition-transform">
                    <svg className="w-5 h-5 group-hover/link:rotate-[-20deg] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 19 19">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.5H2.5M16.5 9.5L10.5 15.5M16.5 9.5L10.5 3.5"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-20 text-center">
          <a 
            href="https://github.com/arsh44n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-foreground hover:text-[#5C54F9] transition-colors group"
          >
            <span className="text-xl font-medium">View All Projects</span>
            <div className="w-14 h-14 border-2 border-current rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 group-hover:rotate-[-20deg] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 19 19">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.5H2.5M16.5 9.5L10.5 15.5M16.5 9.5L10.5 3.5"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
*/