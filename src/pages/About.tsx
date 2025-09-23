import { Navigation } from '@/components/Navigation';
import { CyberButton } from '@/components/ui/cyber-button';
import { CursorTrail } from '@/components/CursorTrail';
import { Footer } from '@/components/Footer';
import { ThreeScene } from '@/components/ThreeScene';
import { HeroCyberGrid } from '@/components/HeroCyberGrid';
import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  stats: Array<{ label: string; value: string }>;
}

const teamMembers: TeamMember[] = [
  {
    name: 'DEBANGSHU CHATTERJEE',
    role: 'CO FOUNDER',
    bio: 'Leading the charge in neural network architecture with experience in deep learning and AI research.',
    stats: [
      { label: 'PROJECTS', value: '5+' },
      { label: 'ACCURACY', value: '98.7%' },
      { label: 'STATUS', value: 'ACTIVE' }
    ]
  },
  {
    name: 'NIRMALYA SENGUPTA',
    role: 'CO FOUNDER',
    bio: 'Focused on optimizing AI algorithms for next-generation processing power.',
    stats: [
      { label: 'PROJECTS', value: '5+' },
      { label: 'EFFICIENCY', value: '98.2%' },
      { label: 'STATUS', value: 'BUSY' }
    ]
  },
  {
    name: 'TO BE REVEALED',
    role: 'TO BE REVEALED',
    bio: 'TO BE REVEALED',
    stats: [
      { label: 'PROJECTS', value: 'X' },
      { label: 'SATISFACTION', value: '99.9%' },
      { label: 'STATUS', value: 'ACTIVE' }
    ]
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <CursorTrail />
      <ThreeScene />
      <HeroCyberGrid />
      <Navigation />
      
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-cyan mb-4">
            ABOUT AI ZENERA
          </h1>
          <p className="text-xl font-tech text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of artificial intelligence through revolutionary neural networks 
            and cutting-edge machine learning technologies.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="box-3d p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-cyan to-cyber-yellow rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-orbitron font-semibold text-cyber-cyan">{member.name}</h3>
                <p className="text-cyber-yellow font-tech">{member.role}</p>
              </div>
              <p className="text-foreground/80 font-tech text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="space-y-2">
                {member.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex justify-between items-center">
                    <span className="text-muted-foreground font-tech text-xs">{stat.label}</span>
                    <span className="text-cyber-cyan font-tech text-xs font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="box-3d p-8 rounded-lg backdrop-blur-sm mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-cyber-yellow mb-6 text-center">
            OUR MISSION
          </h2>
          <p className="text-foreground/80 font-tech text-lg leading-relaxed text-center max-w-4xl mx-auto">
            To revolutionize the digital landscape through advanced AI technologies, creating intelligent 
            systems that enhance human potential and drive innovation across industries. Our commitment to 
            excellence and cutting-edge research positions us at the forefront of the AI revolution.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "INNOVATION",
              description: "Pushing boundaries with groundbreaking AI research and development",
              icon: "🚀"
            },
            {
              title: "EXCELLENCE",
              description: "Delivering superior solutions with precision and reliability",
              icon: "⭐"
            },
            {
              title: "INTEGRITY",
              description: "Building trust through ethical AI practices and transparency",
              icon: "🛡️"
            },
            {
              title: "COLLABORATION",
              description: "Fostering partnerships to accelerate technological advancement",
              icon: "🤝"
            }
          ].map((value, index) => (
            <div key={index} className="box-3d p-6 rounded-lg backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{value.icon}</span>
                <h3 className="text-xl font-orbitron font-semibold text-cyber-cyan">{value.title}</h3>
              </div>
              <p className="text-foreground/80 font-tech leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact">
            <CyberButton variant="cyber" size="lg" className="font-orbitron tracking-wider box-3d">
              JOIN THE REVOLUTION
            </CyberButton>
          </a>
        </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default About;
