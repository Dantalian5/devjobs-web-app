import Finder from './Finder';
import JobsBox from './JobsBox';
import Button from './Button';
import ErrorMsj from './ErrorMsj';
import {useState, useEffect} from 'react';

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

	const jobList = jobs.slice(0, contList);

	// Fetch data from server
	async function fetchData() {
		try {
			const res = await fetch('http://localhost:5000/jobs');
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
			<Finder />
			{serverState === 'success' ? <JobsBox data={jobList} /> : <ErrorMsj />}

			<Button
				text={isLoading ? 'Loading...' : 'Load More'}
				action={loadMore}
				type="cta"
				size="medium"
			/>
		</main>
	);
}

export default Jobs;
