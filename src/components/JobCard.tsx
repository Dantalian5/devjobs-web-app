import { Link } from "react-router-dom";
import { Job } from "@/type/jobs";

function JobCard({ job }: { job: Job }) {
  const {
    position,
    location,
    logoBackground,
    logo,
    company,
    postedAt,
    contract,
    id,
  } = job;

  return (
    <Link to={`/job/${id}`} state={job}>
      <div className="card-job" style={{ cursor: "pointer" }}>
        <div
          className="card-job__logo"
          style={{ backgroundColor: logoBackground }}
        >
          <img className="card-job__logo__img" src={logo} alt="" />
        </div>
        <p className="f-body card-job__body">
          {postedAt}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </svg>
          </span>
          {contract}
        </p>
        <h2 className="f-h2 card-job__title">{position}</h2>
        <p className="f-body card-job__body">{company}</p>
        <h4 className="f-h4 card-job__location">{location}</h4>
      </div>
    </Link>
  );
}

export default JobCard;
