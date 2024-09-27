'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Youtube, Linkedin, Instagram} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="Design Seven Logo" width={150} height={50} />
            </Link>
            <p className="text-sm">
              Established in 2022, Design Seven is a world-class Design & Architecturing Company.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Studio</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-gray-800">About Us</Link></li>
              <li><Link href="/operating-model" className="hover:text-gray-800">Operating Model</Link></li>
              <li><Link href="/team" className="hover:text-gray-800">Team</Link></li>
              <li><Link href="/designseven" className="hover:text-gray-800">Design Seven Centre</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/bim" className="hover:text-gray-800">BIM</Link></li>
              <li><Link href="/services/interior-design" className="hover:text-gray-800">Interior Design</Link></li>
              <li><Link href="/services/architecture" className="hover:text-gray-800">Architecture</Link></li>
              <li><Link href="/services/3d-visualization" className="hover:text-gray-800">3D Visualization</Link></li>
              <li><Link href="/services/engineering" className="hover:text-gray-800">Engineering</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><Link href="/contact-us" className="hover:text-gray-800">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-gray-800">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-gray-800">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © Design Seven Ltd. 2024
              <Link href="/privacy-policy" className="ml-4 hover:text-gray-800">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="ml-4 hover:text-gray-800">Terms & Condition</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
