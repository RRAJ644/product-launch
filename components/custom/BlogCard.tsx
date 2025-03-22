import { slugify } from '@/lib/constants'
import Link from 'next/link'

export interface BlogCardProps {
  thumbnail: string
  title: string
  description: string
  tag: string
  index?: number
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnail,
  title,
  description,
  tag,
  index,
}) => {
  return (
    <Link href={`/blogs/${slugify(title)}`}>
      <div className='max-w-md overflow-hidden shadow-lg rounded-lg flex flex-col cursor-pointer'>
        <div className='relative w-full xl:h-[16rem] lg:h-[13rem] max-lg:h-[12rem] overflow-hidden object-cover object-center'>
          <img
            className='w-full h-full lg:bg-cover max-lg:bg-contain'
            src={thumbnail}
            alt='Blog Thumbnail'
            loading='eager'
          />
          <div className='absolute top-5 right-5 bg-blue-500 text-white text-sm px-4 py-1 rounded-xl'>
            {tag}
          </div>
        </div>
        <div className='p-6 flex-1 flex flex-col'>
          <h2 className='font-semibold text-sm md:text-xl mb-3'>{title}</h2>
          <div className='flex-grow'></div>
          <div className='mt-2'>
            <span className='text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer'>
              READ MORE »
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
