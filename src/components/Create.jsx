import logo from "../assets/logo.png";
import vector from "../assets/vector.png";

export const Create = () => {
    const gradientText = {
        backgroundImage: 'linear-gradient(to bottom, #060286, #164ec0)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 600,
    };

    return (
        <div className="flex justify-between items-center py-6 px-4 md:px-10 mx-auto my-4">
            <div className="left-div w-1/2 flex justify-start">
                <img src={logo} className="w-32 md:w-48" alt="Logo" />
            </div>
            <div className="right-div w-1/2 flex justify-end">
                <div className="flex items-center">
                    <img src={vector} className="w-8 md:w-10 cursor-pointer mr-2 md:mr-4" />
                    <p style={gradientText} className="text-2xl md:text-3xl">Create Flashcard</p>
                </div>
            </div>
        </div>
    );
};
