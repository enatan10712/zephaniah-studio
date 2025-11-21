# Media Management Guide for Zephaniah Studio

## Overview

This guide explains how to organize and use your images and videos throughout the Zephaniah Studio website.

## Directory Structure

```
public/
 images/
    logo.png                    # Your brand logo
    products/                   # Product photography
    showroom/                   # Showroom interior shots
    gallery/                    # Portfolio and completed projects
    [various poster images]     # Video thumbnails
 videos/
     products/                   # Individual product videos
     showroom/                   # Showroom tours
     craftsmanship/              # Behind-the-scenes content
     testimonials/               # Customer testimonials
```

## Image Guidelines

### Product Images (`/images/products/`)
**Naming Convention:**
- `product-[id]-[index].jpg`
- Examples: `product-1-1.jpg`, `product-1-2.jpg`, `product-2-1.jpg`

**Specifications:**
- Size: 1200x1200px (square for product cards)
- Format: JPG (high quality, compressed)
- Background: White or neutral for consistency
- Multiple angles: Front, side, back, detail shots

### Showroom Images (`/images/showroom/`)
**Naming Convention:**
- `showroom-[area]-[index].jpg`
- Examples: `showroom-entrance-1.jpg`, `showroom-living-1.jpg`

**Specifications:**
- Size: 1920x1080px (16:9 ratio)
- Format: JPG (high quality)
- Style: Professional interior photography
- Lighting: Bright, natural lighting preferred

### Gallery Images (`/images/gallery/`)
**Naming Convention:**
- `gallery-[project]-[index].jpg`
- Examples: `gallery-modern-living-1.jpg`, `gallery-office-installation.jpg`

**Specifications:**
- Size: 1200x800px (3:2 ratio)
- Format: JPG (high quality)
- Content: Completed projects, installations, details

## Video Guidelines

### Product Videos (`/videos/products/`)
**Naming Convention:**
- `product-[id].mp4`
- Examples: `product-1.mp4`, `product-2.mp4`

**Specifications:**
- Duration: 15-30 seconds
- Resolution: 1080p (1920x1080)
- Format: MP4 (H.264)
- Content: 360 views, close-ups, functionality demos

### Showroom Videos (`/videos/showroom/`)
**Naming Convention:**
- `showroom-[type].mp4`
- Examples: `showroom-tour.mp4`, `showroom-hero.mp4`

**Specifications:**
- Duration: 2-3 minutes (tours), 30-60 seconds (hero)
- Resolution: 1080p (1920x1080)
- Format: MP4 (H.264)
- Style: Smooth camera movements, professional lighting

### Craftsmanship Videos (`/videos/craftsmanship/`)
**Naming Convention:**
- `craftsmanship-[process].mp4`
- Examples: `craftsmanship-woodworking.mp4`, `craftsmanship-upholstery.mp4`

**Specifications:**
- Duration: 30-60 seconds
- Resolution: 1080p (1920x1080)
- Format: MP4 (H.264)
- Content: Process demonstrations, techniques, details

## Implementation in Website

### Hero Section Video Background
```typescript
// Location: src/app/page.tsx
<VideoPlayer
  src="/videos/showroom/hero-background.mp4"
  poster="/images/showroom/hero-poster.jpg"
  autoPlay={true}
  muted={true}
  loop={true}
  controls={false}
/>
```

### Product Galleries
```typescript
// Location: src/components/ProductCard.tsx
const productImages = [
  "/images/products/product-1-1.jpg",
  "/images/products/product-1-2.jpg",
  "/images/products/product-1-3.jpg"
]
```

### Gallery Section
```typescript
// Location: src/app/page.tsx
const galleryItems = [
  {
    id: "1",
    type: "image",
    src: "/images/gallery/project-1.jpg",
    title: "Modern Living Room"
  },
  {
    id: "2", 
    type: "video",
    src: "/videos/craftsmanship/woodworking.mp4",
    poster: "/images/craftsmanship-poster.jpg"
  }
]
```

## Upload Process

### Step 1: Organize Your Files
1. Create folders according to the structure above
2. Name files following the conventions
3. Optimize images and videos for web

### Step 2: Upload to Directories
1. Place logo in `/public/images/logo.png`
2. Add product images to `/public/images/products/`
3. Upload videos to appropriate `/public/videos/` folders
4. Create poster images for videos

### Step 3: Update References
1. Update mock data in components with your actual file paths
2. Test all media loads correctly
3. Optimize loading performance

## Performance Optimization

### Image Optimization
1. **Compress images** without losing quality
2. **Use WebP format** for better compression
3. **Implement lazy loading** for gallery images
4. **Create thumbnails** for gallery previews

### Video Optimization
1. **Compress videos** to target <50MB for product videos
2. **Use poster images** for initial load
3. **Implement streaming** for large video files
4. **Provide multiple quality options**

### CDN Considerations
For production, consider using:
- **Cloudinary** for image optimization and delivery
- **Vimeo/YouTube** for video hosting
- **AWS S3 + CloudFront** for custom media delivery

## Content Ideas

### Product Photography Ideas
- Lifestyle shots in room settings
- Detail shots of craftsmanship
- Material close-ups
- 360 product views
- Scale/comparison shots

### Video Content Ideas
- **Product showcases**: 360 views, functionality demos
- **Craftsmanship**: Woodworking processes, techniques
- **Showroom tours**: Virtual walkthroughs
- **Testimonials**: Customer experiences
- **Behind-the-scenes**: Design process, team introductions

### Gallery Content Ideas
- **Completed projects**: Before/after transformations
- **Installations**: Professional setup processes
- **Material showcases**: Wood grains, leather textures
- **Design inspiration**: Room styling ideas

## Best Practices

### File Management
1. **Keep original files** in a separate backup folder
2. **Maintain consistent naming** conventions
3. **Document file locations** in a spreadsheet
4. **Version control** for important assets

### Quality Standards
1. **High resolution** for all media
2. **Consistent styling** and lighting
3. **Professional presentation** aligning with luxury brand
4. **Mobile optimization** for all media

### SEO Considerations
1. **Descriptive file names** with keywords
2. **Alt text** for all images
3. **Video transcripts** for accessibility
4. **Structured data** for rich snippets

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and permissions
2. **Videos not playing**: Verify format and compression
3. **Slow loading**: Optimize file sizes and implement lazy loading
4. **Mobile issues**: Test responsive behavior

### Solutions
1. Use browser developer tools to inspect network requests
2. Verify file extensions and MIME types
3. Check console for JavaScript errors
4. Test on different devices and browsers

---

This guide ensures your media assets are properly organized and optimized for the best user experience on the Zephaniah Studio website.
