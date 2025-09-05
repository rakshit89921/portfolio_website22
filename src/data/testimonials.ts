export interface Testimonial {
  id: string;
  name: string;
  position: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Vishakha Singh',
    position: 'CEO, TechStart Inc.',
    quote: 'Rakshit delivered an exceptional website that exceeded our expectations. The attention to detail and modern design perfectly captured our brand vision.',
    rating: 4
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Marketing Director, GrowthCo',
    quote: 'Working with Rakshit was a pleasure. The website is not only beautiful but also highly functional and optimized for conversions.',
    rating: 5
  },
  {
    id: '3',
    name: 'Rahul Mehta',
    position: 'Founder, Creative Studio',
    quote: 'The portfolio website Rakshit created has been instrumental in attracting new clients. The design is stunning and truly represents our creative work.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Rodriguez',
    position: 'Product Manager, InnovateLabs',
    quote: 'Exceptional work on our SaaS dashboard. The user interface is intuitive and the performance is outstanding. Highly recommend!',
    rating: 4
  }
];