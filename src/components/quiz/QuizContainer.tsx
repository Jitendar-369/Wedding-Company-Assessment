"use client";


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

import QuizLayout from "./QuizLayout";
import ProgressBar from "./ProgressBar";
import AnswerOption from "./AnswerOption";
import Mascot from "./Mascot";
import { questions } from "@/data/questions";
import { cn } from "@/lib/utils";

export default function QuizContainer() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [isReviewing, setIsReviewing] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;

    const handleOptionSelect = (optionId: string) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correctOptionId) {
                score++;
            }
        });
        return score;
    };

    const calculatePercentage = () => {
        return Math.round((calculateScore() / totalQuestions) * 100);
    }

    // Trigger confetti on finish if score is good
    useEffect(() => {
        if (isFinished && !isReviewing) {
            const percentage = calculatePercentage();
            if (percentage >= 60) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    }, [isFinished, isReviewing]);

    const canProceed = !!answers[currentQuestion.id];

    if (isFinished) {
        const score = calculateScore();
        const percentage = calculatePercentage();

        if (isReviewing) {
            return (
                <QuizLayout>
                    <div className="w-full max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <h2 className="font-serif text-3xl text-[#1e3a5f] mb-6 text-center sticky top-0 bg-white z-10 py-2">Review Answers</h2>
                        <div className="space-y-8">
                            {questions.map((q, index) => (
                                <div key={q.id} className="border-b border-gray-100 pb-6 last:border-0">
                                    <p className="font-semibold text-[#1e3a5f] mb-4">{index + 1}. {q.text}</p>
                                    <div className="space-y-2">
                                        {q.options.map(opt => {
                                            const isSelected = answers[q.id] === opt.id;
                                            const isCorrect = opt.id === q.correctOptionId;
                                            const isWrong = isSelected && !isCorrect;

                                            return (
                                                <AnswerOption
                                                    key={opt.id}
                                                    text={opt.text}
                                                    selected={isSelected}
                                                    isCorrect={isCorrect}
                                                    isWrong={isWrong}
                                                    onClick={() => { }}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <button
                            onClick={() => setIsReviewing(false)}
                            className="px-6 py-3 bg-gray-100 text-[#1e3a5f] rounded-xl hover:bg-gray-200 transition-all font-medium"
                        >
                            Back to Score
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-[#1e3a5f] text-white rounded-xl shadow-lg hover:bg-[#162c46] transition-all font-medium"
                        >
                            Restart New Quiz
                        </button>
                    </div>
                    <Mascot message="Looking good!" />
                </QuizLayout>
            )
        }

        return (
            <QuizLayout>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-[#dceefb] rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <span className="text-3xl font-bold text-[#1e3a5f]">{percentage}%</span>
                    </div>
                    <h2 className="font-serif text-4xl text-[#1e3a5f] mb-4">Quiz Completed!</h2>
                    <p className="text-lg text-gray-600 mb-2">You scored:</p>
                    <p className="text-2xl font-bold text-[#0ea5e9] mb-8">{score} / {totalQuestions}</p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <button
                            onClick={() => setIsReviewing(true)}
                            className="px-6 py-3 bg-white border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-xl hover:bg-[#eff6ff] transition-all font-medium"
                        >
                            Review Answers
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-[#1e3a5f] text-white rounded-xl shadow-lg hover:bg-[#162c46] transition-all font-medium"
                        >
                            Restart Quiz
                        </button>
                    </div>
                </motion.div>
                <Mascot message={percentage > 80 ? "Purr-fect Score!" : "Good Try! Keep going!"} />
            </QuizLayout>
        )
    }

    return (
        <>
            <QuizLayout>
                <div className="w-full max-w-2xl flex flex-col items-center">

                    {/* Header */}
                    <h1 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mb-2 text-center text tracking-tight">
                        Test Your Knowledge
                    </h1>
                    <p className="text-gray-500 text-sm mb-8">Answer all questions to see your results</p>

                    {/* Progress */}
                    <ProgressBar currentStep={currentQuestionIndex} totalSteps={totalQuestions} />

                    {/* Question Content */}
                    <div className="w-full mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion.id}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Question Card Look-alike for logic grouping */}
                                <div className="bg-[#dceefb]/50 p-6 rounded-xl mb-6 text-center">
                                    <h2 className="text-lg md:text-xl font-semibold text-[#1e3a5f]">
                                        {currentQuestion.id}. {currentQuestion.text}
                                    </h2>
                                </div>

                                {/* Options */}
                                <div className="space-y-3">
                                    {currentQuestion.options.map((option) => (
                                        <AnswerOption
                                            key={option.id}
                                            text={option.text}
                                            selected={answers[currentQuestion.id] === option.id}
                                            onClick={() => handleOptionSelect(option.id)}
                                        />
                                    ))}
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="w-full flex justify-end gap-2 mt-4">
                        {currentQuestionIndex > 0 && (
                            <button
                                onClick={handlePrevious}
                                className="p-3 rounded-lg bg-[#eef7ff] text-[#1e3a5f] hover:bg-[#dceefb] transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </button>
                        )}

                        <button
                            onClick={handleNext}
                            disabled={!canProceed}
                            className={cn(
                                "p-3 rounded-lg transition-all duration-200 flex items-center gap-2",
                                canProceed
                                    ? "bg-[#1e3a5f] text-white hover:bg-[#162c46] shadow-md"
                                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                            )}
                        >
                            {currentQuestionIndex === totalQuestions - 1 ? "Finish" : <ArrowRight size={20} />}
                        </button>
                    </div>

                </div>
            </QuizLayout>

            <Mascot message={currentQuestion.mascotMessage} />
        </>
    );
}

