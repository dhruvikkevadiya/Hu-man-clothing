import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Environmentinfrastructure(props) {
    const data = props.banner;

    const Tariffpayrolldata = [
        {
            icon: Interestrate,
            heading: "Name of the Scheme",
            description: "Scheme of Assistance for Research & Development Activities (Gujarat 2020)"
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
        <div className='environment-infrastructure-main'>
            <Imageheading banner={data} />
            <div className='environment-infrastructure-content'>
                <h2>Assistance for Common Environment Infrastructure</h2>
                <p>As of my last knowledge update in September 2021, there is no specific "Scheme for Assistance to Logistic Parks" mentioned in Indian government policies or programs. However, the Indian government has launched various schemes and initiatives to promote logistics and warehousing infrastructure in the country.</p>
            </div>
            <div className="environment-infrastructure-container">
                <div className='row'>
                    {
                        Tariffpayrolldata && Tariffpayrolldata.map((value, index) => {
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
                <div className="environment-infrastructure-container assistance-environment-1">
                    <div className="assistance-environment-contents">
                        <div className="assistance-heading">
                            <ul>
                                <li>
                                    Who will be eligible?
                                </li>
                            </ul>
                        </div>
                        <div className="assistance-sub-heading">
                            <ul>
                                <li>
                                    Any industries association / any enterprise (except for captive use) or firm which is registered under Societies Act, Trust Act or under the Companies Act, or GIDC / Board / Corporation / Nagarpalika / Urban Development Authority etc.
                                </li>
                            </ul>
                        </div>
                        <div className="assistance-heading">
                            <ul>
                                <li>
                                    Scheme for assistance to encouraging “Green practices and environmental audit to MSMEs
                                </li>
                            </ul>
                        </div>

                        <div className="assistance-sub-heading-1">
                            <table className='assistance-table'>
                                <tr>
                                    <th>Some of Eligible Projects / Facilities as below</th>
                                    <th>Quantum of Assistance</th>

                                </tr>
                                <tr>
                                    <td>New Common Effluent Treatment Plant</td>
                                    <td rowspan="12">(a) Assistance upto 40% of eligible fixed capital investment in the project for the activities listed in the policy, with maximum ceiling limit of Rs. 50 crores(b) Committee may sanction upto 80% assistance to the projects of Government departments, Government Agency or Authority, State and Central Government PSUs, with ceiling limit of 50 Crores</td>
                                </tr>
                                <tr>
                                    <td>Technology up-gradation of existing CETPs</td>
                                </tr>
                                <tr>
                                    <td>Conveyance Pipeline for safe disposal of treated effluent</td>
                                </tr>
                                <tr>
                                    <td>Recycling of treated waste water for industrial or other use</td>
                                </tr>
                                <tr>
                                    <td>Common Spray Drying System for effluent</td>
                                </tr>
                                <tr>
                                    <td>Common Reserve Osmosis Plant</td>
                                </tr>
                                <tr>
                                    <td>Common multiple effect evaporator, MVRE etc.</td>
                                </tr>
                                <tr>
                                    <td>Common Drum De contamination facility</td>
                                </tr>
                                <tr>
                                    <td>Automation of existing facility</td>
                                </tr>
                                <tr>
                                    <td>Monitoring system for contamination of water, air, land noise etc. for ambient environment</td>
                                </tr>
                                <tr>
                                    <td>Common waste management infrastructure projects including treatment, storage and disposal facility</td>
                                </tr>
                                <tr>
                                    <td>Any other environment Management Project as approved by SLEC</td>
                                </tr>

                            </table>
                        </div>

                        <div className="assistance-heading">
                            <ul>
                                <li>
                                    Common Boiler Project
                                </li>
                            </ul>
                        </div>

                        <div className="assistance-sub-heading-1">
                            <table className='assistance-table'>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Eligible Activities</th>
                                    <th>Quantum of Assistance</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Project should be promoted by SPV of minimum 10 MSME using steam in the process and having independent boiler in their premise</td>
                                    <td>35% or maximum Rs. 2 crore, if solid fuel used and 50% of cost maximum Rs. 2 crore, if cleaner fuels like CNG, PNG, Bio Fuel etc. used for Common Boiler Project</td>
                                </tr>

                            </table>
                        </div>


                        <div className="assistance-heading">
                            <ul>
                                <li>
                                    Scheme for strengthening the Regulation and Environmental Compliance
                                </li>
                            </ul>
                        </div>

                        <div className="assistance-sub-heading-1">
                            <table className='assistance-table'>
                                <tr>
                                    <th>Eligible Activities</th>
                                    <th>Quantum of Assistance</th>

                                </tr>
                                <tr>
                                    <td>Scientific report / Pilot projects on cleaner production and technology institutions  as , NITs etc</td>
                                    <td rowspan="12">Need based support, maximum Rs. 50 Lakhs, will be provided as may be decided by the SLEC</td>
                                </tr>
                                <tr>
                                    <td>Installation of testing infrastructure and network for monitoring ambient environmental quality</td>
                                </tr>
                                <tr>
                                    <td>Source inventory and remediation programs for polluted rivers, air quality monitoring, emission inventory and sources apportionment study for vulnerable areas to GPCB/ GEMI/ GCPC/ recognized Science & Engineering colleges of the state through institutions such as IITs, NITs, Scientific & R&D institutions</td>
                                </tr>
                                <tr>
                                    <td>Workshop / Seminar programs for capacity building, environmental compliance and enforcement, industrial pollution prevention / control / remediation etc by GPCB/GEMI/GCPC</td>
                                </tr>
                                <tr>
                                    <td>Environment clinics/ an effort to bring the industrial associations and professionals on a common plateform to provide expert advice and cost effective solution on real time environmental issues to be executed by GPCB with the help of Scientific and R&D institute/GEMI/GCPC/recognized science & engineering college of the state</td>
                                </tr>
                                <tr>
                                    <td>Assistance for establishment of training centre or training program cost like skill development programs for instructors, operators and managers of Industries by environment and forest department or by GPCB/GEMI/GCPC in association with Industries association</td>
                                </tr>
                                <tr>
                                    <td>Any other activities as approved by SLEC</td>
                                </tr>
                            </table>
                        </div>
                        <div className="assistance-heading">
                            <ul>
                                <li>
                                    Basic Conditions of Scheme
                                </li>
                            </ul>
                        </div>
                        <div className="assistance-sub-heading">
                            <ul>
                                <li>
                                    The institution shall have to submit the application in prescribed format with Detailes Project Report and relevant documents to Industries Commissionerate.
                                </li>
                                <li>
                                    Institution shall have to obtain consent order / authorization and get is renewal from GPCB time to time and strictly follow the rules & regulations of consent order.
                                </li>
                                <li className="last">
                                    The expenditure incurred within the operative period of the scheme would be eligible for assistance.
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}
