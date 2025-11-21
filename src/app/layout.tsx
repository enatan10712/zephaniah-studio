import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { AdminAccess } from "@/components/AdminAccess"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zephaniah Studio - Luxury Furniture in Ethiopia",
  description: "Discover exquisite luxury furniture that transforms your space into a masterpiece of comfort and style. Handcrafted in Ethiopia with premium materials.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <AdminAccess />
      </body>
    </html>
  )
}
