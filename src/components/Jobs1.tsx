import { useQuery } from '@tanstack/react-query';
import { fetchDatafromFirestore } from '@/utils/fetchData';
import { filterData } from '@/utils/filterData';
import { useFilterStore } from '@/store/filter.store';
import type { Job } from '@/types/jobs';
import JobCard from '@/components/JobCard';

const Jobs1 = () => {
  const { filter } = useFilterStore();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchDatafromFirestore,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <div className='error-msj'>
        <p className='f-h4'>Error: {error.message}</p>
      </div>
    );
  }

  // We can assume by this point that `isSuccess === true`
  if (data) {
    const jobs: Job[] = filterData(data, filter);

    const jobList = jobs
      .slice(0, 12)
      .map((job: Job) => <JobCard key={job.id} job={job} />);
    console.log(data.length, '=>', jobs.length);
    return (
      <div className='l-jobs__list'>
        <div className='grid-jobs'>{jobList}</div>
      </div>
    );
  }
};
export default Jobs1;
