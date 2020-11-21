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
            <div className="" id="webinars">
                <h4 class="webinar-head">Upcoming Free Webinars</h4>
            </div>
            <section></section>
        </div>
    )
}

export default Second;