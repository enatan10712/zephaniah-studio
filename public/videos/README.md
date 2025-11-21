# Videos Directory

## Video Types

### Product Showcase Videos
- `products/` - Individual product videos
  - 360 views, close-ups of craftsmanship
  - Naming: `product-[id].mp4`
  - Recommended: 15-30 seconds, 1080p

### Showroom Tour Videos
- `showroom/` - Virtual showroom walkthroughs
  - Room-by-room tours
  - Naming: `showroom-tour.mp4`
  - Recommended: 2-3 minutes, 1080p

### Craftsmanship Videos
- `craftsmanship/` - Behind-the-scenes content
  - Woodworking processes, techniques
  - Naming: `craft-[process].mp4`
  - Recommended: 30-60 seconds, 1080p

### Testimonial Videos
- `testimonials/` - Customer testimonials
  - Client experiences with your furniture
  - Naming: `testimonial-[client].mp4`
  - Recommended: 30-90 seconds, 1080p

## Video Specifications

### Recommended Formats
- **Primary**: MP4 (H.264)
- **Alternative**: WebM (VP9)
- **Fallback**: Poster images for each video

### Compression Guidelines
- Target file size: <50MB for product videos
- Bitrate: 5-10 Mbps for 1080p
- Frame rate: 24-30 fps
- Audio: AAC, 128 kbps (if applicable)

### Poster Images
- Create thumbnail images for each video
- Place in corresponding image directories
- Naming: `video-[name]-poster.jpg`

## Integration in Components

### Product Pages
- Embed product showcase videos
- Auto-play on hover (optional)
- Full-screen viewing capability

### Homepage Hero
- Background video with overlay
- Muted autoplay for performance
- Play/pause controls

### Gallery Sections
- Video grid with thumbnails
- Lightbox video player
- Social sharing capabilities

## Performance Optimization
1. Use video streaming services for large files
2. Implement lazy loading for videos
3. Provide multiple quality options
4. Use poster images for initial load
5. Consider using CDN for video delivery
