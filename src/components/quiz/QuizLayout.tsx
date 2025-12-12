
import React from "react";

interface QuizLayoutProps {
    children: React.ReactNode;
}

export default function QuizLayout({ children }: QuizLayoutProps) {
    return (
        <div className="relative w-full max-w-4xl min-h-[500px] bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col items-center">
            {/* Soft gradient border effect or inner shadow if needed to match design perfectly */}
            {children}
        </div>
    );
}
