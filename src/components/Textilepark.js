import React from 'react'
import Imageheading from "../components/loans/Imageheading"
import Insurancedropdownpage from './Insurance/Insurancedropdownpage';

export default function Textilepark(props) {

    const data = props.banner;
    const content = props.content;
    const contentlist3 = content.list3;
    return (
        <>
            <Imageheading banner={data} />
            <Insurancedropdownpage content={content} />
            <div className='Tariff-payroll-main'>
                <div className="eligible-section-1 Tariff-payroll-container mega-apprelpark">
                    <div className="Tariff-payroll-contents">
                        <div className="content-heading">
                            <ul>
                                <li>{content.heading3}</li>
                            </ul>
                        </div>
                        <div className="tariff-payroll-content">
                            <ul>
                                {
                                    contentlist3 && contentlist3.map((value, index) => {
                                        return (
                                            <li key={index}>{value.listcontent3}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
