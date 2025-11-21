import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string, height: string } }
) {
  const { width, height } = params

  // Parse and validate dimensions
  const w = parseInt(width) || 400
  const h = parseInt(height) || 400
  
  // Limit maximum dimensions for performance
  const maxWidth = 1920
  const maxHeight = 1080
  const finalWidth = Math.min(Math.max(w, 50), maxWidth)
  const finalHeight = Math.min(Math.max(h, 50), maxHeight)

  // Generate SVG string (no external libraries needed!)
  const svg = `
    <svg width="${finalWidth}" height="${finalHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f3f3"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
            font-family="Arial, sans-serif" font-size="${Math.min(finalWidth, finalHeight) / 10}" fill="#666">
        ${finalWidth}  ${finalHeight}
      </text>
    </svg>
  `.trim()

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400", // Cache for 1 day
    },
  })
}