export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
  imageUrl: string; // Added imageUrl
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Gym Website',
    description: 'Transform your fitness journey with a modern gym platform offering seamless workout experiences and secure membership management.',
    category: 'Business',
    technologies: ['React', 'TypeScript', 'Stripe', 'Node.js'],
    liveUrl: 'https://myfitgym21.netlify.app/',
    sourceUrl: '#',
    imageUrl: '/images/gym.png' // Correct path for public folder
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and user management features.',
    category: 'Dashboards',
    technologies: ['React', 'Chart.js', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    sourceUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Agency Landing Page',
    description: 'High-converting landing page for digital marketing agency with smooth animations.',
    category: 'Landing Pages',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    sourceUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with online menu and reservation system.',
    category: 'Business',
    technologies: ['React', 'Styled Components', 'Sanity CMS'],
    liveUrl: 'https://delhispice.netlify.app/',
    sourceUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '5',
    title: 'Project Management Tool',
    description: 'Collaborative project management application with team features.',
    category: 'SaaS',
    technologies: ['React', 'Redux', 'Material-UI', 'Express'],
    liveUrl: '#',
    sourceUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
  }
];