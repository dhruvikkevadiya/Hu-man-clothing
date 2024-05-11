import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Assistanceenvironment(props) {
    const data = props.banner;

    const subsidysliderdata = [
        {
            icon: Interestrate,
            heading: "Name of the Scheme",
            description: "Scheme of Assistance to MSEs for Shed Developed by Private Developer "
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
        <div className='assistance-environment-main'>
            <Imageheading banner={data} />
            <div className='assistance-environment-content'>
                <h2>Assistance for Environment Protection Measures</h2>
                <p>Protecting the environment is crucial for the well-being of current and future generations. There are numerous measures and actions individuals, communities, businesses, and governments can take to contribute to environmental protection. Here are some key strategies and tips</p>
            </div>
            <div className="assistance-environment-container">
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
                <div className="assistance-environment-container assistance-environment-1">
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
                                Existing enterprise of MSME
                                </li>
                                </ul>  
                        </div>
                        <div className="assistance-heading">
                        <ul>
                            <li>
                            Assistance Available for Capital & Interest Subsidy
                            </li>
                        </ul>
                        </div>

                        <div className="assistance-sub-heading-1">
                        <table className='assistance-table'>
                            <tr>
                                <th>Sr No.</th>
                                <th>Eligible Activities</th>
                                <th>Quantum of Assistance per Project</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Implementation of cleaner production tecnology in place of existing process such as substitution and optimization of raw material, reduction in water consumption or energy consumption or waste generation</td>
                                <td  rowspan="2">Upto 35% of cost of machinery with a ceiling of Rs. 35 lakhs during the operative period of the schemefor MSME2. Upto 10% of the cost of plant & machinery with a ceiling of Rs. 35 lakhs during the operative period of the scheme for Large Projects.</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Any other environment management project with use of Clean, Efficient and Innovative Pollution Control Equipment</td>
                                
                            </tr>
                          
                        </table>
                        </div>

                        <div className="assistance-heading">
                        <ul>
                            <li>
                            Assistance Available for Capital & Interest Subsidy
                            </li>
                        </ul>
                        </div>

                        <div className="assistance-sub-heading-1">
                        <table className='assistance-table'>
                            <tr>
                                <th>Sr No.</th>
                                <th>Eligible Activities</th>
                                <th>Quantum of Assistance per Project</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Implementation of cleaner production tecnology in place of existing process such as substitution and optimization of raw material, reduction in water consumption or energy consumption or waste generation</td>
                                <td  rowspan="2">Upto 35% of cost of machinery with a ceiling of Rs. 35 lakhs during the operative period of the schemefor MSME2. Upto 10% of the cost of plant & machinery with a ceiling of Rs. 35 lakhs during the operative period of the scheme for Large Projects.</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Installation of online continious Stack Emission Monitoring System (CSEMS), online effluent quality monitoring system with connectivity to GPCB / CETP project</td>
                                
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Industrial building of more than 2,000 sq mt built up area which obtained green rating under Indian Green Building Council (IGBC / LEED) or GRIHA</td>
                                <td>Upto 50% of consulting charges or Rs. 2.5 lakhs, which ever is less</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Setting up of Environment Management System including setting up of Environment Management Laboratory</td>
                                <td>Upto 50% of cost of Equipment, ceiling of Rs. 10 Lakhs, once during the operative period of the scheme</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Purchase of new equipment / system related to safety, occupational health or for environment compliances for common use of industries located in cluster of minimum 10 units</td>
                                <td>Upto 50% of consulting charges or Rs. 2.5 lakhs, which ever is less</td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>Industries practicing at least 50% waste water recovery through Zero Liquid Discharge as certified by GPCB</td>
                                <td>Upto 50% of consulting charges or Rs. 2.5 lakhs, which ever is less</td>
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
                                The applicant enterprise has to submit the application within six months from the date of completion of the activity / project.
                                </li>
                                <li className="last">
                                The enterprise shall have to operate and maintain plants and equipment for five years from the date of its commencement.
                                </li>
                                </ul>  
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
