import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'
import ProductAbout from './ProductAbout'
import { tabs } from '@/lib/constants'
import Overview from './Overview'

export interface Product {
  id: number
  title: string
  description: string
  image: string
  featured: boolean
  tagline: string
  website: string
  logo: string
  tabs: string[]
  content: Record<string, React.ReactNode>
}

interface ProductInnerProps {
  product: Product
}

const ProductInner: React.FC<ProductInnerProps> = ({ product }) => {
  const { title, tagline, description, website, logo, content } = product

  return (
    <div>
      <div className='max-w-5xl p-6 bg-white shadow-lg rounded-2xl border flex flex-col gap-4 mx-auto'>
        <div className='flex justify-center items-center gap-4'>
          <div className='w-12 h-12 flex items-center justify-center rounded-lg'>
            <img
              src={logo || null}
              alt={title}
              className='w-8 h-8 object-contain'
            />
          </div>
          <div>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-sm text-gray-500'>{tagline}</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-y-5 text-sm text-gray-600'>
          <div className='flex items-center gap-1 text-yellow-500'>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} size={16} fill='currentColor' />
              ))}
          </div>
          <span>· 10 reviews · 355 followers</span>

          <div className='flex gap-4'>
            <Link href={website} target='_blank' rel='noopener noreferrer'>
              <Button
                variant='outline'
                className='bg-blue-600 hover:bg-blue-600 hover:text-black text-white text-lg py-6 px-6'
              >
                Visit website
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <ProductAbout question={title} answer={description} />
      <Overview tabs={tabs} content={content} />
    </div>
  )
}

export default ProductInner
