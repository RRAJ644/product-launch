'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { navLinks } from '@/lib/constants'

const Navbar = () => {
  return (
    <nav className='container mx-auto flex items-center justify-between py-4'>
      {/* Logo */}
      <Link href='/' className='text-xl font-bold'>
        MyWebsite
      </Link>

      {/* Desktop Links */}
      <div className='hidden md:flex space-x-6'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='hover:text-neutral-400 transition-colors'
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Mobile Drawer */}
      <div className='md:hidden'>
        <Drawer direction='right'>
          <DrawerTrigger asChild>
            <Button variant='ghost' size='icon'>
              <Menu className='w-6 h-6 text-neutral-900 dark:text-neutral-100' />
            </Button>
          </DrawerTrigger>

          <DrawerContent className='p-6'>
            <DrawerTitle className='sr-only'>Menu</DrawerTitle>
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-lg hover:text-neutral-500'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar
