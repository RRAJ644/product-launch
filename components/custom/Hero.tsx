import Link from 'next/link'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col items-center text-center py-20 px-6'>
      <h1 className='text-4xl md:text-6xl font-bold max-w-6xl'>
        Launch & Market Your Product{' '}
        <span className='text-blue-600'>Seamlessly</span>
      </h1>
      <p className='mt-4 text-lg text-gray-600 max-w-3xl'>
        Get your product in front of the right audience. Join thousands of
        creators launching and growing their businesses.
      </p>
      <div className='mt-6 flex space-x-4'>
        <Link
          href='/launch'
          className='px-6 py-3 bg-blue-600 text-white rounded-lg text-lg'
        >
          Launch
        </Link>
        <Link
          href='/advertise'
          className='px-6 py-3 border border-gray-400 rounded-lg text-lg'
        >
          Advertise
        </Link>
      </div>
    </section>
  )
}

export default Hero
