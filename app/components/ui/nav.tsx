'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about' },
    { title: 'Our Services', link: '/ourservices' },
    { title: 'Contact Us', link: '/contact' },

  ]

  const backgroundImages = [
    { src: '/team/team-shan.png', title: 'About Us', url: '/about' },
    { src: '/structure-image.jpeg', title: 'Our Services', url: '/ourservices' },
    { src: '/contact-image.jpg', title: 'Contact Us', url: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
      <div className="flex justify-between h-20"> 
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Design Seven Logo"
              width={600} 
              height={300} 
              className="h-16 w-auto" 
            />
          </Link>
        </div>
        <div className="hidden sm:ml-10 sm:flex sm:items-center">
          <div className="flex space-x-6">
            <NavLink href="/" className="text-lg">Home</NavLink> 
            <NavLink href="/ourservices" className="text-lg">Our Services</NavLink> 
            <NavLink href="/about" className="text-lg">About Us</NavLink> 
            <NavLink href="/contact" className="text-lg">Contact</NavLink> 
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button onClick={toggleMenu} className="flex items-center bg-white text-black border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <Menu className="h-5 w-5 mr-2" aria-hidden="true" />
            <span className="font-medium text-lg">Menu</span> 
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
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
    <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-lg">
      <div className="p-6">
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-8">Quick Menu</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMenu} // Close menu on click
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 p-4">
        {backgroundImages.map((image, index) => (
          <Link
            key={index}
            href={image.url}
            className="relative block"
            onClick={toggleMenu} // Close menu on click
          >
            <Image
              src={image.src}
              alt={image.title}
              width={300}
              height={100}
              className="w-full h-24 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs rounded-b-lg">
              {image.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}



  </nav>
  
  );
}

function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`text-gray-600 hover:text-gray-900 px-4 py-3 rounded-md text-lg font-lg ${className}`} // Apply className here
    >
      <span className="font-montserrat text-[22px] font-normal capitalize">
        {children}
      </span>
    </Link>
  );
}

