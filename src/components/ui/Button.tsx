import { ButtonHTMLAttributes, forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
  {
    variants: {
      variant: {
        default: "bg-amber-600 text-white hover:bg-amber-700",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-amber-600 text-amber-600 hover:bg-amber-50",
        secondary: "bg-amber-100 text-amber-900 hover:bg-amber-200",
        ghost: "hover:bg-amber-100 hover:text-amber-900",
        link: "underline-offset-4 hover:underline text-amber-600",
        luxury: "bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 shadow-lg",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-14 px-12 rounded-lg text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "btn-enhanced hover-lift transform transition-all duration-300"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
