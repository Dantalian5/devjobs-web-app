import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Filter from "@/components/Filter";
import Button from "@/components/Button";
import JobCard from "@/components/JobCard";
// import { fetchData } from '@/utils/fetchData';
import { db } from "@/firebase";
import {FilterObj, Job} from "@/type/jobs";

type Status = {status: 'success' | 'error'; message: string};

function Jobs() {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [filter, setFilter] = useState<FilterObj>({
		title: '',
		location: '',
		time: false,
	});
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
					const dataFromServer = await getDocs(collection(db, 'jobs'));
					const data: any = [];
					dataFromServer.forEach((doc) => {
						data.push(doc.data());
					});
					setJobs(data.map((item: Job[]) => ({...item, display: true})));
					setServerState({status: 'success', message: ''});
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
		}
		getJobs();
	}, []);
	const {pathname} = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const newJobsList = jobs.map((job: Job) => {
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

			return {...job, display: displayItem};
		});
		setJobs(newJobsList);
	}, [filter]);

	const jobList = jobs.slice(0, contList).map(
		(job: any) =>
			job.display && (
				<JobCard
					key={job.id}
					job={job}
				/>
			)
	);
	// Load More
	function loadMore() {
		setIsLoading(true);
		setTimeout(() => {
			setContList((prev) => (prev < jobs.length ? prev + 12 : prev));
			setIsLoading(false);
		}, 1000);
	}

	return (
		<main className="l-jobs">
				<div className="l-jobs__list">
					<Filter action={setFilter}/>
					{serverState.status === 'success' ? (
						<div className="grid-jobs">{jobList}</div>
					) : (
						<div className="error-msj">
							<p className="f-h4">{serverState.message}</p>
						</div>
					)}
					<div className="l-jobs__load-more">
						<Button
							text={isLoading ? 'Loading...' : 'Load More'}
							action={loadMore}
							type="cta"
							size="static"
						/>
					</div>
				</div>


		</main>
	);
}

export default Jobs;

// todo : fix firestore server get() there is a problem to solve
