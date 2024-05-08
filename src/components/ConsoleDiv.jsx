import Bulb from "../assets/Bulb.png";
import Volume from "../assets/Volume.png";

export const ConsoleDiv = () => {
    return (
        <div className="flex justify-center mt-8">
            <div className="relative w-10/12 sm:w-2/5 bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl flex justify-center items-center h-64 sm:h-96 text-white">
                <img src={Bulb} className="absolute left-0 top-0 w-4 m-5" alt="Volume" />
                <img src={Volume} className="absolute right-0 top-0 w-4 m-5" alt="Bulb" />
                <p className="text-3xl">9 + 6 + 7x - 2x - 3</p>
            </div>
        </div>
    )
}
