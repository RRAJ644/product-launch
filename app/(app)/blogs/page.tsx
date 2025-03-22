'use client'

import { useState } from 'react'
import BlogCard, { BlogCardProps } from '@/components/custom/BlogCard'

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
const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(9)

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6)
  }

  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
        {blogs
          ?.slice(0, visibleBlogs)
          .map(({ thumbnail, title, description, tag }, index) => (
            <BlogCard
              key={title}
              thumbnail={thumbnail}
              title={title}
              tag={tag}
              description={description}
              index={index}
            />
          ))}
      </div>
      {visibleBlogs < blogs?.length && (
        <div className='flex justify-center mt-12'>
          <button
            onClick={loadMoreBlogs}
            className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}

export default Blogs
