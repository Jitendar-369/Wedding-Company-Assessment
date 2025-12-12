'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center font-medium transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50 cursor-pointer',

                    // Variants
                    {
                        'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600':
                            variant === 'primary',
                        'bg-secondary-100 text-secondary-900 hover:bg-secondary-200':
                            variant === 'secondary',
                        'border-2 border-neutral-300 hover:border-neutral-400 bg-white text-neutral-900':
                            variant === 'outline',
                        'hover:bg-neutral-100 text-neutral-900':
                            variant === 'ghost',
                        'bg-red-600 text-white hover:bg-red-700':
                            variant === 'danger',
                    },

                    // Sizes
                    {
                        'h-9 px-3 text-sm rounded-md': size === 'sm',
                        'h-11 px-5 text-base rounded-lg': size === 'md',
                        'h-14 px-8 text-lg rounded-xl': size === 'lg',
                    },

                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                )}
                {children}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'
export default Button
