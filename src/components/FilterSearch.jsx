import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useTheme } from "./ThemeContext";
import FilterInput from "./FilterInput";

export default function FilterSearch() {
  const { isDarkMode } = useTheme();

  return (
    <div className="gap-1 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
      <FilterInput icon={<IoSearch className="text-blue-500" size={30} />} value="" placeholder="Pesquisar por título"/>

      <FilterInput icon={<IoLocationOutline className="text-blue-500" size={30} />} value="" placeholder="Pesquisar por localização" />

      <div className={`flex justify-between gap-1 items-center ${isDarkMode ? "bg-slate-800" : "bg-slate-50"} p-5 rounded-md`}>
        <div className="flex items-center gap-1">
          <input id="tempo-integral" name="tempo-integral" type="checkbox" />
          <label className="font-extrabold" htmlFor="tempo-integral">Tempo integral</label>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">Procurar</button>
      </div>
    </div>
  )
}
