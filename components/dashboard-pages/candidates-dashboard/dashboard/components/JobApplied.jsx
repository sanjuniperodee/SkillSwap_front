import Link from "next/link";
import Image from "next/image";

async function getJobs(){
  let response = []
  await fetch('http://185.146.1.93:81/api/jobs', { next: { revalidate: 3600 } })
      .then(response => {
        return response.json()
      })
      .then(data => {
        response = data
      })
  return response
}
const JobApplied = async () => {
  const recentJobApplied = await getJobs()

  return (
      <>
        {recentJobApplied.slice(0, 6).map((item) => (
            <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
              <div className="inner-box">
                <div className="content">
              <span className="company-logo">
                <Image
                    width={50}
                    height={49}
                    src={"http://185.146.1.93:81/media/" + item.fields.image}
                    alt="item brand"
                />
              </span>
                  <h4>
                    <Link href={`/job-single-v1/${item.pk}`}>{item.fields.title}</Link>
                  </h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {item.fields.company}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {item.fields.location}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-clock-3"></span> {item.fields.time}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-money"></span> {item.fields.salary}
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  {/*<ul className="job-other-info">*/}
                  {/*  {item.jobType.map((val, i) => (*/}
                  {/*      <li key={i} className={`${val.styleClass}`}>*/}
                  {/*        {val.type}*/}
                  {/*      </li>*/}
                  {/*  ))}*/}
                  {/*</ul>*/}
                  {/* End .job-other-info */}

                  <button className="bookmark-btn">
                    <span className="flaticon-bookmark"></span>
                  </button>
                </div>
              </div>
            </div>
            // End job-block
        ))}
      </>
  );
};

export default JobApplied;
