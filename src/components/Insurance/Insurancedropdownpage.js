import React from 'react'

export default function Insurancedropdownpage(props) {

  const content = props.content;
  const featureboxcontent = content.featureBoxContent;
  const contentdescriptionlist = content.description;
  const contentlist = content.list;
  const contentlist1 = content.list1;
  const contentlist2 = content.list2;

  return (
    <div className='Tariff-payroll-main'>
      <div className='Tariff-payroll-content'>
        <h2>{content.mainheading}</h2>
        <p>{content.pmainheading}</p>
      </div>
      <div className="Tariff-payroll-container">
        <div className='row'>
          {
            featureboxcontent && featureboxcontent.map((value, index) => {
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
        <div className="eligible-section-1 Tariff-payroll-container">
          <div className="Tariff-payroll-contents">
            <div className="content-heading">
              <ul>
                <li>{content.heading}</li>
              </ul>
            </div>
            <div className="tariff-payroll-content">
              <ul>
                {
                  contentlist && contentlist.map((value, index) => {
                    return (
                      <li key={index}>{value.listcontent}</li>
                    )
                  })
                }
                {
                  contentdescriptionlist && contentdescriptionlist.map((value, index) => {
                    return (
                      <p key={index}>{value.descriptionlist}</p>
                    )
                  })
                }

              </ul>
            </div>

            <div className="content-heading">
              <ul>
                <li>{content.heading1}</li>
              </ul>
            </div>
            <div className="tariff-payroll-content">
              <ul>
                {
                  contentlist1 && contentlist1.map((value, index) => {
                    return (
                      <li key={index}>{value.listcontent1}</li>
                    )
                  })
                }
                {
                  contentdescriptionlist && contentdescriptionlist.map((value, index) => {
                    return (
                      <p key={index}>{value.descriptionlist}</p>
                    )
                  })
                }
              </ul>
            </div>

            <div className="content-heading">
              <ul>
                <li>{content.heading2}</li>
              </ul>
            </div>
            <div className="tariff-payroll-content">
              <ul>
                {
                  contentlist2 && contentlist2.map((value, index) => {
                    return (
                      <li key={index}>{value.listcontent2}</li>
                    )
                  })
                }
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
