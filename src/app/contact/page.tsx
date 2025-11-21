"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      alert("Thank you for your message! We will get back to you soon.")
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 to-charcoal-900/70 z-10" />
        <Image
          src="/api/placeholder/1920/600"
          alt="Contact Zephaniah Studio"
          fill
          className="object-cover"
        />
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-4 text-shadow">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gold-300 font-medium max-w-2xl mx-auto">
            Get in Touch With Our Team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Visit Our Showroom</h3>
              <p className="text-charcoal-600 mb-2">
                Bole, Addis Ababa, Ethiopia
              </p>
              <p className="text-charcoal-600">
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Call Us</h3>
              <p className="text-charcoal-600 mb-2">
                <a href="tel:+251937888585" className="hover:text-gold-600 transition-colors">
                  +251 937 888 585
                </a>
              </p>
              <p className="text-charcoal-600">
                Available for consultations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">Email Us</h3>
              <p className="text-charcoal-600 mb-2">
                <a href="mailto:thomasgkassa88@gmail.com" className="hover:text-gold-600 transition-colors">
                  thomasgkassa88@gmail.com
                </a>
              </p>
              <p className="text-charcoal-600">
                We respond within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal-900 mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="+251 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="showroom">Showroom Visit</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="luxury"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal-900 mb-8">
                Find Us
              </h2>
              
              {/* Map Placeholder */}
              <div className="relative h-96 rounded-lg overflow-hidden mb-8 bg-charcoal-100">
                <Image
                  src="/api/placeholder/800/600"
                  alt="Zephaniah Studio Location Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-2" />
                    <p className="text-charcoal-900 font-medium">Bole, Addis Ababa</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-charcoal-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-600" />
                  <h3 className="font-serif text-xl text-charcoal-900">Business Hours</h3>
                </div>
                
                <div className="space-y-2 text-charcoal-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <Button variant="outline" className="w-full">
                  <Link href="/showroom" className="flex items-center justify-center">
                    <ArrowRight className="mr-2 w-5 h-5" />
                    Book Showroom Visit
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Link href="tel:+251937888585" className="flex items-center justify-center">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
