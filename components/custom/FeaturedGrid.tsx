import { Product } from '@/app/(app)/latest/page'
import { slugify } from '@/lib/constants'
import Link from 'next/link'

interface FeaturedGridProps {
  products: Product[]
}

const FeaturedGrid: React.FC<FeaturedGridProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products?.map((product) => (
        <Link key={product.id} href={`featured/${slugify(product.title)}`}>
          <div key={product.id} className='bg-white shadow-lg rounded-lg p-4'>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-lg font-semibold mt-2'>{product.title}</h3>
            <p className='text-gray-600 text-sm'>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FeaturedGrid
