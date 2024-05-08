import { useState } from "react";
import PropTypes from "prop-types";

export const FlashCard = ({ question, answer }) => {

    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="bg-white border border-blue-500 rounded-xl p-4 mb-4 cursor-pointer font-inter relative">
            <div className="text-lg font-semibold">{question}</div>
            {showAnswer && <div className="mt-2">{answer}</div>}
            <div className="absolute top-4 right-4 text-blue-500" onClick={toggleAnswer}>
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