// @/components/Services.jsx
import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker} from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiRust, SiMysql, SiPostgresql, SiC, SiGooglecloud, SiGnubash, SiNginx } from 'react-icons/si';
import StarknetIcon from './icons/StarknetIcon';
import CairoIcon from './icons/CairoIcon';

const skills = {
  frontend: [
    { name: 'HTML5', icon: FaHtml5, delay: 0 },
    { name: 'CSS3', icon: FaCss3Alt, delay: 300 },
    { name: 'JavaScript', icon: FaJs, delay: 600 },
    { name: 'React', icon: SiReact, delay: 900 },
    { name: 'Next.js', icon: SiNextdotjs, delay: 1200 },
    { name: 'Tailwind', icon: SiTailwindcss, delay: 1500 },
  ],
  backend: [
    { name: 'Python', icon: SiPython, delay: 0 },
    { name: 'Rust', icon: SiRust, delay: 300 },
    { name: 'C', icon: SiC, delay: 600 },
    { name: 'MySQL', icon: SiMysql, delay: 900 },
    { name: 'PostgreSQL', icon: SiPostgresql, delay: 1200 },
  ],
  blockchain: [
    { name: 'Starknet', icon: StarknetIcon, delay: 0 },
    { name: 'Cairo', icon: CairoIcon, delay: 300 },
    
  ],
  devops: [
    { name: 'Git', icon: FaGitAlt, delay: 0 },
    { name: 'Docker', icon: FaDocker, delay: 300 },
    { name: 'Bash', icon: SiGnubash, delay: 600 },
    { name: 'Google Cloud', icon: SiGooglecloud, delay: 900 },
    { name: 'Nginx', icon: SiNginx, delay: 1200 },
    
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="services" className="min-h-screen px-6 py-16 bg-base2 text-body">
      <div className="max-w-6xl mx-auto">
        <div className="pb-10" data-aos="fade-up">
          <h6 className="text-brand text-sm font-semibold uppercase">Skills</h6>
          <h1 className="text-4xl font-bold mt-2 text-heading">What I Can Do</h1>

          {/* Nav Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                activeTab === 'frontend' ? 'bg-brand text-base' : 'border-brand text-brand'
              } transition`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                activeTab === 'backend' ? 'bg-brand text-base' : 'border-brand text-brand'
              } transition`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab('blockchain')}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                activeTab === 'blockchain' ? 'bg-brand text-base' : 'border-brand text-brand'
              } transition`}
            >
              Blockchain
            </button>
            <button
              onClick={() => setActiveTab('devops')}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                activeTab === 'devops' ? 'bg-brand text-base' : 'border-brand text-brand'
              } transition`}
            >
              DevOps
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {skills[activeTab].map(({ name, icon: Icon, delay }, index) => (
            <div
              key={name}
               className="bg-base p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#e0f780] hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="flex items-center space-x-4 text-xl text-heading">
                <Icon className="text-brand text-3xl" size={48} />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

