import Button from './Button';
import {Link, useLocation} from 'react-router-dom';
function JobInfo() {
	let id: number = 1;
	const handleClick = () => {
		window.location.href = job.website;
	};
	const job = useLocation().state;

	return (
		<>
			<section className="l-jobs__info">
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
					<div className="m-card-info__header">
						<p className="f-body m-card__body m-card-info__time">
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
						<h2 className="f-h2 m-card-info__header-title">{job.position}</h2>
						<h4 className="f-h4 m-card-info__header-location">
							{job.location}
						</h4>
					</div>

					<Button
						action={() => console.log('clicked')}
						text="Apply Now"
						size="large"
						type="cta"
					/>

					<div className="m-card-info__wrapper">
						<p className="f-body m-card-info__wrapper-body">
							{job.description}
						</p>
						<h2 className="f-h2 m-card-info__wrapper-title">Requirements</h2>
						<p className="f-body m-card-info__wrapper-body">
							{job.requirements.content}
						</p>
						<ul className="f-body m-card-info__wrapper-body m-list">
							{job.requirements.items.map((item: string) => (
								<li
									className="m-list__item"
									key={id++}>
									<p>{item}</p>
								</li>
							))}
						</ul>
						<h2 className="f-h2 m-card-info__wrapper-title">
							What You Will Do
						</h2>
						<p className="f-body m-card-info__wrapper-body ">
							{job.role.content}
						</p>
						<ul className="f-body m-card-info__wrapper-body m-list m-list--numbered">
							{job.role.items.map((item: string) => (
								<li
									className="m-list__item"
									key={id++}>
									<p>{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<div className="l-jobs__footer">
				<Button
					action={() => console.log('clicked')}
					text="Apply Now"
					size="large"
					type="cta"
				/>
			</div>
		</>
	);
}

export default JobInfo;
