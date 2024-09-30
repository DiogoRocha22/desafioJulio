import { useState } from "react";
import FilterSearch from "../components/FilterSearch";
import JobCard from "../components/jobCard";
import jobs from "../mock/jobs";

export default function Home() {
  const [searchParams, setSearchParams] = useState(
    {
      title: "",
      localization: "",
      fullTime: false
    }
  );
  let jobsData = jobs;

  function catchSearchParams(params){
    setSearchParams(params)
    console.log(searchParams)
  }
  
  return (
    <div>
      <FilterSearch catch={catchSearchParams}/>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {jobsData.map((job, index) => (
          <JobCard key={index} jobData={job} />
        ))}
      </div>
    </div>
  )
}
