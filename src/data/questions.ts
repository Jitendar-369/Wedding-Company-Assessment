
export interface Option {
    id: string;
    text: string;
}

export interface Question {
    id: number;
    text: string;
    options: Option[];
    correctOptionId?: string; // Optional for now, can be used for scoring
    mascotMessage: string; // Dynamic message for the mascot
}

export const questions: Question[] = [
    {
        id: 1,
        text: "What sound does a cat make?",
        options: [
            { id: "opt1", text: "Bhau-Bhau" },
            { id: "opt2", text: "Meow-Meow" },
            { id: "opt3", text: "Oink-Oink" },
            { id: "opt4", text: "Moo-Moo" },
        ],
        correctOptionId: "opt2",
        mascotMessage: "Thinking about cats? Me too!",
    },
    {
        id: 2,
        text: "What would you probably find in your fridge?",
        options: [
            { id: "opt1", text: "Shoes" },
            { id: "opt2", text: "Ice Cream" },
            { id: "opt3", text: "Books" },
            { id: "opt4", text: "Trees" },
        ],
        correctOptionId: "opt2",
        mascotMessage: "Brrr! Getting hungry?",
    },
    {
        id: 3,
        text: "Which is a color?",
        options: [
            { id: "opt1", text: "Circle" },
            { id: "opt2", text: "Blue" },
            { id: "opt3", text: "Square" },
            { id: "opt4", text: "Triangle" },
        ],
        correctOptionId: "opt2",
        mascotMessage: "Pick the brightest one!",
    },
    {
        id: 4,
        text: "What is 2 + 2?",
        options: [
            { id: "opt1", text: "3" },
            { id: "opt2", text: "4" },
            { id: "opt3", text: "5" },
            { id: "opt4", text: "22" },
        ],
        correctOptionId: "opt2",
        mascotMessage: "Math time! You got this!",
    },
    {
        id: 5,
        text: "Which animal is the King of the Jungle?",
        options: [
            { id: "opt1", text: "Lion" },
            { id: "opt2", text: "Elephant" },
            { id: "opt3", text: "Tiger" },
            { id: "opt4", text: "Giraffe" },
        ],
        correctOptionId: "opt1",
        mascotMessage: "Roar! Who rules them all?",
    },
];
