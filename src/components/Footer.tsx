"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Zephaniah Studio Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl">Zephaniah Studio</span>
                <p className="text-xs text-amber-300">Luxurious crafts, Artistry and woodwork</p>
              </div>
            </div>
            <p className="text-amber-200 mb-4 max-w-md">
              Discover exquisite luxury furniture that transforms your space into a masterpiece of comfort and style, crafted right here in Ethiopia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/zephaniahstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-100 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@zephaniahstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.89.01 5.79-.02 8.68-.03 1.36-.26 2.73-.85 3.98-.53 1.16-1.34 2.2-2.41 2.91-1.27.84-2.84 1.3-4.38 1.29-1.54-.01-3.09-.49-4.34-1.38-1.16-.83-2.06-2.03-2.55-3.36-.52-1.41-.54-2.98-.14-4.42.37-1.31 1.13-2.51 2.18-3.41 1.27-1.08 2.93-1.71 4.62-1.81.89-.05 1.78.03 2.65.25-.01 1.37-.02 2.74-.03 4.11-.73-.24-1.55-.36-2.31-.22-1.06.16-2.03.77-2.59 1.68-.41.66-.58 1.46-.51 2.24.06.76.37 1.5.88 2.07.56.63 1.33 1.07 2.17 1.18.8.11 1.64-.01 2.36-.42.74-.42 1.31-1.13 1.58-1.93.21-.6.24-1.26.14-1.89-.04-.3-.11-.6-.2-.89-.01-3.44.02-6.89-.03-10.33z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/zephaniahstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-100 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-amber-200 hover:text-amber-100 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-amber-100 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-amber-100 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="text-amber-200 hover:text-amber-100 transition-colors">
                  Book Showroom
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-amber-200 hover:text-amber-100 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-amber-300">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a 
                  href="mailto:thomasgkassa88@gmail.com" 
                  className="text-amber-200 hover:text-amber-100 transition-colors"
                >
                  thomasgkassa88@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a 
                  href="tel:+251937888585" 
                  className="text-amber-200 hover:text-amber-100 transition-colors"
                >
                  +251 937 888 585
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-amber-200">Bole, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-300 text-sm">
             2024 Zephaniah Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-amber-300 hover:text-amber-100 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-amber-300 hover:text-amber-100 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
