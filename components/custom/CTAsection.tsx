import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className='container mx-auto flex justify-center py-20 px-6'>
      <Card className='w-full max-w-6xl text-center shadow-lg rounded-2xl p-8 bg-white'>
        <CardContent>
          <h2 className='text-xl md:text-4xl font-bold'>
            Ready to <span className='text-blue-600'>Launch & Advertise</span>
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Start marketing and gaining traction with ease. Join thousands of
            successful creators and brands today. With our powerful tools, you
            can streamline your product launch, maximize visibility, and build
            lasting relationships with your audience. Take the next step toward
            growth and success—let’s make your vision a reality!
          </p>
          <div className='mt-6 flex justify-center space-x-4'>
            <Link
              href='/launch'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition'
            >
              Launch
            </Link>
            <Link
              href='/launch'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition'
            >
              Advertise
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default CTASection
