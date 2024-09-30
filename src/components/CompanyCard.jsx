import { useTheme } from "./ThemeContext"

export default function CompanyCard({ job }) {
  const { isDarkMode } = useTheme()

  return (
    <a target="_blank" href={job.link}>
      <div className={`flex items-center rounded-xl ${isDarkMode ? "bg-slate-800" : "bg-slate-50"} max-h-32 overflow-hidden`}>

        <img className="h-full max-h-32 w-auto" src={job.logo} alt="Company Logo" />

        <div className="flex flex-col px-10 justify-center ml-4">
          <h5 className="font-bold text-xl">{job.company}</h5>
          <small className="text-base text-slate-500">{job.country}</small>
        </div>

      </div>
    </a>
  )
}
