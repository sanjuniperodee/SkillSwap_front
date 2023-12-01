'use client'
import Link from "next/link";
import {useEffect} from "react";

async function getUser(){
  let response = -1
  await fetch('https://hi-test.kz/api/user', { next: { revalidate: 0 },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'jwt': localStorage.getItem('jwt')})
  },)
      .then(response => {
        if(response.status == 200)
          return response.json()
      })
      .then(data => {
        response = data
      })
  return response
}
const ApplyJobModalContent = (props) => {
  const handleSubmit = async () => {
    const user = await getUser()
    console.log(user)
    if (user == -1) {
      alert('GOODBYE')
    } else {
      fetch('https://hi-test.kz/api/enroll/' + user.id + "/" + props.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'jwt': localStorage.getItem('jwt')})
      })
          .then((response) => {
            if (response.status == 200) {
              alert('You successfully enrolled to course')
            }
          })
          .catch((error) => {
            console.log(error)
          })
    }
  };
  return (

    <form className="default-form job-apply-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember">
              <span className="custom-checkbox"></span> You accept our{" "}
              <span data-bs-dismiss="modal">
                <Link href="/terms">
                  Terms and Conditions and Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="submit"
            name="submit-form"
            onClick={handleSubmit}
          >
            Записаться на курс
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
