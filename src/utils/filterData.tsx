import type { Filter } from '@/types/filter';
import type { Job } from '@/types/jobs';
export const filterData = (jobs: Job[], filter: Filter) => {
  const { title, location, time } = filter;
  const newJobsList = jobs.filter((job: Job) => {
    const isFullTime = !time || job.contract.toLowerCase() === 'full time';
    const isValid =
      job.position.toLowerCase().includes(title.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      isFullTime;

    return isValid;
  });
  return newJobsList;
};
