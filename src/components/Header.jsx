import Switcher from "./Switcher";

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-full w-screen bg-blue-500 rounded-es-full text-white p-4 md:p-6 lg:p-8 overflow-x-auto">
      <h1 className="text-xl md:text-3xl font-bold px-4">DevJobs</h1>
      <Switcher />
    </header>
  )
}
