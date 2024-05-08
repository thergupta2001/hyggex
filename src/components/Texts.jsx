import Home from "../assets/HomeLogo.png"

export const Texts = () => {
    const gradientText1 = {
        backgroundImage: 'linear-gradient(to bottom, #060286, #164ec0)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 600,
        fontFamily: 'Montserrat, sans-serif',
    };

    const gradientText2 = {
        color: '#696671',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
    };

    return (
        <>
            <p style={gradientText2} className="text-xs md:text-sm lg:text-base py-6 px-4 md:px-10 mx-auto md:mx-auto flex items-center">
                <img src={Home} className="w-4 mr-2" />
                {">"} FlashCard {">"} Mathematics {">"} <span className="ml-2 text-blue-800"> Relations and Function</span>
            </p>
            <p style={gradientText1} className="text-3xl py-6 px-4 md:px-10 mx-auto md:mx-auto my-2">Relations and Functions (Mathematics)</p>
        </>
    )
}
