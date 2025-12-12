'use client'
import { HTMLMotionProps, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLMotionProps<'div'> {
    hover?: boolean
}

export default function Card({ className, hover = false, children, ...props }: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : undefined}
            transition={hover ? { duration: 0.2 } : undefined}
            className={cn(
                'bg-white rounded-xl border border-neutral-200 p-6',
                'shadow-sm transition-shadow',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}
