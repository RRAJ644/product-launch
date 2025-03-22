'use client'

import { testimonials, Testimonial } from '@/lib/constants'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className='overflow-hidden py-16'>
      <h2 className='text-3xl font-bold text-center mb-8'>What People Say</h2>
      <div className='relative w-full'>
        <motion.div
          className='flex gap-6 whitespace-nowrap'
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {testimonials?.map((testimonial: Testimonial, index: number) => (
            <Card key={index} className='shrink-0 max-w-2xl'>
              <CardHeader className='flex items-center gap-4'>
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.role}
                  </p>
                </div>
              </CardHeader>
              <CardContent className='text-wrap'>
                {testimonial.feedback}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
