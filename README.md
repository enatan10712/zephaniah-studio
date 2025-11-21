# Zephaniah Studio - Luxury Furniture E-commerce

A premium e-commerce platform for handcrafted luxury furniture, showcasing Ethiopian craftsmanship with modern design sensibilities.

##  About Zephaniah Studio

Zephaniah Studio is a luxury furniture brand based in Addis Ababa, Ethiopia, specializing in handcrafted pieces that combine traditional woodworking techniques with contemporary design. Our collection features premium materials including Italian leather, solid oak, mahogany, and custom fabrics.

**Contact Information:**
-  **Location**: Bole, Addis Ababa, Ethiopia
-  **Phone**: +251 937 888 585
-  **Email**: thomasgkassa88@gmail.com
-  **Website**: [Live Site](https://your-domain.com)

##  Features

### Customer Experience
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Product Catalog**: Browse luxury furniture with detailed specifications
- **Advanced Filtering**: Filter by category, material, color, and price
- **Product Gallery**: High-quality images with zoom functionality
- **Wishlist & Cart**: Save favorites and manage shopping cart
- **Contact Forms**: Easy inquiry and consultation booking

### Admin Management
- **Secure Admin Panel**: Hidden access with authentication
- **Product Management**: Add, edit, delete products
- **Inventory Tracking**: Monitor stock levels and low-stock alerts
- **Business Analytics**: View total value and product metrics
- **Image Management**: Upload and organize product images
- **Featured Products**: Highlight items on homepage

### Technical Features
- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom amber theme
- **Ethiopian Birr Pricing**: Localized currency formatting (ETB)
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and lazy loading

##  Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### Styling & Design
- **Custom Color Scheme**: Amber/Charcoal theme matching furniture aesthetic
- **Responsive Design**: Mobile-first approach
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Components**: Reusable UI components with variants

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS compatibility

##  Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/zephaniah-studio.git
   cd zephaniah-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

##  Project Structure

```
zephaniah-studio/
 public/
    images/
       logo.png
       products/
           product-1.jpg
           product-2.jpg
           ...
    favicon.ico
 src/
    app/
       (pages)/
          page.tsx          # Homepage
          shop/
             page.tsx      # Shop page
          about/
             page.tsx      # About page
          contact/
             page.tsx      # Contact page
          admin/
              page.tsx      # Admin dashboard
              login/
                  page.tsx  # Admin login
       layout.tsx            # Root layout
       globals.css           # Global styles
    components/
       ui/
          Button.tsx        # UI components
       Header.tsx            # Site header
       Footer.tsx            # Site footer
       ProductCard.tsx       # Product display
       AdminAccess.tsx       # Admin access component
    lib/
       utils.ts              # Utility functions
    types/
        index.ts              # TypeScript types
 docs/
    media-guide.md            # Media management guide
 package.json
 tailwind.config.js
 next.config.js
 tsconfig.json
 README.md
```

##  Configuration

### Tailwind CSS Configuration
Custom color scheme optimized for luxury furniture aesthetic:
- **Amber**: Primary brand color (warm, premium)
- **Charcoal**: Secondary color (sophisticated)
- **Emerald**: Success/accent color

### Next.js Configuration
- **React Strict Mode**: Enabled for development
- **SWC Minification**: Optimized production builds
- **Image Optimization**: Automatic image optimization
- **Remote Patterns**: Configured for external images

##  Currency & Pricing

All prices are displayed in **Ethiopian Birr (ETB)** with proper formatting:
- Example: ETB 175,000 (instead of $3,500 USD)
- Conversion rate: 1 USD  50 ETB (adjustable)
- Proper thousand separators and currency symbols

##  Admin Access

The admin panel is hidden from public users for security.

### Access Methods
1. **Keyboard Shortcut**: Press `Ctrl + Shift + A`
2. **Direct URL**: Navigate to `/admin`
3. **Hidden Click Area**: Click the invisible area near cart button

### Login Credentials
- **Username**: `admin`
- **Password**: `zephaniah2024`

### Admin Features
- Product management (CRUD operations)
- Inventory tracking with low-stock alerts
- Business analytics and metrics
- Image upload and management
- Featured product selection

##  Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

##  Design System

### Colors
- **Primary**: Amber (amber-500, amber-600, amber-700)
- **Secondary**: Charcoal (charcoal-800, charcoal-900)
- **Accent**: Emerald (emerald-500, emerald-600)
- **Neutral**: Gray shades for text and backgrounds

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, readable)
- **Prices**: Special formatting for ETB currency

### Components
- **Buttons**: Multiple variants (default, luxury, outline)
- **Cards**: Product cards with hover effects
- **Forms**: Styled inputs with focus states
- **Navigation**: Responsive header with mobile menu

##  Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The project can be deployed on any platform supporting Next.js:
- Netlify
- AWS Amplify  
- DigitalOcean
- Railway

### Environment Variables for Production
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SUPABASE_URL=your_production_supabase_url
SUPABASE_ANON_KEY=your_production_supabase_key
```

##  Analytics & Monitoring

### Google Analytics
Add to `_app.tsx` or layout:
```typescript
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Google Analytics setup
  }, [])

  return <Component {...pageProps} />
}
```

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow existing component patterns
- Use Tailwind CSS classes (no custom CSS unless necessary)
- Maintain consistent naming conventions

### Component Structure
```typescript
"use client" // for client components

import { useState } from "react"
import { ComponentName } from "@/components/ui/ComponentName"

export function Component() {
  return (
    <div className="container mx-auto px-4">
      {/* Component content */}
    </div>
  )
}
```

##  Troubleshooting

### Common Issues

**Build Errors**
- Check TypeScript types in `types/` directory
- Ensure all imports are correct
- Verify Tailwind CSS classes

**Image Issues**
- Place images in `public/images/`
- Use correct paths (`/images/filename.jpg`)
- Check file extensions

**Admin Access**
- Clear browser localStorage if login issues persist
- Check browser console for errors
- Verify correct credentials

##  Support

For technical support or questions:
- **Email**: thomasgkassa88@gmail.com
- **Phone**: +251 937 888 585
- **Location**: Bole, Addis Ababa, Ethiopia

##  License

This project is proprietary software for Zephaniah Studio. All rights reserved.

##  Future Enhancements

### Planned Features
- [ ] Customer account system
- [ ] Online payment integration (Telebirr, CBE)
- [ ] Advanced product customization
- [ ] Virtual showroom (AR/VR)
- [ ] Multi-language support (Amharic, Oromo, Tigrinya)
- [ ] Inventory management system
- [ ] Order tracking system
- [ ] Customer reviews and ratings
- [ ] Newsletter subscription
- [ ] Social media integration

### Technical Improvements
- [ ] Database integration (Supabase)
- [ ] API for mobile app
- [ ] Progressive Web App (PWA)
- [ ] Advanced SEO optimization
- [ ] Performance monitoring
- [ ] Automated testing

---

**Zephaniah Studio**  2024 - Luxury Furniture Crafted in Ethiopia

*"Transforming spaces with timeless elegance and Ethiopian craftsmanship"*
