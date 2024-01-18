import Finder from './Finder';
import Button from './Button';
import JobCard from './JobCard';
import JobInfo from './JobInfo';
import {useState, useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

type Status = 'success' | 'error';
// const headers = new Headers({
// 	'Content-Type': 'application/json',
// 	'Access-Control-Allow-Origin': '*',
// });
type FilterObj = {
	title: string;
	location: string;
	time: boolean;
};
function Jobs() {
	const [jobs, setJobs] = useState<any>([]);
	const [filter, setFilter] = useState<FilterObj>({
		title: '',
		location: '',
		time: false,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [serverState, setServerState] = useState<Status>('success');
	const [contList, setContList] = useState<number>(12);
	useEffect(() => {
		async function getJobs() {
			setIsLoading(true);
			const dataFromServer = await fetchData();
			if (dataFromServer !== 'error') {
				setJobs(dataFromServer.map((item: any) => ({...item, display: true})));
				setServerState('success');
			} else {
				setServerState('error');
			}
			setIsLoading(false);
		}
		getJobs();
	}, []);
	const {pathname} = useLocation();

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

	// Fetch data from server
	async function fetchData() {
		try {
			const res = await fetch('http://192.168.1.101:5000/jobs');
			if (res.ok) {
				const data = await res.json();
				return data;
			} else {
				throw new Error('res.status');
			}
		} catch (error) {
			return 'error';
		}
	}
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
			<Routes>
				<Route
					path="/"
					element={
						<div className="l-jobs__list">
							<Finder action={setFilter} />
							{serverState === 'success' ? (
								<div className="grid-jobs">{jobList}</div>
							) : (
								<div className="error-msj">
									<p className="f-h4">
										Ups...there was an error, please, reload the page to try
										again
									</p>
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
					}
				/>
				<Route
					path="/job/:id"
					element={<JobInfo />}
				/>
			</Routes>
		</main>
	);
}

export default Jobs;
