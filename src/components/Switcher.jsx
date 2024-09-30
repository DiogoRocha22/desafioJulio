import { useTheme } from "./ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

export default function Switcher() {
  const { isDarkMode, toggleTheme } = useTheme(); // Use o contexto

  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-3 text-white font-extrabold"><MdOutlineWbSunny size={20}/></span>
      <div className="relative">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={isDarkMode} 
          onChange={toggleTheme} 
        />
        <div className={`block w-14 h-8 ${isDarkMode ? "bg-slate-800" : "bg-gray-300"} rounded-full`}></div>
        <div 
          className={`dot absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${isDarkMode ? 'translate-x-7' : 'translate-x-1'}`}
        ></div>
      </div>
      <span className="ml-3 text-gray-800 font-extrabold"><IoMoonOutline size={20}/></span>
    </label>
  );
}
