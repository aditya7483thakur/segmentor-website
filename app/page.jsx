import { LuClipboardCheck } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { GiJusticeStar } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFirefoxBrowser } from "react-icons/fa";
import {
  Button1,
  Loader2,
  Loader3,
  Toggle2,
  Button3,
  Loader9,
} from "segmentor";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <img src="logo.png" className="w-56" />
      </div>
      <h1 className=" mt-8 text-4xl md:text-6xl px-6 font-medium md:px-20 text-center">
        Elevate your design with our dynamic and animated UI components
      </h1>
      <div className="flex flex-col md:flex-row mt-10 justify-center items-center">
        <div className="bg-indigo-700 md:bg-transparent md:border-cyan-700 md:border-2 transition-all ease-in-out duration-300 transform hover:scale-105  md:hover:bg-cyan-700 cursor-pointer w-3/4 md:max-w-80 rounded-lg md:mx-10 my-4 h-16 flex flex-row justify-between text-xl font-medium">
          <span className="my-auto ml-4">$</span>
          <span className="my-auto">npm i segmentor</span>
          <LuClipboardCheck className=" text-2xl my-auto mr-3" />
        </div>
        <button className="bg-red-600 md:bg-transparent md:border-cyan-700 md:border-2 transition-all ease-in-out duration-300 transform hover:scale-105  md:hover:bg-cyan-700 w-3/4 md:max-w-80 rounded-lg md:mx-10 my-4 h-16 text-xl font-medium">
          <div className="flex flex-row items-center justify-center">
            <FaGithub className=" mx-1 text-2xl" />
            <span className="mx-1"> View github</span>
          </div>
        </button>
      </div>

      <section>
        <h1 className=" text-4xl md:text-6xl underline font-medium text-center mt-8">
          💫Key features
        </h1>
        <div className="mt-6">
          <div className="text-xl md:text-4xl font-medium my-auto pt-5">
            Responsive Design 🖥️
          </div>

          <div className=" text-end  my-7 text-xl md:text-4xl font-medium">
            🧙 Animated and Modern
          </div>

          <div className="text-xl md:text-4xl font-medium my-auto pt-6">
            Easy Integration and Usage 👨‍💻
          </div>

          <div className=" text-end my-7 text-xl pt-3 md:text-4xl font-medium">
            📶 Performance Optimization
          </div>

          <div className="text-xl md:text-4xl font-medium my-auto pt-6">
            Cross-Browser Compatibility 🌐
          </div>
        </div>
      </section>

      <section className="mt-12">
        <Button3 className="w-full" />
        <div className="flex flex-row justify-evenly items-center my-10">
          <Loader2 />
          <Toggle2 />
          <Loader9 />
        </div>
        <Button1 className="w-full" />
        <h1 className="mt-10 font-medium text-3xl text-center md:text-5xl">
          Make Your Websites Modern Now
        </h1>
      </section>
    </>
  );
}
