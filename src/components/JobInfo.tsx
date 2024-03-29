import {useLocation} from 'react-router-dom';
import Button from '@/components/Button';
import {svgDot} from '@/utils/SvgIcon';

function JobInfo() {
	let id: number = 1;
	const job = useLocation().state;

	return (
		<>
			<section className="l-jobs__info">
				<div className="card-info-job">
					<div
						className="card-info-job__logo"
						style={{backgroundColor: job.logoBackground}}>
						<img
							className="card-info-job__logo__img"
							src={job.logo}
							alt="logo"
						/>
					</div>
					<div className="card-info-job__info">
						<div className="card-info-job__id">
							<h2 className="f-h2 card-job__title">{job.company}</h2>
							<p className="f-body card-job__body">{job.website}</p>
						</div>
						<Button
							text={'Company Site'}
							type={'link'}
							size={'static'}
							linked={true}
							link={job.website}
						/>
					</div>
				</div>
				<div className="card-info">
					<div className="card-info__header-wrapper">
						<div className="card-info__header">
							<p className="f-body card-job__body card-info__time">
								{job.postedAt}
								<span className="card-job__point">{svgDot}</span>
								{job.contract}
							</p>
							<h2 className="f-h2 card-info__header-title">{job.position}</h2>
							<h4 className="f-h4 card-info__header-location">
								{job.location}
							</h4>
						</div>

						<Button
							text="Apply Now"
							size="flex"
							type="cta"
							linked={true}
							link={job.apply}
						/>
					</div>

					<div className="card-info__wrapper">
						<p className="f-body card-info__wrapper-body">{job.description}</p>
						<h2 className="f-h2 card-info__wrapper-title">Requirements</h2>
						<p className="f-body card-info__wrapper-body">
							{job.requirements.content}
						</p>
						<ul className="f-body card-info__wrapper-body card-list">
							{job.requirements.items.map((item: string) => (
								<li
									className="card-list__item"
									key={id++}>
									<p>{item}</p>
								</li>
							))}
						</ul>
						<h2 className="f-h2 card-info__wrapper-title">What You Will Do</h2>
						<p className="f-body card-info__wrapper-body ">
							{job.role.content}
						</p>
						<ul className="f-body card-info__wrapper-body card-list card-list--numbered">
							{job.role.items.map((item: string) => (
								<li
									className="card-list__item"
									key={id++}>
									<p>{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<div className="l-jobs__footer">
				<div className="l-jobs__footer__wrapper">
					<div className="l-jobs__footer__info">
						<h2 className="f-h2 l-jobs__footer__title">{job.position}</h2>
						<p className="f-body l-jobs__footer__subtitle">{job.company}</p>
					</div>
					<Button
						text="Apply Now"
						size="flex"
						type="cta"
						linked={true}
						link={job.apply}
					/>
				</div>
			</div>
		</>
	);
}

export default JobInfo;
