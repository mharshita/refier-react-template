import React from "react"
import "./App.css"
import profilePic from "./person.svg"

const Second = () => {
    return(
        <div className="middle">
            <div className="card-a">
                <div className="card-b">
                    <ul>
                        <li className="explore-li"><a href="#explore" className="list-item explore" id="exploreBtn">Explore</a></li>
                        <li><a href="#exp-org" className="list-item exp-org" id="expOrgBtn">Experts and Organisations</a></li>
                        <li><a href="#webinars" className="list-item webinars" id="webinarsBtn">Webinars</a></li>
                        <li><a href="#courses" className="list-item courses" id="coursesBtn">Courses</a></li>
                    </ul>
                </div>
            </div>
            {/*-----------------Explore----------------------------------------------*/}
            <div className="explore-content" id="explore">
            <span className="top-img"><img className="explore-img" src="https://www.refier.com/static/media/marketplace_poster.92a68366.svg"/></span>
            <div className="mobile-exp-1">
                <h1 className="explore-heading">Explore Refier Marketplace</h1>
                <p className="explore-para">Boost your career through live Trainings, 
                    Mentoring and Coaching from the Best Subject Matter Experts
                     with handholding journeys, to reflect and act on your learnings</p>
            </div>
            <span className="span-exp-1"><div className="row">
                <div className="explore-left col">
                <img className="dec" src="https://www.refier.com/static/media/Path 3919.8d242670.svg"/>
                <div className="exp-head">
                    <h1 className="explore-heading">Explore Refier Marketplace</h1>
                    <p className="explore-para">Boost your career through live Trainings, 
                    Mentoring and Coaching from the Best Subject Matter Experts
                     with handholding journeys, to reflect and act on your learnings</p>
                </div>
                </div>
                <div className="explore-right col">
                    <img className="explore-img-blue dec" src="https://www.refier.com/static/media/Path 3921.dea0ee54.svg"/>
                    <img className="explore-img dec" src="https://www.refier.com/static/media/marketplace_poster.92a68366.svg"/>
                </div>
            </div>
            <div className="row exp-content">
                <h4 className="col">Explore Exclusive Offers</h4>
                <a className="col" href="#">Explore All Courses</a>
            </div>
            <p className="offer-para">We are adding courses for you...</p>
            <div className="row">
                <h4 className="col">Explore Free Webinars</h4>
                <a className="col" href="#">Explore All Webinars</a>
            </div>
            <p className="offer-para">No upcoming webinars yet</p></span>
            <div className="card-a1">
                <div className="card-b1">
                <div className="row">
                    <div className="col">
                    <h3>Get Free Webinars and Courses Weekly!</h3>
                    <p className="p1">Enter your email address below to receive new free webinars and courses every week.</p>
                    <form className="form-second">
                        <input type="email" placeholder="Your Email Address" className="input-second" />
                        <button className="btn btn-primary text-white submit-second">Get Free Webinars</button>
                    </form>
                    </div>
                    <div className="col">
                    <img src="https://www.refier.com/static/media/newsletter-cta-img.ec17428c.svg" className="mail-img" />
                    </div>
                </div>
                </div>
            </div>
            <div className="row third-head">
                <h4 className="col third-h">Explore Handicrafted Courses</h4>
                <a className="col" href="#">Explore All Courses</a>
            </div>
            <div className="row card-section col-sm-12">
                <div className="col card-r card1 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-08_at_3.12.39_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">.Women Leaders at the Top</a>
                        <p>Women are and would be:"The life of a family"</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                            <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 2000</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card2 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/IMG-20201115-WA0006.jpg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">.Managing Emotions in Covid Times</a>
                        <p>Managing Emotions</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img img-2"/>
                            <div className="col"><p>Arun Chitlangia</p></div>
                            <div className="col"><p>Rs. 1000</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card3 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">.Personal Effictiveness in Current Crisis</a><br/><br/><br/>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 1200</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card4 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-04_at_3.28.14_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">.Virtual Time Management</a><br/><br/><br/><br/>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 1200</p></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            {/*--------------Experts And Organizations---------------------------------- */}
            <div className="exp-org" id="exp-org">
            <h4 className="webinar-head">Training Mentoring and Coaching Organizations</h4>
            <div className="row card-section col-sm-8">
                <div className="col card-r1 card1 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-08_at_3.12.39_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">NEP 2020 on ECCE - Early Childhood Care
                        & Education</a>
                        <p>NEP 2020 on ECCE - Early Childhood Care
                        & Education</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                            <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>FREE</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card2 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/IMG-20201115-WA0006.jpg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">NEP 2020 for Schools</a>
                        <p>Covering Preparatory, Middle & Secondary Stages</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img img-2"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>FREE</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <h4 class="webinar-head2">Training, Mentoring and Coaching Experts</h4>
                <div className="row card-section col-sm-12">
                <div className="col card-r card-rn card1 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                <div className="col card-r card2 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                <div className="col card-r card3 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    {/*------------------------------------------------------- */}
                    <div className="row card-section col-sm-12">
                <div className="col card-r card-rn card1 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                <div className="col card-r card2 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                <div className="col card-r card3 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    {/*----------------------------------------------------------- */}
                    <div className="row card-section col-sm-12">
                <div className="col card-r card-rn card1 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                <div className="col card-r card2 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                <div className="col card-r card3 card clr">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body"> 
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col">
                            <a href="#" className="card-head">Raghuraman J</a>
                            <p>Over <span className="bold">35 years</span> Experience</p>
                            <p>Over <span className="bold">738 trainings</span></p>
                            </div>
                        </div>
                        <div className="hidden">
                        <p>Services offered :<span className="bold"> Coaching, Mentoring, Training</span></p>
                        </div>
                        <button className="btn card-btn1">Productivity Skills</button>
                        <button className="btn card-btn2">Professional Skills</button>
                        <button className="btn btn-primary card-btn btn1" href="#">View Profile</button>
                    </div>
                    </div>
                    </div>
                    </div>
            </div> 
            {/*--------------Webinars-----------------------------------------------------*/}
            <div className="webinars-section" id="webinars">
                <h4 className="webinar-head">Upcoming Free Webinars</h4>
                <div className="row card-section col-sm-12">
                <div className="col card-r1 card1 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-08_at_3.12.39_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">NEP 2020 on ECCE - Early Childhood Care
                        & Education</a>
                        <p>NEP 2020 on ECCE - Early Childhood Care
                        & Education</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                            <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>FREE</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card2 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/IMG-20201115-WA0006.jpg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">NEP 2020 for Schools</a>
                        <p>Covering Preparatory, Middle & Secondary Stages</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img img-2"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>FREE</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card3 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">NEP 2020 on Professional Development of Teachers</a>
                        <p>NEP 2020 on Professional Development of Teachers</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>FREE</p></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h4 class="webinar-head2">Premium Webinars</h4>
            <div className="row card-section col-sm-12">
                <div className="col card-r1 card1 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-08_at_3.12.39_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Beginner's Level Graphology</a>
                        <p>Handwriting analysis, or graphology,
                         is the science involved in producing a personality profile of the writer by</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                            <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Poonam Shetty</p></div>
                            <div className="col"><p>Rs. 500</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card2 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/IMG-20201115-WA0006.jpg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Reaching Potential Recuiters on LinkedIn</a>
                        <p>Student Development Program</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img img-2"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>Rs. 250</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card3 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Putting your Best Foot Forward During Job Interviews</a>
                        <p>Student Development Program</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Ananda Reddy</p></div>
                            <div className="col"><p>Rs. 250</p></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            {/*--------------------------Courses--------------------------------------- */}
        <div class="courses-section" id="courses">
        <h4 class="webinar-head">Refier Courses</h4>
            <div className="row card-section col-sm-12">
                <div className="col card-r1 card1 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-08_at_3.12.39_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Women Leaders at the Top</a>
                        <p>Women are and would be:"The life of a family"</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                            <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 2000</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card2 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/IMG-20201115-WA0006.jpg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Managing Emotions in Covid Times</a>
                        <p>Managing Emotions</p>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img img-2"/>
                            <div className="col"><p>Arun Chitlangia</p></div>
                            <div className="col"><p>Rs. 1000</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card3 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-18_at_1.22.19_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Personal Effictiveness in Current Crisis</a><br/><br/><br/>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 1200</p></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col card-r card4 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-04_at_3.28.14_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Virtual Time Management</a><br/><br/><br/><br/>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 1200</p></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col card-r1 card5 card">
                    <div className="card-c">
                    <div>
                        <img src="https://refiersp1.sgp1.digitaloceanspaces.com/package_poster/WhatsApp_Image_2020-11-04_at_3.28.14_PM.jpeg" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-head">Virtual Time Management</a><br/><br/><br/><br/>
                        <div className="row card-info">
                            <div className="col"><p>November 16, 2020</p></div>
                            <div className="col"><p>05:00 pm</p></div>
                        </div>
                        <button className="btn btn-primary card-btn" href="#">Click to know more</button>
                        <div className="row card-info">
                        <img src={profilePic} className="col profile-img"/>
                            <div className="col"><p>Archana Vijayan</p></div>
                            <div className="col"><p>Rs. 1200</p></div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

window.onload = function() { 
    document.getElementById("exploreBtn").onclick = function() {
        document.getElementById("explore").style.display = "block";
        document.getElementById("exp-org").style.display = "none";
    };

    document.getElementById("webinarsBtn").onclick = function() {
        document.getElementById("webinars").style.display = "block";
        document.getElementById("explore").style.display = "none";
    };

    document.getElementById("coursesBtn").onclick = function() {
        document.getElementById("explore").style.display = "none";
        document.getElementById("courses").style.display = "block";
    };

    document.getElementById("expOrgBtn").onclick = function() {
        document.getElementById("explore").style.display = "none";
        document.getElementById("exp-org").style.display = "block";
        document.getElementById("webinars").style.display = "none";
    };
}

export default Second;