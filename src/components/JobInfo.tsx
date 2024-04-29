import { useLocation } from "react-router-dom";
import Button from "@/components/Button";
import { svgDot } from "@/utils/SvgIcon";
import { Job } from "@/type/jobs";

function JobInfo() {
  const job: Job = useLocation().state;
  const {
    position,
    location,
    logoBackground,
    logo,
    company,
    postedAt,
    contract,
    id,
    website,
    requirements,
    role,
    apply,
    description,
  } = job;

  return (
    <>
      <section className="l-jobs__info">
        <div className="card-info-job">
          <div
            className="card-info-job__logo"
            style={{ backgroundColor: logoBackground }}
          >
            <img className="card-info-job__logo__img" src={logo} alt="logo" />
          </div>
          <div className="card-info-job__info">
            <div className="card-info-job__id">
              <h2 className="f-h2 card-job__title">{company}</h2>
              <p className="f-body card-job__body">{website}</p>
            </div>
            <Button
              text={"Company Site"}
              type={"link"}
              size={"static"}
              linked={true}
              link={website}
            />
          </div>
        </div>
        <div className="card-info">
          <div className="card-info__header-wrapper">
            <div className="card-info__header">
              <p className="f-body card-job__body card-info__time">
                {postedAt}
                <span className="card-job__point">{svgDot}</span>
                {contract}
              </p>
              <h2 className="f-h2 card-info__header-title">{position}</h2>
              <h4 className="f-h4 card-info__header-location">{location}</h4>
            </div>

            <Button
              text="Apply Now"
              size="flex"
              type="cta"
              linked={true}
              link={apply}
            />
          </div>

          <div className="card-info__wrapper">
            <p className="f-body card-info__wrapper-body">{description}</p>
            <h2 className="f-h2 card-info__wrapper-title">Requirements</h2>
            <p className="f-body card-info__wrapper-body">
              {requirements.content}
            </p>
            <ul className="f-body card-info__wrapper-body card-list">
              {requirements.items.map((item: string) => (
                <li className="card-list__item" key={id}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <h2 className="f-h2 card-info__wrapper-title">What You Will Do</h2>
            <p className="f-body card-info__wrapper-body ">{role.content}</p>
            <ul className="f-body card-info__wrapper-body card-list card-list--numbered">
              {role.items.map((item: string) => (
                <li className="card-list__item" key={id}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer className="l-jobs__footer">
        <div className="l-jobs__footer__wrapper">
          <div className="l-jobs__footer__info">
            <h2 className="f-h2 l-jobs__footer__title">{position}</h2>
            <p className="f-body l-jobs__footer__subtitle">{company}</p>
          </div>
          <Button
            text="Apply Now"
            size="flex"
            type="cta"
            linked={true}
            link={apply}
          />
        </div>
      </footer>
    </>
  );
}

export default JobInfo;
