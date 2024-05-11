import React from 'react'
import Imageheading from "./loans/Imageheading"
import Interestrate from '../assets/images/interestrate.png'
import icon100 from '../assets/images/100%.png'
import quickdisbursals from '../assets/images/quickdisbursals.png'

export default function Capitalsubsidy(props) {
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
        <div className='capital-subsidy-main'>
            <Imageheading banner={data} />
            <div className='capital-subsidy-content'>
                <h2>Capital Subsidy to Large Industries and Thrust Sector</h2>
                <p>Capital subsidies to large industries and thrust sectors are financial incentives provided by governments to encourage investment in specific industries or sectors. These subsidies are typically aimed at promoting economic growth, job creation, and industrial development in areas considered important for a country's economic development.</p>
            </div>
            <div className="capital-subsidy-container">
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
    <div className="capital-subsidy-container capital-subsidy-1">
        <div className="capital-subsidy-contents">
        <div className="capital-heading">
            <ul>
                 <li>
                     Who will be eligible?
                </li>
            </ul>
         </div>

         <div className="capital-sub-heading">
            <ul>
                <li>
                     Any industries association / any enterprise (except for captive use) or firm which is registered under Societies Act, Trust Act or under the Companies Act, or GIDC / Board / Corporation / Nagarpalika / Urban Development Authority etc.
                </li>
            </ul>
        </div>


        <div className="capital-heading">
            <ul>
                 <li>
                 Assistance Available for Capital & Interest Subsidy
                </li>
            </ul>
         </div>


         <div className="capital-sub-heading-1">
                            <table className="capital-table">
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
                                    <td>@ 4% of eligible Fixed Capital Investment (excluding land)</td>
                                    <td>@ 6% of eligible Fixed Capital Investment (excluding land)</td>
                                </tr>

                            </table>
             </div>


             <div className="capital-sub-heading">
            <ul>
                <li>
                The eligible capital subsidy will be given over a period of 10 years from the date of commercial production in equal annual instalments subject to annual ceiling of INR 40 crore.
                </li>
                <li>
                If the total eligible capital subsidy could not disbursed within the period of 10 years due to upper ceiling of INR 40 crores per annum, the eligible period will be extended further upto 10 years and the annual ceiling limit will remain same during such extended period.
                </li>
            </ul>
        </div>

        <div className="capital-heading">
            <ul>
                 <li>
                 Basic Conditions of Scheme
                </li>
            </ul>
         </div>

         <div className="capital-sub-heading">
            <ul>
                <li>
                Any investment made by an existing industrial undertaking for renovation, modernisation, rehabilitation, or rationalisation will not be eligible for incentive under this resolution.
                </li>
                <li>
                Industrial undertaking that has availed incentive under this scheme shall install and effectively operate and maintain pollution control measures as per standards prescribed and approved by the competent authority in this regard.
                </li>
                <li>
                An industrial undertaking that has availed incentive under this scheme shall be required to remain in production continuously till the expiry of the eligible period of incentive. If production is discontinued due to reasons beyond the control of the management, the sanctioning authority may condone the period for which production is discontinued after due verification of details.
                </li>
            </ul>
        </div>


        <div className="capital-heading">
            <ul>
                 <li>
                 List of manufacturing sectors that have been identified as Thrust Sectors under this policy
                </li>
            </ul>
         </div>

         <div className="capital-sub-heading">
            <ul>
                <li>
                Electrical machinery and equipment
                </li>
                <li>
                Industrial machinery and equipment
                </li>
                <li>
                Auto and Auto Components
                </li>
                <li>
                Ceramics
                </li>
                <li>
                Technical Textiles
                </li>
                <li>
                Agro and Food Processing
                </li>
                <li>
                Pharmaceuticals and Medical devices
                </li>
                <li>
                Gems and Jewellery
                </li>
                <li>
                Chemicals (in designated area)
                </li>
                <li>
                Industry 4.0 manufacturing
                </li>
                <li>
                Electric Vehicle and its components
                </li>
                <li>
                Waste management projects
                </li>
                <li>
                Green Energy (Solar & Wind Equipment)
                </li>
                <li>
                Eco-friendly compostable material (substitutes to traditional plastics)
                </li>
                <li className="last">
                100% export oriented units, irrespective of sector
                </li>
            </ul>
        </div>





        </div>
    </div>
</div>



            
        </div>
    )
}
