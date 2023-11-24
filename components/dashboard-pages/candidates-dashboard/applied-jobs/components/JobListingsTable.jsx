"use client"
import Link from "next/link.js";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const JobListingsTable = () => {
  const router = useRouter()

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/user', { next: { revalidate: 0 },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'jwt': localStorage.getItem('jwt')})
    },)
        .then(response => {
          if (response.status == 200)
            return response.json()
        })
        .then(data => {
           fetch('http://127.0.0.1:8000/api/user_courses/' + data.id)
              .then(response => {
                return response.json()
              })
              .then(data => {
                  console.log(data)
                setJobs(data)
              })
        })
  },[])
  return (
      <div className="tabs-box">
        <div className="widget-title">
          <h4>My Courses</h4>

          <div className="chosen-outer">
            {/* <!--Tabs Box--> */}
            <select className="chosen-single form-select">
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
              <option>Last 16 Months</option>
              <option>Last 24 Months</option>
              <option>Last 5 year</option>
            </select>
          </div>
        </div>
        {/* End filter top bar */}

        {/* Start table widget content */}
        <div className="widget-content">
          <div className="table-outer">
            <div className="table-outer">
              <table className="default-table manage-job-table">
                <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Date Enrolled</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {jobs.slice(0, 4).map((item) => (
                    <tr key={item.pk}>
                      <td>
                        {/* <!-- Job Block --> */}
                        <div className="job-block">
                          <div className="inner-box">
                            <div className="content">
                            <span className="company-logo">
                              <img
                                  width={50}
                                  height={49}
                                  src={"http://127.0.0.1:8000/media/" + item.fields.image}
                                  alt="logo"
                              />
                            </span>
                              <h4>
                                <Link href={`/job-single-v1/${item.pk}`}>
                                  {item.fields.title}
                                </Link>
                              </h4>
                              <ul className="job-info">
                                <li>
                                  <span className="icon flaticon-briefcase"></span>
                                  Segment
                                </li>
                                <li>
                                  <span className="icon flaticon-map-locator"></span>
                                    {item.fields.location}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.fields.time.substring(0, 10)}</td>
                      <td className="status">Active</td>
                      <td>
                        <div className="option-box">
                          <ul className="option-list">
                            <li>
                              <button data-text="View Aplication">
                                <span className="la la-eye"></span>
                              </button>
                            </li>
                            <li>
                              <button data-text="Delete Aplication">
                                <span className="la la-trash"></span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* End table widget content */}
      </div>
  );
};

export default JobListingsTable;
