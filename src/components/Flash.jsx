
import { useState } from "react";
import PropTypes from "prop-types";

export const Flash = () => {
    const questions = ["What do you think about flashcards?",
        "How do education flashcards work?",
        "Can education flashcards be used for test preparation?"];

    const answer = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum enim, iusto delectus rerum labore voluptatum vel rem dicta unde obcaecati optio excepturi cupiditate quod repellat quo similique omnis assumenda! Ex."

    const gradientText = {
        backgroundImage: 'linear-gradient(to bottom, #060286, #164ec0)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        // fontWeight: 600,
    };

    return (
        <div className="w-1/2 ml-20 relative my-4 mb-20">
            <p style={gradientText} className="text-3xl my-8 font-bold">FAQ</p>

            {questions.map((question, index) => (
                <FlashCard key={index} question={question} answer={answer} />
            ))}
        </div>
    )
}

const FlashCard = ({ question, answer }) => {

    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="bg-white border border-blue-500 rounded-xl p-4 mb-4 cursor-pointer font-inter relative">
            <div className="text-lg font-semibold pr-2">{question}</div>
            {showAnswer && <div className="mt-2">{answer}</div>}
            <div className="px-2 absolute top-4 right-4 text-blue-500" onClick={toggleAnswer}>
                <i className={`fas fa-chevron-down ${showAnswer ? "transform rotate-180" : ""}`}></i>
            </div>
        </div>
    )
}

FlashCard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};

export default FlashCard;