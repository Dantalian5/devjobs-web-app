import JobCard from "@/components/JobCard";
function JobsBox({ data }: any) {
  const jobs = data.map((job: any) => <JobCard key={job.id} job={job} />);
  return <div className="l-jobs-wrapper">{jobs}</div>;
}

export default JobsBox;
