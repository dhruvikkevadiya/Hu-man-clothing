import React, { useState } from 'react'
import Mainlogo from "../assets/images/main-logo.png"
import Downarrow from "../assets/images/arrow-down-sign-to-navigate.png"
import Rightarrow from "../assets/images/right-arrow-1.png"
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
        setActive1("false");
        setActive2("false");
        setActive3("false");
        setActive4("false");
        setActive5("false");
    };

    const [isActive1, setActive1] = useState("false");
    const handleToggle1 = () => {
        setActive("false");
        setActive1(!isActive1);
        setActive2("false");
        setActive3("false");
        setActive5("false");
    };

    const [isActive2, setActive2] = useState("false");
    const handleToggle2 = () => {
        setActive("false");
        setActive1("false");
        setActive2(!isActive2);
        setActive3("false");
        setActive4("false");
        setActive5("false");
    };

    const [isActive3, setActive3] = useState("false");
    const handleToggle3 = () => {
        setActive("false");
        setActive1("false");
        setActive2("false");
        setActive3(!isActive3);
        setActive4("false");
        setActive5("false");

    };

    const [isActive4, setActive4] = useState("false");
    const handleToggle4 = () => {
        setActive4(!isActive4);
    };
    const [isActive5, setActive5] = useState("false");
    const handleToggle5 = () => {
        setActive5(!isActive5);
        setActive6("false");
        setActive7("false");

    };


    const [isActive6, setActive6] = useState("false");
    const handleToggle6 = () => {
        setActive5("false");
        setActive7("false");
        setActive6(!isActive6);
    };

    const [isActive7, setActive7] = useState("false");
    const handleToggle7 = () => {

        setActive6("false");
        setActive7(!isActive7);
    };

    return (
        <div className='header-section' id='headerSection'>
            <Navbar expand="lg" >
                <Navbar.Brand className='d-flex'>
                    <Link to="/" onClick={() => { window.location.href = "/"; }}>
                        <img src={Mainlogo} alt='' />
                    </Link>
                    <h6 className='brand-name'>Bhimani <br /> Advisors</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className='header-menu-btns'>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav navbarScroll>
                            <Nav.Link href=''>
                                <Link to="/" onClick={() => { window.location.href = "/"; }}>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/loans" onClick={() => { window.location.href = "/loans"; }}>Loans</Link>
                                <span className='arrow-icon' onClick={handleToggle}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>

                                    <li>
                                        <Link to="/debtsyndication-loan" onClick={() => { window.location.href = "/debtsyndication-loan"; }}>DEBT Syndication Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/business-loan" onClick={() => { window.location.href = "/business-loan"; }}>Business Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/personal-loan" onClick={() => { window.location.href = "/personal-loan"; }}>Personal Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/student-loan" onClick={() => { window.location.href = "/student-loan"; }}>Student Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/car-loan" onClick={() => { window.location.href = "/car-loan"; }}>Car Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/gold-loan" onClick={() => { window.location.href = "/gold-loan"; }}>Gold Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/commercial-loan" onClick={() => { window.location.href = "/commercial-loan"; }}>Commercial Vehicle Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/two-wheeler-loan" onClick={() => { window.location.href = "/two-wheeler-loan"; }}>Two Wheeler Loan</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive1 ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/insurance" onClick={() => { window.location.href = "/insurance"; }}>Insurance</Link>
                                <span className='arrow-icon' onClick={handleToggle1}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Nav.Link href="" className="dropdown-list-2">
                                            <Link to="/goverment-policy" onClick={() => { window.location.href = "/goverment-policy"; }}>State Goverment</Link>
                                            <span className='arrow-icon-2' onClick={handleToggle4}><img src={Rightarrow} alt='' /></span>
                                            <ul className={!isActive4 ? "dropdown-2 show-2" : "dropdown-2"}>
                                                <li>
                                                    <Nav.Link href="" className="dropdown-list-3">
                                                        <Link to="/maharashtrastate-textile" onClick={() => { window.location.href = "/maharashtrastate-textile"; }}>Maharashtra State Textile Policy
                                                            (MSP)</Link>
                                                        <span className='arrow-icon-3' onClick={handleToggle5}><img src={Rightarrow} alt='' /></span>
                                                        <ul className={!isActive5 ? "dropdown-3 show-3" : "dropdown-3"}>
                                                            <li>
                                                                <Link to="/plug-play-systems" onClick={() => { window.location.href = "/plug-play-systems"; }}>Plug & system & Dornitories</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/skill-development" onClick={() => { window.location.href = "/skill-development"; }}>Skill Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/mega-apparel-park" onClick={() => { window.location.href = "/mega-apparel-park"; }}>Mega Apparel Park</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/gujarat-industrial-policy" onClick={() => { window.location.href = "/gujarat-industrial-policy"; }}>Gujarati Industrial Policy</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/tariff-payroll" onClick={() => { window.location.href = "/tariff-payroll"; }}>int PT & Payroll</Link>
                                                            </li>
                                                        </ul>
                                                    </Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link href="" className="dropdown-list-4">
                                                        <Link to="/gujarat-industrial-policy" onClick={() => { window.location.href = "/gujarat-industrial-policy"; }}>Gujarat Industrial Policy-MSME</Link>
                                                        <span className='arrow-icon-4' onClick={handleToggle6}><img src={Rightarrow} alt='' /></span>
                                                        <ul className={!isActive6 ? "dropdown-4 show-4" : "dropdown-4"}>

                                                            <li>
                                                                <Link to="/babasahab-yojana" onClick={() => { window.location.href = "/babasahab-yojana"; }}>Dr. Babasahab Ambedkar Udyog Uday Yojana</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/medium-enterprises" onClick={() => { window.location.href = "/medium-enterprises"; }}>Assistance to Micro, Small and Medium Enterprises (MSME)</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/market-development" onClick={() => { window.location.href = "/market-development"; }}>Market Development Assistance to MSMEs</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/mses-developer" onClick={() => { window.location.href = "/mses-developer"; }}>Scheme of Assistance to MSEs for Shed Developed by Private Developer</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/assistance-environment" onClick={() => { window.location.href = "/assistance-environment"; }}>Assistance for Environment Protection Measures</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/development-activities" onClick={() => { window.location.href = "/development-activities"; }}>Assistance for Research & Development Activities</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/logistic-parks" onClick={() => { window.location.href = "/logistic-parks"; }}>Assistance to Logistic Parks</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/environment-infrastructure" onClick={() => { window.location.href = "/environment-infrastructure"; }}>Assistance for Common Environment Infrastructure</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/capital-subsidy" onClick={() => { window.location.href = "/capital-subsidy"; }}>Capital Subsidy to Large Industries and Thrust Sector</Link>
                                                            </li>
                                                        </ul>

                                                    </Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link href="" className="dropdown-list-5">
                                                        <Link to="/textile-policy" onClick={() => { window.location.href = "/textile-policy"; }}>Textile Policy</Link>
                                                        <span className='arrow-icon-5' onClick={handleToggle7}><img src={Rightarrow} alt='' /></span>
                                                        <ul className={!isActive7 ? "dropdown-5 show-5" : "dropdown-5"}>
                                                            <li>
                                                                <Link to="/interest-pt" onClick={() => { window.location.href = "/"; }}>Interest & PT (SSSTVC)</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/textile-policy" onClick={() => { window.location.href = "/textile-policy"; }}>Textile Park (SSSTVC)</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/technology-acquisition" onClick={() => { window.location.href = "/technology-acquisition"; }}>Technology Acquisition and Upgradation (SSSTVC)</Link>
                                                            </li>
                                                        </ul>

                                                    </Nav.Link>
                                                </li>
                                            </ul>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Link to="/car-insurance" onClick={() => { window.location.href = "/car-insurance"; }}>Car Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/car-insurance" onClick={() => { window.location.href = "/car-insurance"; }}>Health Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/bike-insurance" onClick={() => { window.location.href = "/bike-insurance"; }}>Bike Insurace</Link>
                                    </li>
                                    <li>
                                        <Link to="/life-insurance" onClick={() => { window.location.href = "/life-insurance"; }}>Life Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/fire-insurance" onClick={() => { window.location.href = "/fire-insurance"; }}>Fire Insurance</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive2 ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/tax-consultant" onClick={() => { window.location.href = "/tax-consultant "; }} >Tax consultant</Link>
                                <span className='arrow-icon' onClick={handleToggle2}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Link to="/gst-return" onClick={() => { window.location.href = "/gst-return"; }}>Gst Return</Link>
                                    </li>
                                    <li>
                                        <Link to="/income-tax" onClick={() => { window.location.href = "/income-tax"; }}>Income Tax Return</Link>
                                    </li>
                                    <li>
                                        <Link to="/pan-card" onClick={() => { window.location.href = "/pan-card"; }}>Pan Card</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive3 ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/subsidy" onClick={() => { window.location.href = "/subsidy"; }}>Subsidy</Link>
                                <span className='arrow-icon' onClick={handleToggle3}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Link to="/mysy" onClick={() => { window.location.href = "/mysy"; }}>Mukhymantri Yuva Swavalamban Yojana Or MYSY Scholarship</Link>
                                    </li>
                                    <li>
                                        <Link to="/ntse" onClick={() => { window.location.href = "/ntse"; }}>National Talent Search Exam (NTSE)</Link>
                                    </li>
                                    <li>
                                        <Link to="/digital-gujarat" onClick={() => { window.location.href = "/digital-gujarat"; }}>Digital Gujarat Scholarship</Link>
                                    </li>
                                    <li>
                                        <Link to="/tuition-coaching" onClick={() => { window.location.href = "/tuition-coaching"; }}>Tuition And Coaching Sahay Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/nsp" onClick={() => { window.location.href = "/nsp"; }}>National Scholarship Portal (NSP)</Link>
                                    </li>
                                    <li>
                                        <Link to="/rte" onClick={() => { window.location.href = "/rte"; }}>Right To Education (RTE)</Link>
                                    </li>
                                    <li>
                                        <Link to="/admission" onClick={() => { window.location.href = "/admission"; }}>College/Job Admission From</Link>
                                    </li>
                                    <li>
                                        <Link to="/kuvarbai" onClick={() => { window.location.href = "/kuvarbai"; }}>Kuvarbai Mameru Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/vahli-dikri" onClick={() => { window.location.href = "/vahli-dikri"; }}>Vahli Dikri Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/vidhva-sahay" onClick={() => { window.location.href = "/vidhva-sahay"; }}>Vidhva Sahay Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/atal-pansion" onClick={() => { window.location.href = "/atal-pansion"; }}>Atal Pension Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/sukanya-samriddhi" onClick={() => { window.location.href = "/sukanya-samriddhi"; }}>Sukanya Samriddhi Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/divyang-lagn" onClick={() => { window.location.href = "/divyang-lagn"; }}>Divyang Lagn Sahay Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/jawahar-navodaya" onClick={() => { window.location.href = "/jawahar-navodaya"; }}>Jawahar Navodaya Vidyalaya</Link>
                                    </li>
                                    <li>
                                        <Link to="/manav-garima" onClick={() => { window.location.href = "/manav-garima"; }}>Manav Garima Yojana</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="">
                                <Link to="/testimonials" onClick={() => { window.location.href = "/testimonials"; }}>Testimonial</Link>
                            </Nav.Link>
                            <Nav.Link href="">
                                <Link to="/contact" onClick={() => { window.location.href = "/contact"; }}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><Button variant="outline-success" className='appointment-btn'>Appointment<span className='arrow'><i class="fa-solid fa-arrow-right"></i></span></Button></Link>
                </div>

            </Navbar>
        </div>
    )
}