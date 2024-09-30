import { useTheme } from './ThemeContext'

export default function FilterInput({ icon, placeholder, value }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex gap-1 items-center ${isDarkMode ? "bg-slate-800" : "bg-slate-50"} p-5 rounded-md`}>
      {icon}
      <input className="p-2 bg-transparent active:outline-none active:border-0 focus:outline-none w-full" placeholder={placeholder} value={value} type="text" />
    </div>
  )
}
