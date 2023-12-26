function JobCard({job}: any) {
	return (
		<div className="m-job-card">
			<div
				className="m-job-card__logo"
				style={{backgroundColor: job.logoBackground}}>
				<img
					className="m-job-card__logo-img"
					src={job.logo}
					alt=""
				/>
			</div>
			<p className="f-body m-job-card__info">
				{job.postedAt}
				<span className="m-job-card__point">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4"
						height="4"
						viewBox="0 0 4 4"
						fill="none">
						<circle
							cx="2"
							cy="2"
							r="2"
							fill="currentColor"
						/>
					</svg>
				</span>
				{job.contract}
			</p>
			<h2 className="f-h2 m-job-card__title">{job.position}</h2>
			<p className="f-body m-job-card__info">{job.company}</p>
			<h4 className="f-h4 m-job-card__location">{job.location}</h4>
		</div>
	);
}

export default JobCard;
