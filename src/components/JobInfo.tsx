import Button from './Button';
function JobInfo({job}: any) {
	const handleClick = () => {
		window.location.href = job.website;
	};

	return (
		<section className="l-jobs-info">
			<div className="m-card centered">
				<div
					className="m-card__logo"
					style={{backgroundColor: job.logoBackground}}>
					<img
						className="m-card__logo__img"
						src={job.logo}
						alt=""
					/>
				</div>
				<h2 className="f-h2 m-card__title">{job.company}</h2>
				<p className="f-body m-card__body">{job.website}</p>
				<span></span>
				<Button
					text={'Company Site'}
					type={'link'}
					size={'medium'}
					action={handleClick}
				/>
			</div>
			<div className="m-card-info">
				<p className="f-body m-card__body">
					{job.postedAt}
					<span className="m-card__point">
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
				<h4 className="f-h4 m-job-card__location">{job.location}</h4>
				<Button
					action={() => console.log('clicked')}
					text="Apply Now"
					size="large"
					type="cta"
				/>
				<p className="f-body">{job.description}</p>
				<h2 className="f-h2">Requirements</h2>
				<p className="f-body">{job.requirements.content}</p>
				<ul className="f-body list">
					{job.requirements.items.map((item: string) => (
						<li className="list__item">
							<p>{item}</p>
						</li>
					))}
				</ul>

				<h2 className="f-h2">What You Will Do</h2>
				<p className="f-body">{job.role.content}</p>
				<p className="f-body">{job.role.items}</p>
			</div>
		</section>
	);
}

export default JobInfo;
