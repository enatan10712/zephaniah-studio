"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Hammer, Heart } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 to-charcoal-900/70 z-10" />
        <Image
          src="/api/placeholder/1920/600"
          alt="Zephaniah Studio Workshop"
          fill
          className="object-cover"
        />
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-4 text-shadow">
            About Zephaniah Studio
          </h1>
          <p className="text-xl md:text-2xl text-gold-300 font-medium max-w-2xl mx-auto">
            Our Story of Craftsmanship and Excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-charcoal max-w-none">
                <p className="text-lg text-charcoal-600 mb-4 leading-relaxed">
                  Founded with a vision to bring exceptional craftsmanship to Ethiopian homes, Zephaniah Studio has been at the forefront of luxury furniture design for over a decade. Our journey began with a simple belief: that furniture should be more than just functionalit should be art that tells a story.
                </p>
                <p className="text-lg text-charcoal-600 mb-4 leading-relaxed">
                  Today, we continue to honor traditional woodworking techniques while embracing contemporary design sensibilities. Each piece in our collection is a testament to our commitment to quality, beauty, and durability.
                </p>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  From our workshop in Bole, Addis Ababa, we create furniture that transforms spaces and enriches lives. Our team of skilled artisans combines time-honored techniques with innovative design to produce pieces that are both timeless and relevant.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/api/placeholder/800/600"
                alt="Zephaniah Studio Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Craftsmanship</h3>
              <p className="text-charcoal-600">
                Every piece is handcrafted with attention to detail and built to last for generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Quality</h3>
              <p className="text-charcoal-600">
                We use only the finest materials and never compromise on quality or durability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Customer Focus</h3>
              <p className="text-charcoal-600">
                Your satisfaction is our priority, from initial consultation to final delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Passion</h3>
              <p className="text-charcoal-600">
                We love what we do, and that passion is reflected in every piece we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              The talented artisans and designers behind Zephaniah Studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/api/placeholder/400/400"
                  alt="Thomas Kassa"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 mb-2">Thomas Kassa</h3>
              <p className="text-gold-600 font-medium mb-3">Founder & Master Craftsman</p>
              <p className="text-charcoal-600">
                With over 15 years of experience, Thomas brings unparalleled expertise and artistic vision to every creation.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/api/placeholder/400/400"
                  alt="Lead Designer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 mb-2">Sarah Johnson</h3>
              <p className="text-gold-600 font-medium mb-3">Lead Designer</p>
              <p className="text-charcoal-600">
                Sarah combines contemporary design trends with traditional aesthetics to create timeless pieces.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/api/placeholder/400/400"
                  alt="Workshop Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 mb-2">Michael Tekle</h3>
              <p className="text-gold-600 font-medium mb-3">Workshop Manager</p>
              <p className="text-charcoal-600">
                Michael ensures that every piece meets our exacting quality standards before leaving our workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-900 to-charcoal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gold-500">
            Visit Our Workshop
          </h2>
          <p className="text-xl mb-8 text-charcoal-100 max-w-2xl mx-auto">
            See firsthand how we create luxury furniture. Schedule a visit to our Bole workshop and experience our craftsmanship up close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="luxury">
              <Link href="/showroom" className="flex items-center">
                Book a Visit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal-900">
              <Link href="/contact" className="flex items-center">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
