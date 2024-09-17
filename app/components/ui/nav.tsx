"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* Replace the text with the logo */}
              <Image
                src="/logo.png" // Change to the path of your logo file
                alt="Design Seven Logo"
                width={400} // Set the appropriate width for your logo
                height={200} // Set the appropriate height for your logo
                className="h-8 w-auto" // Tailwind CSS classes for responsiveness
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/services">Our Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/products">Products</MobileNavLink>
            <MobileNavLink href="/pricing">Pricing</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
    >
      <span className="font-montserrat text-[17px] font-normal capitalize">
        {children}
      </span>
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-lg font-medium"
    >
      <span className="font-montserrat text-[17px] font-normal capitalize">
        {children}
      </span>
    </Link>
  )
}