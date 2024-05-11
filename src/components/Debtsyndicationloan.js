import React from 'react';
import Imageheading from "./loans/Imageheading";
import fund from "../assets/images/fund.png";
import Structured from "../assets/images/Structured.png";
import nonfund from "../assets/images/non-fund.png";
import External from "../assets/images/external.png"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Debtsyndicationloan(props) {
    const data = props.banner;

    const Benefitsinsurancedata = [
        {
            img: fund,
            heading: "Fund Based Solutions",
            list: [
                "Real Estate & Infrastructure",
                "Corporate Finance",
                "Working Capital Facilities",
                "MSME Loan",
                "Equipment Loan"
            ],
        },
        {
            img: Structured,
            heading: "Structured Solutions",
            list: [
                "Promoters Funding",
                "Corporate Debt Restructuring",
                "Bridge Financing",
                "Factoring",
                "Lease Rental Discounting",
                "Bill Discounting",
                "OTS Services"
            ],
        },
        {
            img: nonfund,
            heading: "Non-Fund Based Solutions",
            list: [
                "Letter of Credit",
                "Standby Letter of Credit",
                "Buyers Credit",
                "Bank Guarantee"
            ],
        },
        {
            img: External,
            heading: "External Commercial Borrowings",
            list: [
                "Commercial Loan",
                "Foreign Currency Term loan",
                "Foreign Currency Convertible Bond",
                "Suppliers Credit",
                "Masala Bonds"
            ],
        },
    ];

    return (
        <div className='debtdebt-syndication-page'>
            <Imageheading banner={data} />

            <section className='debtdebt-syndication-section'>
                <h3 className='heading'>Benefits of Buying Insurance</h3>
                <p className='description'>
                    Purchasing an insurance policy has numerous benefits for the individual.
                    It provides a cover against unforeseen financial losses and helps create
                    a fund for life after superannuation. Given below are some of the other
                    benefits of an insurance policy:
                </p>
                <div className='benefits-boxes'>
                    { Benefitsinsurancedata && Benefitsinsurancedata.map((value, index) => {
                            return (
                                <div className={`box-content box-${index}`} key={index}>
                                    <div className='box-img'>
                                        <img src={value.img} alt='' />
                                    </div>
                                    <h5 className='box-heading'>{value.heading}</h5>
                                    <ul className='box-description'>
                                        {value.list &&
                                            value.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                    </ul>
                                    <Link to='/allform' onClick={() => { window.location.href = "/allform"; }}><Button className='btn'>Apply Now</Button></Link>
                                </div>
                            );
                        })}
                </div>
            </section>
        </div>
    );
}
