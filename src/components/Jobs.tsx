import Finder from './Finder';
import JobsBox from './JobsBox';
import Button from './Button';
import {useState, useEffect} from 'react';
function Jobs() {
	const [jobs, setJobs] = useState([]);
	const [contList, setContList] = useState<number>(0);
	useEffect(() => {
		async function getJobs() {
			const tasksFromServer = await fetchData();
			setJobs(tasksFromServer);
		}
		getJobs();
	}, []);

	const jobList = jobs.slice(contList, contList + 12);

	// Fetch data from server
	async function fetchData() {
		const res = await fetch('http://localhost:5000/jobs');
		const data = await res.json();

		return data;
	}

	return (
		<main className="l-jobs">
			<Finder />
			<JobsBox data={jobList} />
			<Button
				text={'Load More'}
				action={() => setContList(0)}
				type={'type1'}
			/>
		</main>
	);
}

export default Jobs;
