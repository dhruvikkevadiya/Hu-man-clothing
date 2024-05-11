import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Mediumenterprises(props) {
    const data = props.banner;

    const subsidysliderdata = [
        {
            icon: Interestrate,
            heading: "Name of the Scheme",
            description: "Scheme for assistance to Micro, Small and Medium Enterprises (MSME) "
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
                <h2>Scheme for assistance to Micro, Small and Medium Enterprises (MSME)</h2>
                <p>It seems like you're interested in understanding or discussing topics related to interest, power tariffs, and payroll assistance. Let's briefly go over each of these topics</p>
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
                        <li>Any unit who is registered as an Industrial Unit under MSME development act, 2006 with respective DIC as manufacturing enterprise</li>
                        <li>Only to New MSME of Service Sector as listed in annexures in the GR will be eligible for interest subsidy on the term loan on new machinery, equipment & furniture/fixture (except land & building)</li>
                        <li>Enterprise which has obtained first disbursement during the operative period of the scheme will eligible for the assistance.</li>
                        <li>For carrying out expansion by existing enterprise with investment in fixed capital more than 50% (out of which atleast 60% in Plant & machinery) of its existing gross fixed capital investment as on date of initiation of expansion.</li>
                        <li>Existing or New enterprise carrying out activity of Forward Integration, Backward Integration and Diversification with more than 25% (out of which atleast 60% in Plant & machinery) as on date of initiation of diversification.</li>
                        <li>Out of Forward Integration, Backward Integration, Diversification and Expansion only one activity will be eligible for subsidy during the policy period.</li>


                        {/* ---- Assistance Available --- */}

                        <li className='heading'>Assistance Available for Capital & Interest Subsidy</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Category</th>
                                <th>Capital Subsidy</th>
                                <th>Interest Subsidy</th>
                            </tr>
                            <tr>
                                <td>Category I Taluka</td>
                                <td>@ 10% of eligible Fixed Capital Investment (excluding land)</td>
                                <td>@ 12% of eligible Fixed Capital Investment (excluding land)</td>
                            </tr>
                            <tr>
                                <td>Category II Taluka</td>
                                <td>@ 8% of eligible Fixed Capital Investment (excluding land)</td>
                                <td>@ 10% of eligible Fixed Capital Investment (excluding land)</td>
                            </tr>
                            <tr>
                                <td>Category III Taluka & Municipal Corp. Area</td>
                                <td>@ 15% of Term Loan with a maximum cap of Rs. 15 Lakhs (if eligible FCI is over 10 Crore, additional INR 5 Lakh will be given</td>
                                <td>@ 6% on Term Loan with a maximum cap of Rs. 25 Lakhs per annum for a period of 5 years</td>
                            </tr>
                        </table>

                        <li>1% additional interest subsidy to differently abled entrepreneur, Women entrepreneur and registered startup in manufacturing sector.</li>
                        <li>Maximum rate of interest to an enterprise will not be more than 9%, 8%, 7% where the rate of interest subsidy is 7%, 6% and 5% respectively. However the enterprise have to bear minimum2% interest on term loan by Bank / Financial Institution.</li>
                        <li>1% additional interest subsidy to young entrepreneur below age of 35 years as on date of sanction of term loan.</li>


                        {/* ---- Service Sector --- */}

                        <li className='heading'>Service Sector</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Category</th>
                                <th>Interest Subsidy</th>
                            </tr>
                            <tr>
                                <td>Category I Taluka</td>
                                <td>@ 7% on Term Loan with a maximum cap of Rs. 35 Lakhs per annum for a period of 7 years</td>
                            </tr>
                            <tr>
                                <td>Category II Taluka</td>
                                <td>@ 6% on Term Loan with a maximum cap of Rs. 30 Lakhs per annum for a period of 6 years</td>
                            </tr>
                            <tr>
                                <td>Category III Taluka & Municipal Corp. Area</td>
                                <td>@ 5% on Term Loan with a maximum cap of Rs. 25 Lakhs per annum for a period of 5 years</td>
                            </tr>
                        </table>

                        <li>1% additional interest subsidy to registered start up in service sector and having Udyam / MSME Registration</li>
                        <li>Service enterprise which has service tax registration are only eligible</li>
                        <li>The enterprise shall have to obtain shop & establishment registration from Municipal Corporation if it is located in that area.</li>


                        {/* ---- Basic Conditions for Capital & Interest Subsidy --- */}

                        <li className='heading'>Basic Conditions for Capital & Interest Subsidy</li>

                        <li>Loan sanctioned and disbursed by Bank of Financial Institution will be eligible non-banking financial institutions will not be eligible.</li>
                        <li>Only new building, new plant & machinery / equipment and second hand imported machinery will be eligible.</li>
                        <li>Enterprise will have to remain in production from 7 years from the date of commercial production</li>


                        {/* ---- schemes of Capital & Interest --- */}

                        <li className='heading'>In addition to the above subsidy schemes of Capital & Interest, assistance in some other schemes are also available under this policy :</li>

                       <li>Assistance for Quality Certification</li>
                       <li>Financial Support to MSMEs in ZED Certification</li>
                       <li>Assistance in implementing of Information and Communication Technology (ICT)</li>
                       <li>Assistance for Technology Acquisition</li>
                       <li>Assistance for Patent Registration</li>
                       <li>Assistance for saving in consumption of Energy and Water</li>
                       <li>Assistance for raising Capital through SME Exchange</li>
                       <li>Assistance for reimbursement of CGTMSE fees</li>
                       <li>Rehabilitation of Sick enterprise</li>
                       <li>Assistance for Power Connection Charges</li>
                       <li className='last'>Assistance in Rent to MSEs</li>
                </div>
            </div>

        </div>
    )
}
