'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-md'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-primary-600">
                        Logo
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-neutral-700 hover:text-primary-600 transition-colors">
                            Features
                        </a>
                        <a href="#pricing" className="text-neutral-700 hover:text-primary-600 transition-colors">
                            Pricing
                        </a>
                        <a href="#about" className="text-neutral-700 hover:text-primary-600 transition-colors">
                            About
                        </a>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <Button variant="ghost">Sign In</Button>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
