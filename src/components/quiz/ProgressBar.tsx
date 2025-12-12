
import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    return (
        <div className="flex gap-2 w-full max-w-lg mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => {
                const isActive = index <= currentStep;
                return (
                    <div
                        key={index}
                        className="relative h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden"
                    >
                        {isActive && (
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 left-0 h-full w-full bg-[#1e3a5f]"
                            />
                        )}

                    </div>
                );
            })}
        </div>
    );
}
