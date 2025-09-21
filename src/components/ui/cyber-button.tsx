import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-mono font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground neon-border hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground border border-secondary hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)] transition-all duration-300",
        terminal: "bg-transparent text-terminal-green border border-terminal-green hover:bg-terminal-green hover:text-background neon-glow transition-all duration-300",
        ghost: "text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan hover:text-cyber-cyan hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)]",
        warning: "bg-terminal-amber text-background border border-terminal-amber hover:shadow-[0_0_20px_hsl(var(--terminal-amber)/0.5)]",
        danger: "bg-terminal-red text-foreground border border-terminal-red hover:shadow-[0_0_20px_hsl(var(--terminal-red)/0.5)]",
        cyber: "bg-gradient-cyber text-background border-0 hover:shadow-[0_0_25px_hsl(var(--neon-cyan)/0.7)] transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(cyberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </Comp>
    )
  }
)
CyberButton.displayName = "CyberButton"

export { CyberButton, cyberButtonVariants }