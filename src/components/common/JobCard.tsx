import { Link } from 'react-router-dom';
import type { Job } from '@/types/jobs';

function JobCard({ job }: { job: Job }) {
  return (
    <Link to={`/jobs/${job.position}`} state={job}>
      <div className='card-job' style={{ cursor: 'pointer' }}>
        <div
          className='card-job__logo'
          style={{ backgroundColor: job.logoBackground }}
        >
          <img className='card-job__logo__img' src={job.logo} alt='' />
        </div>
        <p className='f-body card-job__body'>
          {job.postedAt}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='4'
              height='4'
              viewBox='0 0 4 4'
              fill='none'
            >
              <circle cx='2' cy='2' r='2' fill='currentColor' />
            </svg>
          </span>
          {job.contract}
        </p>
        <h2 className='f-h2 card-job__title'>{job.position}</h2>
        <p className='f-body card-job__body'>{job.company}</p>
        <h4 className='f-h4 card-job__location'>{job.location}</h4>
      </div>
    </Link>
  );
}

export default JobCard;
