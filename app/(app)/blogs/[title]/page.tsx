import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { slugify } from '@/lib/constants'
import { BlogCardProps } from '@/components/custom/BlogCard'

interface BlogPostProps {
  params: Promise<{ title: string }>
}

export const blogs: BlogCardProps[] = [
  {
    thumbnail: 'https://via.placeholder.com/300',
    title: 'Understanding TypeScript',
    description: 'A guide to learning TypeScript step by step.',
    tag: 'Tech',
    index: 1,
  },
  {
    thumbnail: 'https://via.placeholder.com/300',
    title: 'React Hooks Explained',
    description: 'Learn how to use React hooks efficiently.',
    tag: 'React',
    index: 2,
  },
]

export default async function BlogPost({ params }: BlogPostProps) {
  const { title } = await params

  const blog = blogs?.find((b) => slugify(b.title) === title)

  console.log(blog, '===blog')

  if (!blog) return notFound()

  return (
    <section className='flex flex-col items-center mt-8'>
      <div className='w-11/12 md:w-1/2 text-center py-4'>
        <h1 className='text-2xl xl:text-5xl font-roboto'>{blog.title}</h1>
      </div>
      <div className='w-11/12 md:w-1/2 flex justify-center'>
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={800}
          height={600}
          className='max-w-full h-auto rounded-lg'
        />
      </div>
      <div className='w-11/12 md:w-full mt-4'>
        <p
          className='max-w-7xl mx-auto px-4 text-lg'
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></p>
      </div>
    </section>
  )
}
