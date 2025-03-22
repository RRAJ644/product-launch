import { howItWorks } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const HowItWorks = () => {
  return (
    <section className='container mx-auto py-16 text-center'>
      <h2 className='text-3xl font-bold mb-8'>How It Works</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {howItWorks.map((step, index) => (
          <Card key={index} className='p-6'>
            <CardHeader className='flex items-center justify-center'>
              <step.icon className='w-12 h-12 text-primary' />
            </CardHeader>
            <CardContent>
              <CardTitle>{step.title}</CardTitle>
              <p className='text-muted-foreground mt-2'>{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
