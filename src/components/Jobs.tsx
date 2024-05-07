import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Filter from "@/components/Filter";
import Button from "@/components/Button";
import JobCard from "@/components/JobCard";
// import { fetchData } from '@/utils/fetchData';

import { nanoid } from "nanoid";
import { useJobsStore } from "@/store/jobs.store.ts";

function Jobs() {
  const { getJobs, isLoading, serverState, jobs, count, loadMore } =
    useJobsStore();

  useEffect(() => {
    getJobs();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const jobList = jobs
    .slice(0, count)
    .map((job: any) => job.display && <JobCard key={nanoid()} job={job} />);
  // Load More

  return (
    <main className="l-jobs">
      <div className="l-jobs__list">
        <Filter />
        {serverState.status === "success" ? (
          <div className="grid-jobs">{jobList}</div>
        ) : (
          <div className="error-msj">
            <p className="f-h4">{serverState.message}</p>
          </div>
        )}
        <div className="l-jobs__load-more">
          <Button
            text={isLoading ? "Loading..." : "Load More"}
            handleClick={loadMore}
            isLink={false}
            size="static"
          />
        </div>
      </div>
    </main>
  );
}

export default Jobs;

// todo : fix firestore server get() there is a problem to solve

// at the useEffect
// const dataFromServer = await getDocs(collection(db, 'jobs'));
// console.log(dataFromServer);
// if (dataFromServer) {
// 	const data: any = [];
// 	dataFromServer.forEach((doc) => {
// 		data.push(doc.data());
// 	});
// 	setJobs(data.map((item: any) => ({...item, display: true})));
// 	setServerState('success');
// } else {
// 	setServerState('error');
// }
// setIsLoading(false);
