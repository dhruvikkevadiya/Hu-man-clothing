import React from 'react'
import Imageheading from "./loans/Imageheading"
import Slider from "react-slick";
import Technicalinstitutionicon from "../assets/images/g-1.png"
import Institutionnationalicon from "../assets/images/g-2.png"
import Accreditedinstitutionicon from "../assets/images/g-3.png"
import Nbacoursesicon from "../assets/images/g-4.png"

export default function Govermentpolicy(props) {
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
            icon: Technicalinstitutionicon,
            heading: "Int PT & Payroll (Garment Policy)",
            description: "The name of the scheme is “Interest, Power Tariff & Payroll Assistance (Gujarat Garment & Apparel Policy – 2017)” and is …"
        },
        {
            icon: Institutionnationalicon,
            heading: "Plug & Play Systems & Dormitories",
            description: "The name of the scheme is “Plug and Play Systems for Apparel Manufacturing…"
        },
        {
            icon: Accreditedinstitutionicon,
            heading: "Skill Development (Garment Policy)",
            description: "The name of the scheme is “Support for Establishing Mega Apparel Park. (Gujarat Garment & Apparel Policy – 2017)” and is conducted by Industry…"
        },
        {
            icon: Nbacoursesicon,
            heading: "Mega Apparel Park (Garment Policy)",
            description: "The name of the scheme is “Support for Establishing Mega Apparel Park. (Gujarat Garment & Apparel Policy – 2017)” and is conducted by Industry…"
        }
    ]
    return (
        <div className='goverment-policy-page'>
            <Imageheading banner={data} />
            <section className='goverment-policy-section'>
                <h1 className='heading'>State Government Policy</h1>
                <p className='description'>The policy usually includes general guidelines for appropriate attire, such as dressing professionally, neatly, and in a manner that reflects positively on the organization.</p>
               
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
