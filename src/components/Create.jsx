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
        <div className="flex justify-between items-center py-6 px-10 mx-10 my-4">
            <div className="left-div w-1/2 flex justify-start">
                <img src={logo} className="w-40" />
            </div>
            <div className="right-div w-1/2 flex justify-end">
                <div className="flex w-2/5 justify-between items-center">
                    <img src={vector} className="w-10 cursor-pointer" />
                    <p style={gradientText} className="text-3xl">Create Flashcard</p>
                </div>
            </div>
        </div>
    )
}
