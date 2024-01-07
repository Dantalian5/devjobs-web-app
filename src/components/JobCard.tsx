import {Link} from 'react-router-dom';
function JobCard({job}: any) {
	return (
		<Link
			to={`/job/${job.position}`}
			state={job}>
			<div
				className="m-card"
				style={{cursor: 'pointer'}}>
				<div
					className="m-card__logo"
					style={{backgroundColor: job.logoBackground}}>
					<img
						className="m-card__logo__img"
						src={job.logo}
						alt=""
					/>
				</div>
				<p className="f-body m-card__body">
					{job.postedAt}
					<span>
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
				<h2 className="f-h2 m-card__title">{job.position}</h2>
				<p className="f-body m-card__body">{job.company}</p>
				<h4 className="f-h4 m-card__location">{job.location}</h4>
			</div>
		</Link>
	);
}

export default JobCard;
