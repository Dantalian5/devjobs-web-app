import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDatafromFirestore } from '@/utils/fetchData';
import { filterData } from '@/utils/filterData';
import { useFilterStore } from '@/store/filter.store';
import type { Job } from '@/types/jobs';
import JobCard from '@/components/JobCard';
import Button from '@/components/common/Button';

const Jobs = () => {
  const { filter } = useFilterStore();
  const [loadNumber, setLoadNumber] = useState<number>(12);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchDatafromFirestore,
  });

  if (isPending) {
    return (
      <div className='l-jobs__list'>
        <p>Loading...</p>
        <div className='l-jobs__load-more'>
          <Button
            innerText={'Loading...'}
            onClick={() => {}}
            colors='cta'
            size='lg'
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='l-jobs__list'>
        <div className='error-msj'>
          <p className='f-h4'>Error: {error.message}</p>
          <p className='f-h4'>Please reload the page</p>
        </div>
      </div>
    );
  }

  // We can assume by this point that `isSuccess === true`
  if (data) {
    const jobs: Job[] = filterData(data, filter);

    const jobList = jobs
      .slice(0, loadNumber)
      .map((job: Job) => <JobCard key={job.id} job={job} />);
    return (
      <div className='l-jobs__list'>
        <div className='grid-jobs'>{jobList}</div>
        <div className='l-jobs__load-more'>
          <Button
            innerText={'Load More'}
            onClick={() => setLoadNumber((prev) => prev + 12)}
            colors='cta'
            size='lg'
          />
        </div>
      </div>
    );
  }
};
export default Jobs;
