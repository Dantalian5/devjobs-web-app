import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Filter from '@/components/forms/Filter';
import Button from '@/components/common/Button';
import JobCard from '@/components/JobCard';
import JobInfo from '@/components/JobInfo';
import { fetchDatafromFirestore } from '@/utils/fetchData';
import { useFilterStore } from '@/store/filter.store';
import type { Job } from '@/types/jobs';

type Status = { status: 'success' | 'error'; message: string };
type FilterObj = {
  title: string;
  location: string;
  time: boolean;
};
function Jobs() {
  const [jobs, setJobs] = useState<any>([]);
  const { filter } = useFilterStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serverState, setServerState] = useState<Status>({
    status: 'success',
    message: '',
  });
  const [contList, setContList] = useState<number>(12);
  useEffect(() => {
    async function getJobs() {
      setIsLoading(true);
      //const dataFromServer = await fetchData();
      if (navigator.onLine) {
        try {
          const data = await fetchDatafromFirestore();
          data &&
            setJobs(data.map((item: Job) => ({ ...item, display: true })));
          setServerState({ status: 'success', message: '' });
        } catch (error) {
          setServerState({
            status: 'error',
            message:
              'Ups...there was an error, please, reload the page to try again',
          });
        }
      } else {
        setServerState({
          status: 'error',
          message: 'Ups...please check your internet :(',
        });
      }
      setIsLoading(false);
    }
    getJobs();
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let newJobsList = jobs.map((job: any) => {
      let displayItem;
      let isInTime;
      if (filter.time) {
        if ('full time' === job.contract.toLowerCase()) {
          isInTime = true;
        } else {
          isInTime = false;
        }
      } else {
        isInTime = true;
      }
      if (
        job.position.toLowerCase().includes(filter.title.toLowerCase()) &&
        job.location.toLowerCase().includes(filter.location.toLowerCase()) &&
        isInTime
      ) {
        displayItem = true;
      } else {
        displayItem = false;
      }

      return { ...job, display: displayItem };
    });
    setJobs(newJobsList);
  }, [filter]);

  const jobList = jobs
    .slice(0, contList)
    .map((job: any) => job.display && <JobCard key={job.id} job={job} />);
  // Load More
  function loadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setContList((prev) => (prev < jobs.length ? prev + 12 : prev));
      setIsLoading(false);
    }, 1000);
  }

  return (
    <main className='l-jobs'>
      <Routes>
        <Route
          path='/'
          element={
            <div className='l-jobs__list'>
              <Filter />
              {serverState.status === 'success' ? (
                <div className='grid-jobs'>{jobList}</div>
              ) : (
                <div className='error-msj'>
                  <p className='f-h4'>{serverState.message}</p>
                </div>
              )}
              <div className='l-jobs__load-more'>
                <Button
                  innerText={isLoading ? 'Loading...' : 'Load More'}
                  onClick={loadMore}
                  colors='cta'
                  size='lg'
                />
              </div>
            </div>
          }
        />
        <Route path='/job/:id' element={<JobInfo />} />
      </Routes>
    </main>
  );
}

export default Jobs;
