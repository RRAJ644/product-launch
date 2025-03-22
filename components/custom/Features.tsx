import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { features } from '@/lib/constants'

const Features = () => {
  return (
    <section className='container mx-auto text-center py-20 px-6'>
      <h2 className='text-3xl md:text-5xl font-bold'>Why Choose Us?</h2>
      <p className='text-lg text-gray-600 max-w-2xl mx-auto mt-4'>
        Everything you need to launch and market your product successfully.
      </p>
      <div className='mt-10 grid md:grid-cols-3 gap-8'>
        {features?.map((feature, index) => (
          <Card key={index} className='shadow-lg border border-gray-200'>
            <CardHeader className='flex flex-col items-center space-y-2'>
              <feature.icon className='w-12 h-12 text-blue-600' />
              <CardTitle className='text-xl'>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-500'>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
