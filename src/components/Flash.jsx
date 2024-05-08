import { FlashCard } from "./FlashCard";

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
        <div className="w-1/2 ml-20 relative my-4">
            <p style={gradientText} className="text-3xl my-8 font-bold">FAQ</p>

            {questions.map((question, index) => (
                <FlashCard key={index} question={question} answer={answer} />
            ))}
        </div>
    )
}
