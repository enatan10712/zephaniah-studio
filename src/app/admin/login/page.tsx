"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, LogIn } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple authentication (in production, use proper auth)
    if (formData.username === "admin" && formData.password === "zephaniah2024") {
      // Store admin session
      localStorage.setItem("isAdmin", "true")
      router.push("/admin")
    } else {
      alert("Invalid credentials. Please try again.")
    }

    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fadeInUp">
        {/* Header */}
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6 animate-float">
            <Image
              src="/images/logo.png"
              alt="Zephaniah Studio Logo"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="font-serif text-3xl text-amber-900 mb-2 animate-fadeInLeft">
            Admin Login
          </h2>
          <p className="text-amber-700 animate-fadeInRight">
            Zephaniah Studio Management Portal
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg hover-lift p-8 border border-amber-100 transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="animate-fadeInLeft animate-stagger-1">
              <label htmlFor="username" className="block text-sm font-medium text-amber-700 mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-black"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            <div className="animate-fadeInRight animate-stagger-2">
              <label htmlFor="password" className="block text-sm font-medium text-amber-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 pr-10 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-black"
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover-scale"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-amber-600" />
                  ) : (
                    <Eye className="w-5 h-5 text-amber-600" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="luxury"
              size="lg"
              disabled={isLoading}
              className="w-full hover-glow animate-fadeInUp animate-stagger-3"
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 animate-fadeInUp animate-stagger-4">
            <p className="text-sm text-amber-700 text-center">
               This is a restricted area. Authorized personnel only.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center animate-fadeInUp animate-stagger-5">
          <Link href="/" className="text-amber-600 hover:text-amber-700 transition-colors hover-lift">
             Back to Website
          </Link>
        </div>
      </div>
    </div>
  )
}
