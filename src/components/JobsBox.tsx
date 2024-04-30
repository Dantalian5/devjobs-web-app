import JobCard from "@/components/JobCard";
import { Job } from "@/type/jobs";

function JobsBox({ data }: { data: Job[] }) {
  const jobs = data.map((job: Job) => <JobCard key={job.id} job={job} />);
  return <div className="l-jobs-wrapper">{jobs}</div>;
}

export default JobsBox;
