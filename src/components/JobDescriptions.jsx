import calcHoursAgo from "../utils/calcHoursAgo";
import ApplyButton from "./ApplyButton";
import { useTheme } from "./ThemeContext"

export default function JobDescriptions({ jobData }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col p-10 rounded-xl ${isDarkMode ? "bg-slate-800" : "bg-slate-50"}`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-slate-500">{calcHoursAgo(jobData.minutesTimeAgo)} - {jobData.type}</div>
          <h2 className="text-3xl font-bold">{jobData.jobName}</h2>
          <span className="text-blue-600 font-bold">{jobData.country}</span>
        </div>

        <ApplyButton />
      </div>

      <div className={`mt-5 border-t-2 ${isDarkMode ? "border-white" : "border-black"}`}>
        <h4 className="text-2xl font-bold py-2">Sobre nós</h4>
        <span className="text-lg">{jobData.aboutUs}</span>
      </div>

      <div className="mt-5">
        <h4 className="text-2xl font-bold py-2">Tarefas do dia-a-dia</h4>
        <ul className="ms-10 list-disc text-lg">
          {jobData.tasks.split(", ").map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="text-2xl font-bold py-2">Requisitos</h4>
        <ul className="ms-10 list-disc text-lg">
          {jobData.requirements.split(", ").map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
