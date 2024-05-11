import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Developmentactivities(props) {
    const data = props.banner;

    const subsidysliderdata = [
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
        <div className='babasaheb-yojana-main'>
            <Imageheading banner={data} />
            <div className='babasaheb-yojana-content'>
                <h2>Assistance for Research & Development Activities</h2>
                <p>Certainly, I can provide assistance and information related to research and development (R&D) activities. Research and development are critical for innovation and progress in various fields, including science, technology, healthcare, and business. Here are some key aspects and considerations for R&D activities</p>
            </div>
            <div className="babasaheb-yojana-container">
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
            
            <div className='eligible-section babasaheb-yojana-container'>
                <div className='content'>
                        {/* ----Who will be eligible?--- */}

                        <li className='heading'>Who will be eligible?</li>
                        <li>Institution / Industrial Association / Professional Bodies which are recognized by CSIR / DSIR and legal entity such as Company, Partnership Firm including LLP, Society, Trust, Industrial Co-Op Society, or Proprietary concern engaged in Manufacturing, Production, Processing or Job Work of Articles.</li>


                        {/* ---- Assistance Available --- */}

                        <li className='heading'>Assistance Available</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Sr No.</th>
                                <th>Eligible Activities</th>
                                <th>Quantum of Assistance</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Setting up / establishing R&D Centre</td>
                                <td rowSpan='2'>Assistance upto 30% of the investment in Machineries, Equipments, Hardware & Software and related assets (excluding land & building cost), subject to maximum ceilinhg of Rs. 5 crores for one or more activities during the operative period of the scheme</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Setting up / establishing Product Development Centre</td>
                            </tr>
                        </table>


                        {/* ---- Assistance for contract / sponsored Research work --- */}

                        <li className='heading'>Assistance for contract / sponsored Research work</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Sr No.</th>
                                <th>Eligible Activities</th>
                                <th>Quantum of Assistance</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Proposals for contract / sponsored research by eligible institutions from Industrial Associations or individual industrial undertaking or Government any other agency as approved by SLEC</td>
                                <td>Assistance for contracted / sponsored research work, from any industrial enterprise / industries association to eligible institution, will be considered @50% of the project cost (excluding cost of land & building), subject to maximum Rs. 50 Lakhs during operative period of the scheme.</td>
                            </tr>
                        </table>


                        {/* ---- Assistance to R&D institutions / laboratories set up by the State Government or by Government of India --- */}

                        <li className='heading'>Assistance to R&D institutions / laboratories set up by the State Government or by Government of India</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Sr No.</th>
                                <th>Eligible Activities</th>
                                <th>Quantum of Assistance per Project</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Setting up of new laboratory as well as strengthening of existing laboratory</td>
                                <td rowSpan='2'>Assistance to R&D institutions / laboratories set up by State Government or Government of India including setting up of new R&D institutions / laboratories shall be provided as per requirement. The proposal will be scrutinized by the SLEC and will be submitted to Government with recommendation</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Strengthening, modernization and adding / up-grading of existing facilities of the eligible Institutions</td>
                            </tr>
                        </table>


                        {/* ---- Assistance to Industrial Association for establishment of R&D laboratories --- */}

                        <li className='heading'>Assistance to Industrial Association for establishment of R&D laboratories</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Sr No.</th>
                                <th>Eligible Activities</th>
                                <th>Quantum of Assistance</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Setting up of new R&D laboratory with all necessary infrastructures and facilities</td>
                                <td>Assistance to R&D laboratories will be eligible upto 60% of the project cost for Machinery & Equipment, Hardware & Software and related assets required for R&D activities subject to a maximum of INR 5 crores</td>
                            </tr>
                        </table>


                        {/* ---- Basic Conditions of Scheme --- */}

                        <li className='heading'>Basic Conditions of Scheme</li>

                        <li>The Industrial Association should be registered under applicable act.</li>
                        <li>Provisional approval of CSIR / DSIR shall have to obtain.</li>
                        <li className='last'>Application shall be submitted to Industries Commissionerate along with DPR and copy of provisional approval of CSIR / DSIR</li>
                </div>
            </div>

        </div>
    )
}
