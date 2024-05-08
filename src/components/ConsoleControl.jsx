import Reload from "../assets/Reload.png";
import Fullscreen from "../assets/Fullscreen.png";
import Left from "../assets/Left.png";
import Right from "../assets/Right.png";

export const ConsoleControl = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <img src={Reload} className="px-3 sm:px-6 md:px-8 cursor-pointer" alt="Reload" />
      <img src={Left} className="px-3 sm:px-6 md:px-8 cursor-pointer" alt="Left" />
      <p className="px-3 sm:px-6 md:px-8 text-gray-900 text-xl font-semibold">01/10</p>
      <img src={Right} className="px-3 sm:px-6 md:px-8 cursor-pointer" alt="Right" />
      <img src={Fullscreen} className="px-3 sm:px-6 md:px-8 cursor-pointer" alt="Fullscreen" />
    </div>
  )
}
