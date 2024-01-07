import Finder from './Finder';
import JobsBox from './JobsBox';
import Button from './Button';
import ErrorMsj from './ErrorMsj';
import JobCard from './JobCard';
import JobInfo from './JobInfo';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

type Status = 'success' | 'error';
// const headers = new Headers({
// 	'Content-Type': 'application/json',
// 	'Access-Control-Allow-Origin': '*',
// });

function Jobs() {
	const [jobs, setJobs] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [serverState, setServerState] = useState<Status>('success');
	const [contList, setContList] = useState<number>(12);
	useEffect(() => {
		async function getJobs() {
			setIsLoading(true);
			const dataFromServer = await fetchData();
			if (dataFromServer !== 'error') {
				setJobs(dataFromServer);
				setServerState('success');
			} else {
				setServerState('error');
			}
			setIsLoading(false);
		}
		getJobs();
	}, []);

	const jobList = jobs.slice(0, contList).map((job: any) => (
		<JobCard
			key={job.id}
			job={job}
			action={showJob}
		/>
	));

	function showJob(job: any) {}

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
							<Finder />
							{serverState === 'success' ? (
								<div className="l-jobs-wrapper">{jobList}</div>
							) : (
								<ErrorMsj />
							)}

							<Button
								text={isLoading ? 'Loading...' : 'Load More'}
								action={loadMore}
								type="cta"
								size="medium"
							/>
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
