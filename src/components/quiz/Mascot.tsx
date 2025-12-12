import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MascotProps {
    message?: string;
}

export default function Mascot({ message = "Best of Luck!" }: MascotProps) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed bottom-0 left-8 md:left-16 z-10 hidden md:block"
        >
            {/* Speech Bubble */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={message}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute -top-16 -right-12 bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow-md border border-gray-100"
                >
                    <p className="font-handwriting text-[#1e3a5f] font-bold text-sm whitespace-nowrap transform -rotate-6" style={{ fontFamily: 'cursive' }}>
                        {message}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Paw Image */}
            <div className="w-32 md:w-40">
                <Image
                    src="/assets/cat-paw.png"
                    alt="Mascot Paw"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                />
            </div>

        </motion.div>
    );
}

