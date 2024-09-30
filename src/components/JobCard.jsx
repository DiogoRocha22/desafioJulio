import { Link } from "react-router-dom";
import calcHoursAgo from "../utils/calcHoursAgo";
import { useTheme } from "./ThemeContext";

export default function JobCard({ jobData }) {
  const { isDarkMode } = useTheme();

  return (
    <Link to={`/jobs/${jobData.id}`}>
      <div className={`relative rounded-2xl p-12 ${isDarkMode ? "bg-slate-800" : "bg-slate-50"}`}>
        <div className="flex flex-col gap-1">
          <img className="absolute w-14 transform -top-7 rounded-lg" src={jobData.logo} alt="" />

          <div className="flex text-slate-500">{calcHoursAgo(jobData.minutesTimeAgo)} - {jobData.type}</div>
          <h3 className="text-xl font-bold">{jobData.jobName}</h3>
          <span className="text-slate-500">{jobData.company}</span>

          <span className="mt-5 text-blue-600 font-bold">{jobData.country}</span>
        </div>
      </div>
    </Link>

  )
}
