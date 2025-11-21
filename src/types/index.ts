export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  material: string
  color: string
  dimensions: string
  stock: number
  images: string[]
  featured: boolean
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string
  user_id: string
  product_id: string
  quantity: number
  product?: Product
}

export interface Order {
  id: string
  user_id: string
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  shipping_address: string
  delivery_date: string
  payment_method: "telebirr" | "cbe" | "card"
  payment_status: "pending" | "completed" | "failed"
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  name?: string
  role: "user" | "admin"
}

export interface FilterOptions {
  category?: string
  material?: string
  color?: string
  priceRange?: [number, number]
  room?: string
}
