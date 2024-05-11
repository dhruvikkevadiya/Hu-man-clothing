import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Babasahabyojana(props) {
    const data = props.banner;

    const subsidysliderdata = [
        {
            icon: Interestrate,
            heading: "Name of the Scheme",
            description: "Dr. Babasahab Ambedkar Udyog Uday Yojana (Gujarat Industrial Policy 2020)"
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
                <h2>Dr. Babasahab Ambedkar Udyog Uday Yojana</h2>
                <p>Skill development refers to the process of acquiring and improving a specific set of abilities or expertise in a particular area. These skills can be related to various aspects of life, including personal, professional, and academic domains. Skill development is essential for personal growth, career advancement, and achieving one's goals.</p>
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
                        <li>Any unit who is registered as an Industrial Unit under MSME development act, 2006 with respective DIC as manufacturing enterprise and in which contribution of SC / ST entrepreneur is 51% or more.</li>
                        <li>Only to New MSME of Service Sector as listed in annexures in the GR will be eligible for interest subsidy on the term loan on new machinery, equipment & furniture/fixture (except land & building)</li>
                        <li>Enterprise which has obtained first disbursement during the operative period of the scheme will eligible for the assistance.</li>
                        <li>For carrying out expansion by existing enterprise with investment in fixed capital more than 50% (out of which atleast 60% in Plant & machinery) of its existing gross fixed capital investment as on date of initiation of expansion.</li>
                        <li>Existing or New enterprise carrying out activity of Forward Integration, Backward Integration and Diversification with more than 25% (out of which at least 60% in Plant & machinery) as on date of initiation of diversification.</li>
                        <li>Out of Forward Integration, Backward Integration, Diversification and Expansion only one activity will be eligible for subsidy during the policy period.</li>


                        {/* ---- Assistance Available --- */}

                        <li className='heading'>Assistance Available</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Category</th>
                                <th>Capital Subsidy</th>
                                <th>Interest Subsidy</th>
                            </tr>
                            <tr>
                                <td>Category I Taluka</td>
                                <td>@ 30% of Term Loan with a maximum cap of Rs. 40 Lakhs (if eligible FCI is over 10 Crore, additional INR 10 Lakh will be given</td>
                                <td>@ 8% on Term Loan with a maximum cap of Rs. 35 Lakhs per annum for a period of 7 years</td>
                            </tr>
                            <tr>
                                <td>Category II Taluka</td>
                                <td>@ 25% of Term Loan with a maximum cap of Rs. 35 Lakhs (if eligible FCI is over 10 Crore, additional INR 7.5 Lakh will be given</td>
                                <td>@ 7% on Term Loan with a maximum cap of Rs. 30 Lakhs per annum for a period of 6 years</td>
                            </tr>
                            <tr>
                                <td>Category III Taluka & Municipal Corp. Area</td>
                                <td>@ 15% of Term Loan with a maximum cap of Rs. 15 Lakhs (if eligible FCI is over 10 Crore, additional INR 5 Lakh will be given</td>
                                <td>@ 6% on Term Loan with a maximum cap of Rs. 25 Lakhs per annum for a period of 5 years</td>
                            </tr>
                        </table>


                        <li>1% additional interest subsidy to differently abled entrepreneur, Women entrepreneur and registered startup in manufacturing sector.</li>
                        <li>1% additional interest subsidy to young entrepreneur below age of 35 years as on date of sanction of term loan.</li>
                        <li>Maximum rate of interest to an enterprise will not be more than 9%, 8%, 7% where the rate of interest subsidy is 7%, 6% and 5% respectively. However the enterprise have to bear minimum2% interest on term loan by Bank / Financial Institution.</li>


                        {/* ---- Service Sector --- */}

                        <li className='heading'>Service Sector</li>
                        <table className='assistance-table'>
                            <tr>
                                <th>Category</th>
                                <th>Interest Subsidy</th>
                            </tr>
                            <tr>
                                <td>Category I Taluka</td>
                                <td>@ 8% on Term Loan with a maximum cap of Rs. 35 Lakhs per annum for a period of 7 years</td>
                            </tr>
                            <tr>
                                <td>Category II Taluka</td>
                                <td>@ 7% on Term Loan with a maximum cap of Rs. 30 Lakhs per annum for a period of 6 years</td>
                            </tr>
                            <tr>
                                <td>Category III Taluka & Municipal Corp. Area</td>
                                <td>@ 6% on Term Loan with a maximum cap of Rs. 25 Lakhs per annum for a period of 5 years</td>
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

                        <li className='heading'>In addition to the above subsidy schemes of Capital & Interest, assistance in some other schemes are also available under this policy:</li>

                        <li>Assistance for Quality Certification</li>
                        <li>Financial Support to MSMEs in ZED Certification</li>
                        <li>Assistance in implementing of Information and Communication Technology (ICT)</li>
                        <li>Assistance for Technology Acquisition</li>
                        <li>Assistance for raising Capital through SME Exchange</li>
                        <li>Assistance for Power Connection Charges</li>
                        <li>Assistance to basic industrial infrastructure (Water, Gas and Approach Road)</li>
                        <li>Assistance to special Entrepreneurship training with 360 degree approach with mentoring support and sustenance allowance for Promoter / Entrepreneurs</li>
                        <li className='last'>Assistance to GIDC for developing multi-Storied shed in estates</li>
                </div>
            </div>
        </div>
    )
}
