import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useTheme } from './components/ThemeContext';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <Router> {/* Adicionando o Router aqui */}
      <div className={`min-h-screen ${isDarkMode ? "bg-slate-900 text-white" : "bg-slate-200 text-black"} font-sans`}>
        <Header />

        <main className='p-4 sm:px-8 md:px-16 lg:px-24'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
