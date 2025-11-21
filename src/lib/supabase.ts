import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
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
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          category: string
          material: string
          color: string
          dimensions: string
          stock: number
          images: string[]
          featured?: boolean
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          category?: string
          material?: string
          color?: string
          dimensions?: string
          stock?: number
          images?: string[]
          featured?: boolean
        }
      }
      orders: {
        Row: {
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
        Insert: {
          id?: string
          user_id: string
          total: number
          status?: "pending" | "processing" | "shipped" | "delivered"
          shipping_address: string
          delivery_date: string
          payment_method: "telebirr" | "cbe" | "card"
          payment_status?: "pending" | "completed" | "failed"
        }
        Update: {
          id?: string
          user_id?: string
          total?: number
          status?: "pending" | "processing" | "shipped" | "delivered"
          shipping_address?: string
          delivery_date?: string
          payment_method?: "telebirr" | "cbe" | "card"
          payment_status?: "pending" | "completed" | "failed"
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          quantity: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          quantity: number
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          quantity?: number
        }
      }
    }
  }
}
