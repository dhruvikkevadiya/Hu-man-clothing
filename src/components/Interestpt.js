import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Interestpt(props) {
    const data = props.banner;

    const subsidysliderdata = [
        {
            icon: Interestrate,
            heading: "Name of the Scheme",
            description: "Scheme for Capital Subsidy to Large Industries Thrust Sector (Gujarat 2020)"
        },
        {
            icon: icon100,
            heading: "Governed By",
            description: "Industries & Mines Department, Government of Gujarat"
        },
        {
            icon: quickdisbursals,
            heading: "Operative Period",
            description: "From : 07.08.2020 To : 06.08.2025"
        }
    ]
    return (
        <div className='interest-pt-main'>
            <Imageheading banner={data} />
            <div className='interest-pt-content'>
                <h2>Interest & Power Tariff Subsidy</h2>
                <p>Interest and power tariff subsidies are financial incentives provided by governments or organizations to certain groups or industries to promote specific economic or social objectives. These subsidies can take various forms and serve different purposes</p>
            </div>
            <div className="interest-pt-container">
                <div className='row'>
                    {
                        subsidysliderdata && subsidysliderdata.map((value, index) => {
                            return (
                                <div className="col-md-4">
                                    <div className={`main-interest box-${index}`}>
                                        {/* className={'main-interest'+' box-'+ index} */}
                                        <div className='interest-img'>
                                            <img alt='' src={value.icon} />
                                        </div>
                                        <div className='interest-content'>
                                            <h5>{value.heading}</h5>
                                            <h6>{value.description}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <div className="interest-pt-container intrest-pt-1">
                    <div className="intrest-pt-contents">
                        <div className="intrest-pt-heading">
                            <ul>
                                <li>
                                    Who will be eligible?
                                </li>
                            </ul>
                        </div>

                        <div className="intrest-pt-sub-heading">
                            <ul>
                                <li>
                                    Units located in Special Economic Zone is not eligible in this scheme.
                                </li>
                                <li>
                                    Any New or Existing enterprise who is engaged in eligible textile product manufacturing activity as mentioned above and filed a separate Industrial Entrepreneur Memorandum (IEM) or Udyog Aadhar Memorandum (UAM) with the competent authority.
                                </li>
                                <li>
                                    Enterprise which has obtained first disbursement & started its commercial production during the operative period of the scheme will eligible for the assistance.
                                </li>
                                <li>
                                    Only three expansion including one Forward / Backward Integration during operative period is eligible to existing unit set up during operative period of the scheme.
                                </li>
                                <li>
                                    An existing enterprise that sets up a new independent project of eligible activities, with separately identifiable fixed capital investment, will be treated as New Unit under this policy.
                                </li>
                            </ul>
                        </div>

                        <div className="intrest-pt-heading">
                            <ul>
                                <li>
                                    Assistance Available
                                </li>
                            </ul>
                        </div>


                        <div className="intrest-pt-sub-heading">
                            <table className='intrest-pt-table'>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Category of Enterprise</th>
                                    <th>No. of Employee</th>
                                    <th>Interest Subsidy</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>MSME</td>
                                    <td>Providing Direct Employment up to 100 persons</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td rowspan="3">2.</td>
                                    <td rowspan="3">Large</td>
                                    <td>Providing Direct Employment to more than 100 and up to 200 persons</td>
                                    <td>4%</td>
                                </tr>
                                <tr>
                                    <td>Providing Direct Employment to more than 200 and up to 500 persons</td>
                                    <td>4.50%</td>
                                </tr>
                                <tr>
                                    <td>Providing Direct Employment to more than 500 persons</td>
                                    <td>6%</td>
                                </tr>

                            </table>
                        </div>
                        <div className="intrest-pt-sub-heading">
                            <ul>
                                <li>
                                    Interest Subsidy will be available for the period of 5 years.
                                </li>
                                <li>
                                    Along with Interest Subsidy unit can also avail Power Tariff Subsidy Benefit @ Rs. 3 per unit or Rs. 2 per Unit for Period of 5 years.
                                </li>
                            </ul>
                        </div>


                        <div className="intrest-pt-heading">
                            <ul>
                                <li>
                                    Basic Conditions of Scheme
                                </li>
                            </ul>
                        </div>

                        <div className="intrest-pt-sub-heading">
                            <ul>
                                <li>
                                    Term Loan is Compulsory.
                                </li>
                                <li>
                                    The promoter’s contribution is must be 15% but not more than 50%.
                                </li>
                                <li>
                                    Unit must have to apply within 6 months from term loan sanction date for avail the subsidy benefits.
                                </li>
                                <li>
                                    Machine manufacturer must be registered with Ministry of Textiles.
                                </li>
                                <li>
                                    Make and year of manufacture & MIC Code Number should be clearly indicated on machine.
                                </li>
                                <li>
                                    Machine Serial Number should be mentioned in Invoice.
                                </li>
                                <li>
                                    If unit is existing and subsidy taken in past in the said scheme then he will be eligible for balance subsidy amount only as specified limit in above table.
                                </li>
                                <li>
                                    Term Loan period should not be for less than 3 years including moratorium period for Micro, Small and Medium units and not less than 5 years for other Categories.
                                </li>
                                <li className='last'>
                                    Unit must have to make digital signature for applying in ATUF scheme.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>










        </div>
    )
}
