'use client'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Rocket, Shield, Zap } from 'lucide-react'

const features = [
    {
        icon: <Rocket className="w-8 h-8 text-primary-600" />,
        title: 'High Performance',
        description: 'Optimized for speed with zero-runtime overhead and efficient bundles.'
    },
    {
        icon: <Shield className="w-8 h-8 text-primary-600" />,
        title: 'Secure by Default',
        description: 'Enterprise-grade security features built-in to protect your data.'
    },
    {
        icon: <Zap className="w-8 h-8 text-primary-600" />,
        title: 'Lightning Fast',
        description: 'Experience instant interactions with our optimized rendering engine.'
    }
]

export default function Features() {
    return (
        <section id="features" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-heading-xl font-bold text-neutral-900 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                        Everything you need to build production-ready applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card hover className="h-full">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-heading-md font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-body-md text-neutral-600">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
