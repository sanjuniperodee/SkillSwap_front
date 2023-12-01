import dynamic from "next/dynamic";
import jobs from "@/data/job-featured";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import RelatedJobs from "@/components/job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "@/components/job-single-pages/job-overview/JobOverView";
import JobSkills from "@/components/job-single-pages/shared-components/JobSkills";
import CompnayInfo from "@/components/job-single-pages/shared-components/CompanyInfo";
import MapJobFinder from "@/components/job-listing-pages/components/MapJobFinder";
import SocialTwo from "@/components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "@/components/job-single-pages/shared-components/JobDetailsDescriptions";
import ApplyJobModalContent from "@/components/job-single-pages/shared-components/ApplyJobModalContent";
import Image from "next/image";
import DefaulHeader2 from "@/components/header/DefaulHeader2";


async function getJob(id){
  let response = []
  await fetch('https://hi-test.kz/api/job/' + id, { next: { revalidate: 0 } })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        response = data
      })
  return response
}

export const metadata = {
  title: "Skill Swap",
  description: "Делись своими знаниями и обретай новые",
};

const JobSingleDynamicV1 = async ({params}) => {
  const job = await getJob(params.id)

  return (
      <>
        {/* <!-- Header Span --> */}
        <span className="header-span"></span>

        <LoginPopup />
        {/* End Login Popup Modal */}

        <DefaulHeader2 />
        {/* End Header with upload cv btn */}

        <MobileMenu />
        {/* End MobileMenu */}

        {/* <!-- Job Detail Section --> */}
        <section className="job-detail-section">
          <div className="upper-box">
            <div className="auto-container">
              <div className="job-block-seven">
                <div className="inner-box">
                  <div className="content">
                  <span className="company-logo">
                    <Image
                        width={100}
                        height={98}
                        src={"https://hi-test.kz/media/" + job.fields.image}
                        alt="logo"
                    />
                  </span>
                    <h4>{job.fields.title}</h4>

                    <ul className="job-info">
                      <li>
                        <span className="icon flaticon-briefcase"></span>
                        {job.fields.company}
                      </li>
                      {/* compnay info */}
                      <li>
                        <span className="icon flaticon-map-locator"></span>
                        {job.fields.location}
                      </li>
                      {/* location info */}
                      <li>
                        <span className="icon flaticon-clock-3"></span>{" "}
                        {job.fields.time}
                      </li>
                      {/* time info */}
                      <li>
                        <span className="icon flaticon-money"></span>{" "}
                        {job.fields.salary}
                      </li>
                      {/* salary info */}
                    </ul>
                    {/* End .job-info */}

                    {/*<ul className="job-other-info">*/}
                    {/*  {company?.jobType?.map((val, i) => (*/}
                    {/*      <li key={i} className={`${val.styleClass}`}>*/}
                    {/*        {val.type}*/}
                    {/*      </li>*/}
                    {/*  ))}*/}
                    {/*</ul>*/}
                    {/* End .job-other-info */}
                  </div>
                  {/* End .content */}

                  <div className="btn-box">
                    <a
                        href="#"
                        className="theme-btn btn-style-one"
                        data-bs-toggle="modal"
                        data-bs-target="#applyJobModal"
                    >
                      Apply For Job
                    </a>
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark"></i>
                    </button>
                  </div>
                  {/* End apply for job btn */}

                  {/* <!-- Modal --> */}
                  <div
                      className="modal fade"
                      id="applyJobModal"
                      tabIndex="-1"
                      aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="apply-modal-content modal-content">
                        <div className="text-center">
                          <h3 className="title">Apply for this job</h3>
                          <button
                              type="button"
                              className="closed-modal"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                          ></button>
                        </div>
                        {/* End modal-header */}

                        <ApplyJobModalContent id={params.id}/>
                        {/* End PrivateMessageBox */}
                      </div>
                      {/* End .send-private-message-wrapper */}
                    </div>
                  </div>
                  {/* End .modal */}
                </div>
              </div>
              {/* <!-- Job Block --> */}
            </div>
          </div>
          {/* <!-- Upper Box --> */}

          <div className="job-detail-outer">
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                  <JobDetailsDescriptions description={job.fields.description}
                                          responsibilities={job.fields.responsibilities.split("\n")}
                                          skills={job.fields.experience.split("\n")}
                  />
                  {/* End jobdetails content */}

                  <div className="other-options">
                    <div className="social-share">
                      <h5>Share this job</h5>
                      <SocialTwo/>
                    </div>
                  </div>
                  {/* <!-- Other Options --> */}

                  <div className="related-jobs">
                    <div className="title-box">
                      <h3>Related Jobs</h3>
                      <div className="text">
                        2020 jobs live - 293 added today.
                      </div>
                    </div>
                    {/* End title box */}

                    <RelatedJobs/>
                  </div>
                  {/* <!-- Related Jobs --> */}
                </div>
                {/* End .content-column */}

                <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar">
                    <div className="sidebar-widget">
                      {/* <!-- Job Overview --> */}
                      <h4 className="widget-title">Дополнительная информация</h4>
                      <JobOverView posted={job.fields.created_at}
                                   expires={job.fields.expires}
                                   location={job.fields.location}
                                   category={job.fields.category}
                                   salary={job.fields.salary}
                      />

                      <h4 className="widget-title mt-5">Требуемые навыки</h4>
                      <div className="widget-content">
                        <JobSkills skills={job.fields.skills}/>
                      </div>
                      {/* <!-- Job Skills --> */}
                    </div>
                    {/* End .sidebar-widget */}

                    <div className="sidebar-widget company-widget">
                      <div className="widget-content">
                        <div className="company-title">
                          <div className="company-logo">
                            <Image
                                width={54}
                                height={53}
                                src={"https://hi-test.kz/media/" + job.fields.image}
                                alt="resource"
                            />
                          </div>
                          <h5 className="company-name">{job.fields.company}</h5>
                          <a href="#" className="profile-link">
                            View company profile
                          </a>
                        </div>
                        {/* End company title */}

                        <CompnayInfo/>

                        <div className="btn-box">
                          <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="theme-btn btn-style-three"
                          >
                            {/*{company?.link}*/}
                          </a>
                        </div>
                        {/* End btn-box */}
                      </div>
                    </div>
                    {/* End .company-widget */}
                  </aside>
                  {/* End .sidebar */}
                </div>
                {/* End .sidebar-column */}
              </div>
            </div>
          </div>
          {/* <!-- job-detail-outer--> */}
        </section>
        {/* <!-- End Job Detail Section --> */}

        <FooterDefault footerStyle="alternate5"/>
        {/* <!-- End Main Footer --> */}
      </>
  );
};

export default dynamic(() => Promise.resolve(JobSingleDynamicV1), {
  ssr: false,
});
