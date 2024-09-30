// src/pages/JobDetails.jsx
import { Link, useParams } from 'react-router-dom';
import jobs from '../mock/jobs';
import CompanyCard from '../components/CompanyCard';
import JobDescriptions from '../components/JobDescriptions';

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobs.find((j) => j.id === parseInt(jobId));

  if (!job) {
    return <div className=' font-bold text-xl'>Vaga não encontrada!</div>;
  }

  return (
    <div className='flex flex-col gap-4 sm:px-10 md:px-10 lg:px-16 mt-2'>
      <CompanyCard job={job} />

      <JobDescriptions jobData={job} />

      <div>
        <Link to={"/"}>
          <button className='w-full md:w-auto rounded-md text-blue-500 border-2 border-blue-500 px-9 py-2 hover:bg-blue-500 hover:text-white transition-colors'>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
