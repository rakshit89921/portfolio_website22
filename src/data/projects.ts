export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with seamless shopping experience and secure payment processing.',
    category: 'Business',
    technologies: ['React', 'TypeScript', 'Stripe', 'Node.js'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and user management features.',
    category: 'Dashboards',
    technologies: ['React', 'Chart.js', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '3',
    title: 'Agency Landing Page',
    description: 'High-converting landing page for digital marketing agency with smooth animations.',
    category: 'Landing Pages',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '4',
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with online menu and reservation system.',
    category: 'Business',
    technologies: ['React', 'Styled Components', 'Sanity CMS'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '5',
    title: 'Project Management Tool',
    description: 'Collaborative project management application with team features.',
    category: 'SaaS',
    technologies: ['React', 'Redux', 'Material-UI', 'Express'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '6',
    title: 'Creative Portfolio',
    description: 'Artistic portfolio website for photographer with gallery and booking system.',
    category: 'Landing Pages',
    technologies: ['Gatsby', 'GraphQL', 'Netlify CMS'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '7',
    title: 'Financial Dashboard',
    description: 'Real-time financial analytics dashboard with advanced charting capabilities.',
    category: 'Dashboards',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: '8',
    title: 'Fitness App Landing',
    description: 'Mobile-first landing page for fitness application with workout tracking features.',
    category: 'Landing Pages',
    technologies: ['React', 'GSAP', 'Tailwind', 'PWA'],
    liveUrl: '#',
    sourceUrl: '#'
  }
];