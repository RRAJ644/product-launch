'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { slugify } from '@/lib/constants'

interface Product {
  id: number
  title: string
  description: string
  image: string
}

interface LaunchSliderProps {
  title: string
  products: Product[]
}

const LaunchSlider: React.FC<LaunchSliderProps> = ({ title, products }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 350
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 350
    }
  }

  return (
    <section className='py-16 relative'>
      <h2 className='text-3xl font-bold text-left mb-6'>{title}</h2>

      <div className='relative flex justify-center items-center'>
        <button
          onClick={scrollLeft}
          className='absolute left-0 md:-left-10 lg:-left-16 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-gray-800 hover:scale-105'
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={sliderRef}
          className='flex overflow-x-hidden space-x-10 scroll-smooth snap-x'
        >
          {products.map((product) => (
            <Link key={product.id} href={`/latest/${slugify(product.title)}`}>
              <div
                key={product.id}
                className='w-96 h-80 border-2  snap-start bg-white shadow-lg rounded-lg p-4'
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={280}
                  height={160}
                  className='rounded-lg'
                />
                <h3 className='text-xl font-semibold mt-4'>{product.title}</h3>
                <p className='text-gray-600'>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className='absolute right-0 md:-right-10 lg:-right-16 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-gray-800 hover:scale-105'
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default LaunchSlider
