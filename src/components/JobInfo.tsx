import Button from './Button';
function JobInfo({job}: any) {
	const handleClick = () => {
		window.location.href = job.website;
	};

	return (
		<section className="l-jobs-info">
			<div className="m-job-card m-job-card--centered">
				<div
					className="m-job-card__logo"
					style={{backgroundColor: job.logoBackground}}>
					<img
						className="m-job-card__logo-img"
						src={job.logo}
						alt=""
					/>
				</div>
				<h2 className="f-h2 m-job-card__title">{job.company}</h2>
				<p className="f-body m-job-card__info">{job.website}</p>
				<div className="m-job-card__btn">
					<Button
						text={'Company Site'}
						type={'type2'}
						action={handleClick}
					/>
				</div>
			</div>
		</section>
	);
}

export default JobInfo;
