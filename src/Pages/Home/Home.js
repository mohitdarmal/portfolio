import React, {useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ImagePath from "../../Constant/ImagePath"
import SocialMedia from "../../Component/SocialMedia";
import ScrollDown from "../../Component/Utils/ScrollDown";
import ActionButton from "../../Component/Utils/Button";
import Heading from "../../Component/Utils/Heading";
import SubHeading from "../../Component/Utils/SubHeading";
import NavigationStrings from "../../Constant/NavigationStrings";
import SkillsModal from "../../Component/Modal";
import Education from "../../Component/Education";
import Experience from "../../Component/Experience";
import "./Home.css"


const Home = () => {

    const AboutMe = useRef(null);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalData, setModalData] = useState({});

    const scrollToSection = () => {
        AboutMe.current?.scrollIntoView({behavior:'smooth'})    
    }

    const showPopupNodal = (heading) => {        
            setModalShow(true)
            setModalData({
                heading : heading
            })            
    }

    return(
        <>
          {/* START BANNER */}
                <div className="container home_about_section">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <div className="home_social_icon">
                                    <SocialMedia />
                                </div>
                            </div>

                            <div className="col-md-5 home_about_me_detail">
                                <h2>Mohit Darmal ✋</h2>
                                <p className="home_about_me_role">Front End Developer</p>
                                <p className="home_about_me">I am a creative designer and i'm very passionate and dedicated to my work.</p>                                                 
                                <ActionButton buttonName="Say Hello" buttonHover="btn_hover1 mb-4" iconName="bx bx-paper-plane" linkUrl={NavigationStrings.CONTACT} />                  
                            </div>

                            <div className="col-md-5 text-center">
                                <img width="330" className="img_liquid_animation" src={ImagePath.PROFILE_PIC} alt="Profile Pic" />
                            </div>
                        </div>
                </div>
         {/* END BANNER */}


        {/* START SCROLL DOWN */}
           <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-5">
                <div onClick={scrollToSection}>
                    <ScrollDown  />
                    </div>
                </div>
            </div>
           </div>
        {/* END SCROLL DOWN */}


        {/* START ABOUT ME */}
            <div className="container section_padding_top section_padding_bottom" ref={AboutMe}>
                <div className="row text-center pb-5">
                    <Heading heading="About Me"/>
                    <SubHeading subHeading="My Introduction"/>
                </div>

                <div className="row">
                    <div className="col-md-5 mb-5 ipad_none">
                        <img  className="rounded-5 img-fluid" alt="Profile Pic" src={ImagePath.PROFILE_PIC}/>
                    </div>

                    <div className="col-md-6 offset-md-1 about_sec">
                        <div className="d-md-flex about_exp_box">
                            <div className="about_me_box">
                                <i className="uil uil-award-alt"></i>
                                <h5>Experience</h5>
                                <small>6+ years</small>
                            </div>

                            <div className="about_me_box">
                                <i className="uil uil-briefcase-alt"></i>
                                <h5>Completed</h5>
                                <small>150+ Projects</small>
                            </div>

                            <div className="about_me_box">
                                <i className="uil uil-award-alt"></i>
                                <h5>Support</h5>
                                <small>Onlien 24/7</small>
                            </div>

                            <div>
                                
                            </div>
                        </div>


                        <p className="about_desc">Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out. I worked on Reactjs, React Native, Vuejs, Figma, Storeconnect, Photoshop, Bootstrap 5, Wordpress, Shopify, Webflow.</p>
                        <a className="btn_hover1 mb-4" href={ImagePath.RESUME} download={ImagePath.RESUME}> Download CV <i className="uil uil-file-alt" ></i></a>
                    </div>
                </div>
            </div>
        {/* END ABOUT ME */}


        {/* START SKILLS */}
            <div className="container section_padding_bottom skills_sec">
                <div className="row text-center pb-5">
                    <Heading heading="Skills"/>
                    <SubHeading subHeading="My Intrtechnical level"/>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className="uil uil-react"></i>
                            <h4>Reactjs</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Reactjs')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                        <i className="uil uil-vuejs"></i>
                            <h4>Vuejs</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Vuejs')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                        <i className="uil uil-mobile-android-alt"></i>
                            <h4>React Native</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('React Native')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>                    
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className="uil uil-store"></i>
                            <h4>Storeconnect</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Storeconnect')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className='bx bxl-figma'></i>
                            <h4>Figma</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Figma')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className='bx'>PS</i>
                            <h4>Photoshop</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Photoshop')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className='bx bxl-bootstrap'></i>
                            <h4>Bootstrap 5</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Bootstrap 5')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className="uil uil-wordpress"></i>
                            <h4>Wordpress</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Wordpress')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className="uil uil-shopping-bag"></i>
                            <h4>Shopify</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Shopify')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="skills_box">
                            <i className='bx'>W</i>
                            <h4>Webflow</h4>
                            <small>(Intermediate)</small>
                            <NavLink onClick={() => showPopupNodal('Webflow')}>View More <i className='bx bx-right-arrow'></i></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        {/* END SKILLS */}



        {/* START SERVICES */}
        <div className="container section_padding_bottom skills_sec">
            <div className="row text-center pb-5">
                <Heading heading="Services"/>
                <SubHeading subHeading="What i Offer"/>
            </div>

            <div className="row">
              <div className="col-md-1"></div>
              <div className="col">
                <div className="service_box">
                    <i className='bx bx-layout' ></i>
                    <h3>Web <br/> Designer</h3>
                    <NavLink to="">View More <i className="bx bx-right-arrow"></i></NavLink>
                </div>
              </div>

              <div className="col">
                <div className="service_box">
                    <i className='bx bx-code-alt'></i>
                    <h3>UI/UX <br/> Designer</h3>
                    <NavLink to="">View More <i className="bx bx-right-arrow"></i></NavLink>
                </div>
              </div>

              <div className="col">
                <div className="service_box">
                    <i className='bx bx-edit' ></i>
                    <h3>Branding <br/> Designer</h3>
                    <NavLink to="">View More <i className="bx bx-right-arrow"></i></NavLink>
                </div>
              </div>

              <div className="col d-md-none mobile-landscape-none">
                <div className="service_box">
                    <i className="uil uil-brackets-curly"></i>
                    <h3>Software <br/> Development</h3>
                    <NavLink to="">View More <i className="bx bx-right-arrow"></i></NavLink>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
        </div>
        {/* END SERVICES */}

        
        {/* START QUALIFICATION */}
        <div className="container qualifiaction-sec section_padding_bottom">

            <div className="row text-center pb-5">
                <Heading heading="Qualification"/>
                <SubHeading subHeading="My Journey"/>
            </div>

            <div className="row">
                <div className="col"></div>
                    <div className="col-4 qualification_col">
                    {/* Heading */}
                        <div className="d-flex qualification_heading justify-content-center">
                            <p><i className="uil uil-graduation-cap"></i>&nbsp; Education </p>
                            <p><i className='bx bx-briefcase' ></i>&nbsp; Experience </p>
                        </div>     
                    {/* Heading */}

                    {/* Content */} 

                        {/* Education */}  
                            <Education school="High School" board="CBSE" year="2011-2012" />                 
                        {/* Education */}  

                        {/* Experience */}
                        <Experience companyName="Panalink Infotech Pvt Ltd." designation="Front End Developer" year="2020-Current" />                  
                        {/* Experience */}

                        {/* Education */}  
                            <Education school="Intermediate School" board="CBSE (Commerce)" year="2013-2014" />                    
                        {/* Education */} 

                        {/* Experience */}
                            <Experience companyName="Webic Studio Pvt Ltd." designation="Web Designer" year="2019-2020" />
                        {/* Experience */}

                        {/* Education */}  
                            <Education school="Graduation" board="Delhi University (B.COM)" year="2014-2018" />
                        {/* Education */} 

                        {/* Experience */}
                        <Experience companyName="Vegamoon Technology Pvt Ltd." designation="Web Designer" year="2017-2019" /> 
                        {/* Experience */}

                        {/* Education */}  
                            <Education school="Post Graduation" board="IGNOU (MCA)" year="Pursuing" />                    
                        {/* Education */} 

                    {/* Content */}   
                    </div>
                 <div className="col"></div>
            </div>
        </div>

        {/* END QUALIFICATION */}


        {/* START PORTFOLIO */}
        <div className="container">
            <div className="row text-center pb-5">
                <Heading heading="Portfolio"/>
                <SubHeading subHeading="Most Recent Work"/>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col">
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        >
                        <Tab eventKey="home" title="Home">
                            sfasf
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            sfasf
                        </Tab>
                        <Tab eventKey="longer-tab" title="Loooonger Tab">
                            sfasf
                        </Tab>
                    </Tabs>
                </div>

                <div className="col-md-1"></div>
            </div>
        </div>
        {/* END PORTFOLIO */}


        {/* START SKILL MODEL */}
            <SkillsModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                popupheading={modalData.heading}
            />
        {/* END SKILL MODEL */}

        </>
    )
}

export default Home;