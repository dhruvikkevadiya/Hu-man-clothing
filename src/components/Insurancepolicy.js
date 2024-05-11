import React from 'react'
import Imageheading from "./loans/Imageheading"
import Gujarat from "../assets/images/Gujrat.png"
import maharashtra from "../assets/images/maharashtra.png"

export default function Insurancepolicy(props) {
    const data = props.banner;

    return (
        <div className='insurance-policy-page'>
            <Imageheading banner={data} />
            <section className='insurance-policy-section'>
                <h1 className='heading'>State Government Policy</h1>
                <p className='description'>The State Government may, subject to the condition of previous publication, by notification, make rules for carrying out the provisions of this Act, not later than six months from the date of commencement of this Act. In particular, and without prejudice to the generality of foregoing powers, such rules may provide for all or any of the following matters, namely</p>
                <div className='insurance-box'>
                    <div className='box'>
                        <div className='box-img'>
                            <img src={Gujarat} alt='' />
                        </div>
                        <h4 className='box-heading'>Gujarat</h4>
                        <p className='box-description'>Being a leading government benefit provider in Gujarat, we can help you get the maximum benefit for your project. Gujarat government provides various benefits too many types of projects. To know more, contact us and our experts will assist you.</p>
                    </div>
                    <div className='box'>
                        <div className='box-img'>
                            <img src={maharashtra}  alt='' />
                        </div>
                        <h4 className='box-heading'>Maharashtra</h4>
                        <p className='box-description'>Maharashtra government provides various benefits for your projects. Being experts and specialised in this profession, we can help you get the maximum benefits for your project To know more and avail maximum benefits contact us and our experts will assist you.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
