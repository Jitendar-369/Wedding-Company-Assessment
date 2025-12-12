
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnswerOptionProps {
    text: string;
    selected: boolean;
    isCorrect?: boolean;
    isWrong?: boolean;
    onClick: () => void;
}

export default function AnswerOption({ text, selected, isCorrect, isWrong, onClick }: AnswerOptionProps) {
    let baseStyle = "bg-[#dceefb]/30 border-transparent text-[#1e3a5f] hover:bg-[#dceefb] hover:border-[#bae6fd]";

    if (isCorrect) {
        baseStyle = "bg-green-100 border-green-500 text-green-800 shadow-sm";
    } else if (isWrong) {
        baseStyle = "bg-red-100 border-red-500 text-red-800 shadow-sm";
    } else if (selected) {
        baseStyle = "bg-white border-[#1e3a5f] shadow-md text-[#1e3a5f]";
    }

    return (
        <motion.button
            whileHover={!isCorrect && !isWrong ? { scale: 1.01 } : {}}
            whileTap={!isCorrect && !isWrong ? { scale: 0.99 } : {}}
            onClick={onClick}
            disabled={!!isCorrect || !!isWrong}
            className={cn(
                "w-full p-4 mb-3 rounded-xl text-center font-medium transition-all duration-200 border-2",
                baseStyle
            )}
        >
            {text}
        </motion.button>
    );
}
