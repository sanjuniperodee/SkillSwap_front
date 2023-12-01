
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
const DefaulHeader2 = () => {
  const [user, setUser] = useState(null)

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    fetch('https://hi-test.kz/api/user', { next: { revalidate: 3600 },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'jwt': localStorage.getItem('jwt')})
    },)
        .then(response => {
          if(response.status == 200)
            return response.json()
          else response = null
        })
        .then(data => {
          setUser(data)
        })
  }, []);

  return (
      // <!-- Main Header-->
      <header
          className={`main-header  ${
              navbar ? "fixed-header animated slideInDown" : ""
          }`}
      >
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                      width={120}
                      height={50}
                      src="/images/logo.png"
                      alt="brand"
                  />
                </Link>
                SkillSwap
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent/>
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            {/* <!-- Add Listing --> */}
            {/*<Link href="/candidates-dashboard/cv-manager" className="upload-cv">*/}
            {/*  Загрузить свое резюме*/}
            {/*</Link>*/}
            {/* <!-- Login/Register --> */}
            <div className="btn-box">
              {!user &&

                  <a
                  href="#"
                  className="theme-btn btn-style-three call-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#loginPopupModal"
              >
                Войти / Зарегистрироваться
              </a>
              }
              {user &&
                  <div>
                    <img alt="avatar"
                         // className=""
                         src="/images/resource/candidate-1.png"
                         width={50}
                         height={50}></img>
                    <a href={'/candidates-dashboard/my-profile'}>
                      {user.first_name} {user.last_name}
                    </a>
                  </div>}
              {/*<Link*/}
              {/*  href="/employers-dashboard/post-jobs"*/}
              {/*  className="theme-btn btn-style-one"*/}
              {/*>*/}
              {/*  Опубликовать работу*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </header>
  );
};

export default DefaulHeader2;
