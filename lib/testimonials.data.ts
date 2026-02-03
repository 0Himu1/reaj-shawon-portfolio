export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  result?: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Reaj's strategy changed our business. He lowered our cost per lead by 40% in just two months. His attention to audience psychology is unmatched.",
    author: 'Sarah J.',
    role: 'E-commerce Owner',
    company: 'Fashion Brand Bangladesh',
    result: '40% reduction in cost per lead',
    rating: 5
  },
  {
    id: 2,
    quote: "Finally, a marketer who understands the budget. He managed our $1,500 ad spend efficiently and delivered real sales, not just likes.",
    author: 'Rahim A.',
    role: 'Education Consultant',
    company: 'EdTech Platform',
    result: '$1,500 ad spend → Real sales conversion',
    rating: 5
  },
  {
    id: 3,
    quote: "What impressed me most was his willingness to optimize every day. Not just setting campaigns and forgetting them. He genuinely cares about the results.",
    author: 'Fatema K.',
    role: 'Lifestyle Brand Founder',
    company: 'Local Wellness Co.',
    result: 'Daily optimization & real care',
    rating: 5
  },
  {
    id: 4,
    quote: "His research-first approach is refreshing. Instead of guessing, he analyzes the market and our customers. That clarity translated into a 3.5x ROAS.",
    author: 'Ahmed H.',
    role: 'Product Manager',
    company: 'Online Retail Store',
    result: '3.5x ROAS achieved',
    rating: 5
  }
]

export function getTestimonialById(id: number): Testimonial | undefined {
  return testimonials.find(testimonial => testimonial.id === id)
}
