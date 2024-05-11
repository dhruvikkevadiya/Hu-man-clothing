import React from 'react'
import Imageheading from "./loans/Imageheading"
import Slider from "react-slick";
import t1 from "../assets/images/t-1.png"
import t2 from "../assets/images/t-2.png"
import t3 from "../assets/images/t-3.png"

export default function Textilepolicy(props) {
    const data = props.banner;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const subsidysliderdata = [
        {
            icon: t1,
            heading: "Interest & PT (SSSTVC)",
            description: "The name of the scheme is “Interest, Power Tariff & Payroll Assistance (Gujarat Garment & Apparel Policy – 2017)” and is …    "
        },
        {
            icon: t2,
            heading: "Textile Park (SSSTVC)",
            description: "The name of the scheme is “Plug and Play Systems for Apparel Manufacturing…"
        },
        {
            icon: t3,
            heading: "Technology Acquisition  Upgradation (SSSTVC)",
            description: "The name of the scheme is “Support for Establishing Mega Apparel Park. (Gujarat Garment & Apparel Policy – 2017)” and is conducted by Industry…"
        }
    ]
    return (
        <div className='textile-policy-page'>
            <Imageheading banner={data} />
            <section className='textile-policy-section'>
                <h1 className='heading'>Textile Policy</h1>
                <p className='description'>A textile policy is a government or industry-specific document that outlines the strategies, objectives, and regulations related to the textile sector within a particular region or country. These policies are developed to promote and regulate the textile industry,</p>
               
                <Slider {...settings}>
                    {
                        subsidysliderdata && subsidysliderdata.map((value, index) => {
                            return (
                                <div className='insurance-box'>
                                <div className={'box box-' + index}>
                                        <div className='box-img'>
                                            <img src={value.icon} alt='' />
                                        </div>
                                        <h4 className='box-heading'>{value.heading}</h4>
                                        <p className='box-description'>{value.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </section>
        </div>
    )
}
