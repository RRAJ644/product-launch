import type { LucideIcon } from 'lucide-react'
import { Rocket, TrendingUp, Users } from 'lucide-react'
import { Upload, Megaphone, CheckCircle } from 'lucide-react'

export type navLink = { title: string; href: string }

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export type Step = {
  icon: LucideIcon
  title: string
  description: string
}

export type Testimonial = {
  name: string
  role: string
  feedback: string
  image: string
}

export const navLinks: navLink[] = [
  { title: 'Latest', href: '/latest' },
  { title: 'Featured', href: '/featured' },
  { title: 'Blogs', href: '/blogs' },
]

export const features: Feature[] = [
  {
    icon: Rocket,
    title: 'Effortless Launch',
    description: 'Launch your product in minutes with an optimized workflow.',
  },
  {
    icon: TrendingUp,
    title: 'Maximize Visibility',
    description:
      'Get your product in front of the right audience with smart marketing tools.',
  },
  {
    icon: Users,
    title: 'Engage Your Audience',
    description:
      'Build a community and drive engagement with interactive tools.',
  },
]

export const howItWorks: Step[] = [
  {
    icon: Upload,
    title: 'Upload Your Product',
    description:
      'Easily add your product details and media for a stunning presentation.',
  },
  {
    icon: Megaphone,
    title: 'Promote to the Right Audience',
    description:
      'Use AI-powered marketing tools to reach the perfect customers.',
  },
  {
    icon: CheckCircle,
    title: 'Track & Optimize',
    description:
      "Monitor your product's performance and optimize for better engagement.",
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    role: 'Startup Founder',
    feedback:
      'This platform made launching our product effortless! Highly recommend.',
    image: '/images/alice.jpg',
  },
  {
    name: 'Michael Lee',
    role: 'Marketing Specialist',
    feedback:
      'The visibility tools helped us reach the right audience quickly!',
    image: '/images/michael.jpg',
  },
  {
    name: 'Sophia Patel',
    role: 'Product Manager',
    feedback:
      'Engagement tools are top-notch! Built a strong community around our product.',
    image: '/images/sophia.jpg',
  },
]

export const tabs: string[] = ['Overview', 'Launches', 'Forums', 'Reviews', 'Team']

export const slugify = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
}
