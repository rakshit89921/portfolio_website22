import React from 'react';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, icon: Code },
    { name: 'JavaScript', level: 90, icon: Zap },
    { name: 'React', level: 88, icon: Code },
    { name: 'Tailwind', level: 92, icon: Palette },
    { name: 'UI/UX Design', level: 85, icon: Smartphone }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-slate-300 dark:bg-slate-600 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 dark:text-slate-400 text-sm font-medium"><img src="images\my.jpg" alt="" /></span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm a passionate frontend developer with 2+ years of experience creating exceptional digital experiences. 
              I specialize in building responsive layouts, smooth animations, and UI/UX-focused designs that drive results for businesses worldwide.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon size={18} className="text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: 'fill-bar 1.5s ease-out forwards'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">18+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;