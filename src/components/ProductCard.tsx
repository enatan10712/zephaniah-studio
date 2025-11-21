"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "./ui/Button"
import { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    // TODO: Implement add to cart logic
    console.log("Adding to cart:", product.id)
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="group card-luxury rounded-xl overflow-hidden transition-all duration-500 animate-luxuryReveal w-full max-w-full">
      {/* Product Image */}
      <div className="relative overflow-hidden image-luxury-overlay">
        <div className="aspect-square bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-120 transition-transform duration-700"
          />
        </div>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
          <div className="flex space-x-2 sm:space-x-3 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button
              onClick={handleToggleWishlist}
              className={`p-2 sm:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover-scale ${
                isWishlisted 
                  ? "bg-red-500 text-white hover-glow" 
                  : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlisted ? "fill-current" : ""}`} />
            </button>
            <button className="p-2 sm:p-3 bg-white/90 text-gray-700 rounded-full backdrop-blur-md hover:bg-amber-600 hover:text-white transition-all duration-300 hover-scale hover-glow">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col space-y-1 sm:space-y-2">
          {product.featured && (
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-2 sm:px-3 py-1 rounded-full animate-shimmer sparkle">
              Featured
            </span>
          )}
          {product.stock < 3 && (
            <span className="bg-red-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full animate-pulse-slow hover-glow">
              Low Stock
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className="bg-white/95 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full border-luxury hover-scale">
            <p className="text-amber-600 font-bold text-xs sm:text-sm">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="mb-2 sm:mb-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider animate-fadeInLeft">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-serif text-lg sm:text-xl text-amber-900 mb-2 sm:mb-3 group-hover:text-amber-700 transition-all duration-300 hover-lift leading-tight">
          <Link href={`/products/${product.id}`} className="hover:text-luxury-gradient transition-all duration-300">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 animate-fadeInRight leading-relaxed">
          {product.description}
        </p>

        {/* Product Details */}
        <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs text-gray-500 animate-fadeInUp">
          <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
            <span className="font-medium">Material:</span>
            <span className="text-amber-700 font-bold text-xs">{product.material}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
            <span className="font-medium">Stock:</span>
            <span className={`font-bold text-xs ${product.stock < 3 ? "text-red-500 animate-pulse-slow" : "text-green-500"}`}>
              {product.stock} units
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between space-x-2 sm:space-x-3">
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="outline"
              className="hover-rotate hover-glow p-2 sm:p-3"
              onClick={handleToggleWishlist}
            >
              <Heart className={`w-4 h-4 sm:w-4 sm:h-4 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
            </Button>
            <Button 
              size="sm" 
              variant="luxury"
              className="btn-luxury hover-glow p-2 sm:p-3"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
          </div>
          <div className="text-right">
            <p className="text-xs text-amber-600 font-bold">ETB</p>
            <p className="text-sm sm:text-lg font-bold text-amber-900 text-gold-shimmer">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
