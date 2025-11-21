"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ProductCard } from "@/components/ProductCard"

// Mock data with your actual furniture images and Ethiopian Birr pricing
const featuredProducts = [
  {
    id: "1",
    name: "Luxury Sofa Collection",
    description: "Handcrafted Italian leather sofa with premium comfort and elegant design",
    price: 175000, // 3,500 USD * 50 ETB
    category: "Living Room",
    material: "Italian Leather",
    color: "Charcoal",
    dimensions: "W 240cm x D 95cm x H 85cm",
    stock: 5,
    images: ["/images/products/product-1.jpg"],
    featured: true,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2", 
    name: "Executive Dining Table",
    description: "Solid oak dining table that seats 8 people with timeless elegance",
    price: 140000, // 2,800 USD * 50 ETB
    category: "Dining Room",
    material: "Solid Oak",
    color: "Natural Oak",
    dimensions: "W 200cm x D 100cm x H 76cm",
    stock: 3,
    images: ["/images/products/product-2.jpg"],
    featured: true,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    name: "Master Bedroom Suite",
    description: "Complete bedroom set with king-size bed, nightstands, and dresser",
    price: 225000, // 4,500 USD * 50 ETB
    category: "Bedroom",
    material: "Mahogany Wood",
    color: "Dark Brown",
    dimensions: "Various",
    stock: 2,
    images: ["/images/products/product-3.jpg"],
    featured: true,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10 z-10 animate-parallax" />
        <Image
          src="/images/products/product-1.jpg"
          alt="Luxury Furniture Showroom"
          fill
          className="object-cover parallax-bg"
          priority
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo in Hero */}
          <div className="relative w-32 h-32 mx-auto mb-8 animate-float sparkle">
            <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-xl animate-glow"></div>
            <Image
              src="/images/logo.png"
              alt="Zephaniah Studio Logo"
              fill
              className="object-contain animate-rotateIn"
            />
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl mb-8 text-shadow animate-luxuryReveal text-gold-shimmer">
            Zephaniah Studio
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-amber-300 font-medium max-w-2xl mx-auto animate-fadeInLeft animate-stagger-1">
            Luxurious crafts, Artistry and woodwork
          </p>
          <p className="text-xl md:text-2xl mb-10 text-charcoal-100 max-w-3xl mx-auto animate-fadeInRight animate-stagger-2">
            Discover exquisite luxury furniture that transforms your space into a masterpiece of comfort and style
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounceIn animate-stagger-3">
            <Button size="xl" variant="luxury" className="btn-luxury hover-glow sparkle">
              <Link href="/shop" className="flex items-center">
                Explore Collection
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal-900 hover-lift hover-glow border-luxury">
              <Link href="/showroom" className="flex items-center">
                Book Showroom Visit
                <Calendar className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-amber-900 mb-6 animate-luxuryReveal text-luxury-gradient">
              Featured Collections
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto animate-fadeInLeft animate-stagger-1">
              Curated pieces that embody the perfect blend of comfort, style, and Ethiopian craftsmanship
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mt-6 animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`animate-luxuryReveal animate-stagger-${index + 1}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fadeInUp animate-stagger-4">
            <Button size="lg" variant="outline" className="hover-lift hover-glow border-luxury btn-enhanced">
              <Link href="/shop" className="flex items-center text-lg">
                View All Products
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-amber-300">
            Visit Our Showroom
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Experience our luxury furniture firsthand. Book a personalized consultation with our design experts in Bole, Addis Ababa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="luxury">
              <Link href="/showroom" className="flex items-center">
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Visit
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
              <Link href="tel:+251937888585" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                +251 937 888 585
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-amber-900 mb-3">Premium Quality</h3>
              <p className="text-amber-700">
                Handcrafted using the finest materials and traditional Ethiopian woodworking techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-amber-900 mb-3">Custom Design</h3>
              <p className="text-amber-700">
                Personalized furniture solutions tailored to your unique space and Ethiopian aesthetic preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-amber-900 mb-3">Expert Service</h3>
              <p className="text-amber-700">
                Professional consultation, delivery, and installation services throughout Addis Ababa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
