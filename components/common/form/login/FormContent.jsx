"use client";
import Link from "next/link";
import React, {useState} from "react";
import LoginWithSocial from "./LoginWithSocial";
import { useRouter } from 'next/navigation'

const FormContent = () => {
  const router = useRouter()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault()
    let flag = false
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email":email,
                                  "password": password})
    }).then((response) => {
      console.log(response.status)
      if(response.status!=200) {
        alert('Неправильны логин или пароль')
      }
      else{
        return response.json()
      }
    }).then(data => {
      localStorage.setItem("jwt", data.token)
      router.push('/candidates-dashboard/my-profile', { scroll: false })
      // alert(data.token)
    })
  }

  return (
    <div className="form-inner">
      <h3>Login to Superio</h3>

      {/* <!--Login Form--> */}
      <form method="post" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Email"
                 value={email}
                 onChange={(e) => {setEmail(e.target.value)}}
                 required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
