"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Search, ShoppingBag } from "lucide-react"
import { Button } from "./ui/Button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100/50 transition-all duration-500 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale sparkle">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-lg animate-glow"></div>
              <Image
                src="/images/logo.png"
                alt="Zephaniah Studio Logo"
                fill
                className="object-contain transition-all duration-500 hover:rotate-12"
              />
            </div>
            <span className="font-serif text-xl text-amber-900 font-bold text-luxury-gradient">Zephaniah Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 hover-lift font-medium hover:text-luxury-gradient"
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 hover-lift font-medium hover:text-luxury-gradient"
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 hover-lift font-medium hover:text-luxury-gradient"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 hover-lift font-medium hover:text-luxury-gradient"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hover-scale hover-glow hidden md:flex btn-enhanced">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="hover-scale hover-glow hidden md:flex btn-enhanced">
              <ShoppingBag className="w-4 h-4" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden hover-scale hover-glow btn-enhanced"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 hover-lift rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 hover-lift rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 hover-lift rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 hover-lift rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
