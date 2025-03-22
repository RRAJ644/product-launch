import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Brand Name. All rights reserved.
      </p>

      <nav className='flex gap-4'>
        <Link
          href='/privacy-policy'
          className='text-sm hover:text-neutral-400 transition'
        >
          Privacy Policy
        </Link>
        <Link
          href='/terms'
          className='text-sm hover:text-neutral-400 transition'
        >
          Terms of Service
        </Link>
        <Link
          href='/contact'
          className='text-sm hover:text-neutral-400 transition'
        >
          Contact
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
