"use client"

import { useState, useMemo } from "react"
import { Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ProductCard } from "@/components/ProductCard"

// Mock data with your actual furniture images and Ethiopian Birr pricing
const products = [
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
  {
    id: "4",
    name: "Modern Office Chair",
    description: "Ergonomic executive chair with lumbar support and premium upholstery",
    price: 60000, // 1,200 USD * 50 ETB
    category: "Office",
    material: "Premium Fabric",
    color: "Black",
    dimensions: "W 65cm x D 60cm x H 120cm",
    stock: 8,
    images: ["/images/products/product-4.jpg"],
    featured: false,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "5",
    name: "Coffee Table Set",
    description: "Modern nesting coffee tables with glass tops and chrome accents",
    price: 47500, // 950 USD * 50 ETB
    category: "Living Room",
    material: "Glass & Chrome",
    color: "Silver",
    dimensions: "W 100cm x D 50cm x H 45cm",
    stock: 6,
    images: ["/images/products/product-5.jpg"],
    featured: false,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "6",
    name: "Wardrobe Collection",
    description: "Spacious wooden wardrobe with hanging space and drawers",
    price: 110000, // 2,200 USD * 50 ETB
    category: "Bedroom",
    material: "Solid Wood",
    color: "Walnut",
    dimensions: "W 200cm x D 60cm x H 220cm",
    stock: 4,
    images: ["/images/products/product-6.jpg"],
    featured: false,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
]

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filters, setFilters] = useState({
    category: "",
    material: "",
    color: "",
    priceRange: [0, 250000],
  })
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.category && product.category !== filters.category) return false
      if (filters.material && product.material !== filters.material) return false
      if (filters.color && product.color !== filters.color) return false
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false
      return true
    })
  }, [filters])

  const categories = Array.from(new Set(products.map((p) => p.category)))
  const materials = Array.from(new Set(products.map((p) => p.material)))
  const colors = Array.from(new Set(products.map((p) => p.color)))

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-serif text-4xl text-amber-900 mb-2">Shop</h1>
            <p className="text-amber-700">
              Discover our collection of luxury furniture pieces crafted in Ethiopia
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
            
            <div className="flex items-center space-x-2 border border-amber-200 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-amber-600 text-white" : "text-amber-700 hover:bg-amber-100"}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-amber-600 text-white" : "text-amber-700 hover:bg-amber-100"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-2">
                  Material
                </label>
                <select
                  value={filters.material}
                  onChange={(e) => setFilters({ ...filters, material: e.target.value })}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">All Materials</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-2">
                  Color
                </label>
                <select
                  value={filters.color}
                  onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">All Colors</option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-2">
                  Price Range: ETB {filters.priceRange[0].toLocaleString()} - ETB {filters.priceRange[1].toLocaleString()}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="250000"
                    step="5000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button
                variant="outline"
                onClick={() => setFilters({ category: "", material: "", color: "", priceRange: [0, 250000] })}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-amber-700">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-700 text-lg mb-4">No products found matching your filters.</p>
            <Button
              variant="outline"
              onClick={() => setFilters({ category: "", material: "", color: "", priceRange: [0, 250000] })}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
