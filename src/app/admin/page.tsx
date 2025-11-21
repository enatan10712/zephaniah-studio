"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Plus, Edit, Trash2, Search, Package, Users, TrendingUp, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/Button"

// Mock product data with your actual furniture images
const mockProducts = [
  {
    id: "1",
    name: "Luxury Sofa Collection",
    description: "Handcrafted Italian leather sofa with premium comfort and elegant design",
    price: 175000,
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
    price: 140000,
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
    price: 225000,
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
    price: 60000,
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
    price: 47500,
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
    price: 110000,
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

export default function AdminPage() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (!isAdmin) {
      router.push("/admin/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    router.push("/")
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== productId))
    }
  }

  const handleEdit = (product: any) => {
    setEditingProduct(product)
    setShowAddForm(true)
  }

  const stats = {
    totalProducts: products.length,
    totalValue: products.reduce((sum, p) => sum + (p.price * p.stock), 0),
    lowStock: products.filter(p => p.stock < 3).length,
    featuredProducts: products.filter(p => p.featured).length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="Zephaniah Studio Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-serif text-xl text-amber-900">Zephaniah Studio</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Admin</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Link href="/">View Site</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <h1 className="text-2xl font-bold text-amber-900 mb-2">
            Welcome to Admin Dashboard
          </h1>
          <p className="text-amber-700">
            Manage your Zephaniah Studio furniture inventory and monitor business performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Products</p>
                <p className="text-2xl font-bold text-amber-900">{stats.totalProducts}</p>
              </div>
              <Package className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Value</p>
                <p className="text-2xl font-bold text-amber-900">ETB {stats.totalValue.toLocaleString()}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Low Stock</p>
                <p className="text-2xl font-bold text-red-600">{stats.lowStock}</p>
              </div>
              <Settings className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Featured</p>
                <p className="text-2xl font-bold text-amber-900">{stats.featuredProducts}</p>
              </div>
              <Users className="w-8 h-8 text-amber-600" />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div>
                <h2 className="text-xl font-bold text-amber-900 mb-2">Products</h2>
                <p className="text-gray-600">Manage your furniture inventory</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <Button
                  variant="luxury"
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Product</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 mr-4">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {product.material}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ETB {product.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.stock > 3 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.featured ? (
                        <span className="text-amber-600"> Featured</span>
                      ) : (
                        <span className="text-gray-400"></span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-amber-600 hover:text-amber-900"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No products found</p>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
            <h3 className="text-xl font-bold text-amber-900 mb-6">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    defaultValue={editingProduct?.name || ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter product name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>Living Room</option>
                    <option>Dining Room</option>
                    <option>Bedroom</option>
                    <option>Office</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={3}
                  defaultValue={editingProduct?.description || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter product description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (ETB)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingProduct?.price || ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock
                  </label>
                  <input
                    type="number"
                    defaultValue={editingProduct?.stock || ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material
                  </label>
                  <input
                    type="text"
                    defaultValue={editingProduct?.material || ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Material type"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensions
                </label>
                <input
                  type="text"
                  defaultValue={editingProduct?.dimensions || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="W x D x H"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drop images here or click to upload</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  defaultChecked={editingProduct?.featured || false}
                  className="mr-2"
                />
                <label htmlFor="featured" className="text-sm text-gray-700">
                  Feature this product on homepage
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  setShowAddForm(false)
                  setEditingProduct(null)
                }}
              >
                Cancel
              </Button>
              <Button variant="luxury">
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
