import React from 'react';
import { Monitor, Briefcase, User, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Landing Pages',
      description: 'High-converting landing pages that drive results and capture leads effectively.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized']
    },
    {
      icon: Briefcase,
      title: 'Business Websites',
      description: 'Professional corporate websites that establish credibility and showcase your brand.',
      features: ['CMS Integration', 'Multi-page', 'Contact Forms']
    },
    {
      icon: User,
      title: 'Portfolios',
      description: 'Stunning portfolio websites that showcase your work and attract opportunities.',
      features: ['Gallery Layouts', 'Interactive Elements', 'Personal Branding']
    },
    {
      icon: BarChart3,
      title: 'Dashboards',
      description: 'Data-driven dashboards with intuitive interfaces and powerful analytics.',
      features: ['Data Visualization', 'Real-time Updates', 'User Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Specialized in creating digital experiences that make an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;