'use client'

import FeaturedGrid from '@/components/custom/FeaturedGrid'
import Overview from '@/components/custom/Overview'

export interface Product {
  id: number
  title: string
  description: string
  image: string
  featured: boolean
  website: string
  tagline: string
  logo: string
  tabs: string[]
  content: Record<string, React.ReactNode>
}

const products: Product[] = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description:
      'Boost your brand with cutting-edge AI-driven content creation.',
    image: '/images/ai-tool.jpg',
    featured: true,
    website: 'https://ai-content.com',
    tagline: 'Create high-quality content in seconds!',
    logo: '/images/ai-logo.png',
    tabs: ['Overview', 'Features', 'Pricing', 'Reviews'],
    content: {
      Overview: <div>AI-Powered Content Generator Overview</div>,
      Features: (
        <div>Automated writing, plagiarism-free content, and more.</div>
      ),
      Pricing: (
        <div>Free trial available. Paid plans start at $9.99/month.</div>
      ),
      Reviews: <div>4.8/5 rating from 500+ users.</div>,
    },
  },
  {
    id: 2,
    title: 'Seamless Crypto Payment Gateway',
    description: 'Accept Bitcoin, Ethereum, and more with our secure gateway.',
    image: '/images/crypto-gateway.jpg',
    featured: true,
    website: 'https://cryptopay.com',
    tagline: 'Secure and fast crypto transactions!',
    logo: '/images/crypto-logo.png',
    tabs: ['Overview', 'Security', 'Integration', 'Pricing'],
    content: {
      Overview: <div>Seamless Crypto Payment Gateway Overview</div>,
      Security: <div>Bank-level encryption and multi-signature security.</div>,
      Integration: (
        <div>Easy API integration with major eCommerce platforms.</div>
      ),
      Pricing: <div>Zero setup fees, 1% transaction fee.</div>,
    },
  },
  {
    id: 3,
    title: 'Automated Digital Marketing Suite',
    description:
      'Increase engagement and conversions with AI-powered automation.',
    image: '/images/marketing.jpg',
    featured: true,
    website: 'https://digitalmarketing.ai',
    tagline: 'Maximize your marketing efforts with AI!',
    logo: '/images/marketing-logo.png',
    tabs: ['Overview', 'Automation', 'Pricing', 'Support'],
    content: {
      Overview: <div>Automated Digital Marketing Suite Overview</div>,
      Automation: (
        <div>Social media scheduling, email automation, and AI insights.</div>
      ),
      Pricing: <div>Basic plan: $19.99/month, Pro plan: $49.99/month.</div>,
      Support: <div>24/7 customer support and onboarding assistance.</div>,
    },
  },
  {
    id: 4,
    title: 'Advanced E-commerce SEO Strategies',
    description:
      'Rank higher on Google and drive organic traffic effortlessly.',
    image: '/images/seo.jpg',
    featured: true,
    website: 'https://seo-expert.com',
    tagline: 'Dominate search rankings with expert SEO!',
    logo: '/images/seo-logo.png',
    tabs: ['Overview', 'Techniques', 'Pricing', 'Case Studies'],
    content: {
      Overview: <div>Advanced E-commerce SEO Strategies Overview</div>,
      Techniques: (
        <div>Keyword research, backlinking, and on-page optimization.</div>
      ),
      Pricing: <div>SEO plans starting from $299/month.</div>,
      'Case Studies': <div>Success stories from 100+ clients.</div>,
    },
  },
  {
    id: 5,
    title: 'High-Converting Social Media Ads',
    description: 'Run laser-targeted ad campaigns to maximize ROI.',
    image: '/images/social-ads.jpg',
    featured: true,
    website: 'https://socialads.com',
    tagline: 'Boost conversions with data-driven ads!',
    logo: '/images/social-ads-logo.png',
    tabs: ['Overview', 'Ad Strategies', 'Pricing', 'Testimonials'],
    content: {
      Overview: <div>High-Converting Social Media Ads Overview</div>,
      'Ad Strategies': (
        <div>Audience targeting, A/B testing, and budget optimization.</div>
      ),
      Pricing: <div>Flexible ad plans starting from $50/month.</div>,
      Testimonials: <div>Top brands trust us with their ad campaigns.</div>,
    },
  },
  {
    id: 6,
    title: 'AI-Powered Chatbots for Business',
    description: 'Enhance customer support with smart AI chatbots.',
    image: '/images/chatbots.jpg',
    featured: true,
    website: 'https://chatbotai.com',
    tagline: 'Revolutionize customer interactions with AI!',
    logo: '/images/chatbot-logo.png',
    tabs: ['Overview', 'Features', 'Pricing', 'Case Studies'],
    content: {
      Overview: <div>AI-Powered Chatbots for Business Overview</div>,
      Features: (
        <div>24/7 support, multilingual capabilities, and automation.</div>
      ),
      Pricing: <div>Free plan available, premium starts at $29/month.</div>,
      'Case Studies': (
        <div>How businesses improved customer engagement by 80%.</div>
      ),
    },
  },
  {
    id: 7,
    title: 'Smart Email Marketing Automation',
    description: 'Increase open rates and conversions with AI-driven emails.',
    image: '/images/email-marketing.jpg',
    featured: true,
    website: 'https://emailauto.com',
    tagline: 'Turn leads into customers with automated emails!',
    logo: '/images/email-logo.png',
    tabs: ['Overview', 'Automation', 'Templates', 'Pricing'],
    content: {
      Overview: <div>Smart Email Marketing Automation Overview</div>,
      Automation: <div>AI-powered email scheduling and lead nurturing.</div>,
      Templates: <div>100+ high-converting email templates.</div>,
      Pricing: <div>Starter: $19.99/month, Enterprise: $99.99/month.</div>,
    },
  },
  {
    id: 8,
    title: 'Cloud-Based CRM Solution',
    description: 'Manage your sales pipeline with our all-in-one CRM platform.',
    image: '/images/crm.jpg',
    featured: true,
    website: 'https://cloudcrm.com',
    tagline: 'Grow your business with smarter customer management!',
    logo: '/images/crm-logo.png',
    tabs: ['Overview', 'Features', 'Integrations', 'Pricing'],
    content: {
      Overview: <div>Cloud-Based CRM Solution Overview</div>,
      Features: <div>Lead tracking, automation, and reporting analytics.</div>,
      Integrations: <div>Connect with 50+ business tools and apps.</div>,
      Pricing: <div>CRM plans start at $49/month.</div>,
    },
  },
  {
    id: 9,
    title: 'AI-Based Product Recommendation Engine',
    description: 'Personalized product recommendations for your customers.',
    image: '/images/recommendation-engine.jpg',
    featured: true,
    website: 'https://airecommend.com',
    tagline: 'Boost sales with smart product recommendations!',
    logo: '/images/recommendation-logo.png',
    tabs: ['Overview', 'Technology', 'Pricing', 'Case Studies'],
    content: {
      Overview: <div>AI-Based Product Recommendation Engine Overview</div>,
      Technology: (
        <div>AI-driven personalization and machine learning models.</div>
      ),
      Pricing: <div>Basic: $99/month, Enterprise: $499/month.</div>,
      'Case Studies': <div>How brands increased revenue by 25% using AI.</div>,
    },
  },
  {
    id: 10,
    title: 'No-Code Website Builder',
    description: 'Build stunning websites without coding skills.',
    image: '/images/no-code-builder.jpg',
    featured: true,
    website: 'https://nocodebuilder.com',
    tagline: 'Create professional websites with drag-and-drop!',
    logo: '/images/nocode-logo.png',
    tabs: ['Overview', 'Templates', 'Pricing', 'Customer Stories'],
    content: {
      Overview: <div>No-Code Website Builder Overview</div>,
      Templates: <div>100+ responsive website templates available.</div>,
      Pricing: <div>Free trial, paid plans start at $10/month.</div>,
      'Customer Stories': <div>Entrepreneurs launching websites in hours.</div>,
    },
  },
]

const Featured: React.FC = () => {
  return (
    <section className='w-full px-10 md:px-20 py-16 flex flex-col gap-y-10'>
      <div className='text-center max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-900'>
          Featured Digital Products & Innovative Tools
        </h1>
        <p className='text-lg text-gray-600 mt-3'>
          Discover cutting-edge **AI-powered solutions, eCommerce SEO tools, and
          digital marketing automation**—handpicked to help you **grow your
          business and maximize online revenue**.
        </p>
      </div>

      <FeaturedGrid products={products} />
    </section>
  )
}

export default Featured
