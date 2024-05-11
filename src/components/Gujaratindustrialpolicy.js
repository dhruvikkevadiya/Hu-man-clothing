import React from 'react'
import Imageheading from "./loans/Imageheading"
import Msme1 from '../assets/images/msme-1.png'
import Msme2 from '../assets/images/msme-2.png'
import Msme3 from '../assets/images/msme-3.png'
import Msme4 from '../assets/images/msme-4.png'
import Msme5 from '../assets/images/msme-5.png'
import Msme6 from '../assets/images/msme-6.png'
import Msme7 from '../assets/images/msme-7.png'
import Msme8 from '../assets/images/msme-8.png'

export default function Gujaratindustrialpolicy(props) {

    const data = props.banner;

    const industrialdata = [
        {
            img: Msme1,
            heading: "Dr. Babasahab Ambedkar Udyog Uday Yojana",
            description: "The name of the scheme is “Dr. Babasahab Ambedkar Udyog Uday Yojana As of my last knowledge update (Gujarat Industrial Policy 2020)” and is conducted by Industries & Mines Department…"
        },
        {
            img: Msme2,
            heading: "Assistance to Micro, Small and Medium Enterprises (MSME)",
            description: "MSMEs play a significant role in generating employment, promoting innovation, and fostering economic growth. MSMEs play a significant..."
        },
        {
            img: Msme3,
            heading: "Market Development Assistance to MSMEs",
            description: "The scheme name is Market Development Assistance to MSMEs (Gujarat Industrial Policy 2020) and conducted by Industries & Mines Department…"
        },
        {
            img: Msme4,
            heading: "Scheme of Assistance to MSEs for Shed Developed by Private Developer",
            description: "As of my last knowledge update in September 2023, scheme in India called the 'Scheme of Assistance to MSEs for Shed Developed by Private Developer.'"
        },
        {
            img: Msme5,
            heading: "Assistance for Environment Protection Measures",
            description: "Assistance for Environment Protection Measures can take various forms and may be agencies, international organizations, non-governmental organizations (NGOs), or private sector initiatives."
        },
        {
            img: Msme6,
            heading: "Assistance for Research & Development Activities",
            description: "Certainly, I can provide assistance and information related to Research & Development (R&D) activities. R&D is a critical aspect of innovation and progress in various fields, including science, technology, and business. "
        },
        {
            img: Msme7,
            heading: "Assistance for Common Environment Infrastructure",
            description: "Certainly, I can provide you with assistance related to common environment infrastructure. Common environment infrastructure typically refers to the foundational resources and components"
        },
        {
            img: Msme8,
            heading: "Capital Subsidy to Large Industries and Thrust Sector",
            description: "Capital subsidy to large industries and thrust sectors is a government policy or incentive program aimed at promoting and supporting the growth..."
        }
    ]

    return (
        <div className='gujarat-industrial-policy-page'>
            <Imageheading banner={data} />
            <section className='gujarat-industrial-policy-section'>
                <h3 className='heading'>Gujarat Industrial Policy – MSME</h3>
                <p className='description'>Skill development refers to the process of acquiring and improving a specific set of abilities or expertise in a particular area. These skills can be related to various aspects of life, including personal, professional, and academic domains. Skill development is essential for personal growth, career advancement, and achieving one's goals.</p>
                <div className='policy-boxes'>
                    {
                        industrialdata && industrialdata.map((value, index) => {
                            return (
                                <div className={`box-content box-${index}`}>
                                    {/* className={'box-content' + ' box-' + index} */}
                                    <div className='box-img'>
                                        <img src={value.img} alt='' />
                                    </div>
                                    <h5 className='box-heading'>{value.heading}</h5>
                                    <p className='box-description'>{value.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
