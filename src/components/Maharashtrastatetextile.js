import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Maharashtrastatetextile(props) {
    const data = props.banner;

    const subsidysliderdata = [
        {
            icon: Interestrate,
            heading: "Name of the Scheme",
            description: "Textile Policy of the Government of Maharashtra"
        },
        {
            icon: icon100,
            heading: "Governed By",
            description: "Government of Maharashtra, Department of Textile"
        },
        {
            icon: quickdisbursals,
            heading: "Operative Period",
            description: "From : 15.02.2018 To : 31.03.2023"
        }
    ]
    return (
        <div className='babasaheb-yojana-main'>
            <Imageheading banner={data} />
            <div className='babasaheb-yojana-content'>
                <h2>Textile Policy of the Government of Maharashtra</h2>
                <p>The State Government may, subject to the condition of previous publication, by notification, make rules for carrying out the provisions of this Act, not later than six months from the date of commencement of this Act. In particular, and without prejudice to the generality of foregoing powers, such rules may provide for all or any of the following matters, namely</p>
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
                    <li>Any new or existing unit who is engaged in Single or Multiple Textile Product Manufacturing and having SSI / MSI / IEM certificate from concern departments.</li>
                    <li>Machine will be eligible as per TUFS guidelines issued by Ministry of Textiles time to time.</li>
                    <li>All Public Sector Banks, State Financial Corporation's (SFCs), State Industrial Development Corporations (SIDCs), Schedule Banks and NBFCs Registered with RBI are eligible under the scheme.</li>


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

                    {/* ---- Assistance for modernization of plain power looms --- */}

                    <li className='heading'>Assistance for modernization of plain power looms</li>
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


                    {/* ---- Electricity Concessions --- */}

                    <li className='heading'>Electricity Concessions</li>

                        <li>(The State Government’s Energy Department will not levy charges other than “transmission charges” on projects using non-conventional sources (solar, wind, etc.) of energy.</li>
                        <li>A subsidy of Rs. 3 per unit will be given to co-operative spinning mills for a period of 3 years. Within this period of 3 years the units will set up non-conventional power projects to fulfil their power needs. The restriction of 1 MW is removed from the net metering scheme. The subsidy of Rs. 3 per unit will not be applicable to open access.</li>
                        <li>A subsidy of Rs. 2 per unit will be given to powerlooms using power above 200 HP</li>
                        <li>Subsidy given to powerloom units using less than 27 HP, 27 to 200 HP and more than 200 HP, will similarly be applicable to garment, knitting and hosiery units.</li>
                        <li>A subsidy of Rs 2 per unit will be given to spinning mills (except co-operative spinning mills), processing units and all other textile units which are using more than 107 HP power</li>


                    {/* ---- Electricity Concessions --- */}

                    <li className='heading'>Electricity Concessions</li>

                        <li>Cotton ginning and pressing</li>
                        <li>Spinning / silk reeling and twisting / integrated silk park / synthetic filament / yarn texturing, crimping and twisting</li>
                        <li>Weaving and powerloom</li>
                        <li>Technical textile, non-woven and converters of non-woven</li>
                        <li>Knitting / hosiery / garment / apparel & made-up</li>
                        <li>Processing of fiber / yarn / fabric / garments / made-ups</li>
                        <li>Processing of non-conventional fiber / yarn / fabrics / garments / made-ups (bamboo, banana, ghaypat, maize, coir, hemp, etc)</li>
                        <li>Expansion of existing textiles units</li>
                        <li>Textile Parks / processing parks</li>
                        <li>Energy saving and process control equipment for various textile sectors</li>
                        <li>Skill development activities</li>
                        <li>Wool sector (i.e. scouring, combing, spinning (worsted, shoddy and woolen) and weaving and carpet sector.</li>
                        <li>Standalone spinning</li>
                        <li>Spinning with matching downstream capacity</li>
                        <li>Manufacturing viscose filament yarn / viscose staple fiber</li>
                        <li>Independent weaving preparatory</li>
                        <li>Embroidery on standalone basis</li>
                        <li>Composite upgradation (i.e. units going for upgradation in spinning, weaving / knitting and processing)</li>
                        <li>Multi-activities (units with two or more activities simultaneously except composite upgradation mentioned above)</li>
                        <li>Composite unit</li>
                        <li className='last'>Other units of textile industry not mentioned herein</li>
                </div>
            </div>


        </div>
    )
}
