"use client";
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";

async function getUser(){
    let response = -1
    await fetch('https://hi-test.kz//api/user', { next: { revalidate: 0 },
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
const index = async () => {
    const user = await getUser()
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>
            {/* <!-- Header Span for hight --> */}

            <LoginPopup/>
            {/* End Login Popup Modal */}

            <DashboardCandidatesHeader name={user.first_name + " " + user.last_name}/>
            {/* End Header */}

            <MobileMenu/>
            {/* End MobileMenu */}

            <DashboardCandidatesSidebar/>
            {/* <!-- End Candidates Sidebar Menu --> */}

            {/* <!-- Dashboard --> */}
            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <BreadCrumb title="My Profile!"/>
                    {/* breadCrumb */}

                    <MenuToggler/>
                    {/* Collapsible sidebar button */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <MyProfile user={user}/>
                                </div>
                            </div>

                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Contact Information</h4>
                                    </div>
                                    {/* End widget-title */}
                                    <div className="widget-content">
                                        <ContactInfoBox/>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ls widget --> */}
                        </div>
                    </div>
                    {/* End .row */}
                </div>
                {/* End dashboard-outer */}
            </section>
            {/* <!-- End Dashboard --> */}

            <CopyrightFooter/>
            {/* <!-- End Copyright --> */}
        </div>
        // End page-wrapper
    );
};

export default index;
