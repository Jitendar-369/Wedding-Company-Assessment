'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 -z-10" />

            <div className="max-w-6xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-display-lg font-bold text-neutral-900 mb-6"
                >
                    Build Faster with Pixel Precision
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-body-lg text-neutral-600 mb-8 max-w-2xl mx-auto"
                >
                    Create stunning, accessible, and performant web applications with our modern frontend architecture. Designed for developers who care about details.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex gap-4 justify-center"
                >
                    <Button size="lg">Get Started</Button>
                    <Button size="lg" variant="outline">Learn More</Button>
                </motion.div>
            </div>
        </section>
    )
}
