import React from 'react'

interface ProductAboutProps {
  question: string
  answer: string
}

const ProductAbout: React.FC<ProductAboutProps> = ({ question, answer }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-4'>
      <h3 className='text-xl font-normal text-black'>What is {question}?</h3>
      <p className='text-lg text-black'>{answer}</p>
    </div>
  )
}

export default ProductAbout
