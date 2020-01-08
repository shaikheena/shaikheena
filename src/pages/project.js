import React from 'react'
import Layout from '../components/layout'
export default () => (
    <Layout>
        <h3 className="mt-3">Recent Projects</h3>
        <div className="p-3">
            <div className="mb-5 d-flex align-items-center">
                <img className="project-logo" src="https://www.playat.in/images/playatIcon.png" />
                <div className="ml-3  p-3">
                    <p className="mb-0 font-weight-bold">PlayAt (Sports Ground/Court Booking APP)  </p>
                    <p className="mb-0 project-text">PlayAt is a ground booking Mobile App for Sports enthusiasts around Hyderabad, Developed
                        by Turpy Mobile Apps Pvt Ltd. PlayAt shows you nearby sports facilities and makes an instant
                         booking of available playing slots. Users will get the notifications of the events happening
                 at the  Sports Arena </p>
                    <p><strong>My Role</strong>: <i>​Developing web UI and integrating into ReactJs Application</i>  </p>
                </div>
            </div>
            <div className="mb-5 d-flex align-items-center">
                <img className="project-logo" src="https://lvr2.ibts.org/assets/images/lvr_logo.png" />
                <div className="ml-3  p-3">
                    <p className="mb-0 font-weight-bold"> Label Verification Request System </p>
                    <p className="mb-0 project-text">The LVR system being built for IBTS allows for users to put in requests for Data Plates and/or  Label Verification for manufactured homes. The product has an intuitive, web-based interface for  external users to put in the request. The product also allows IBTS internal
                        staff to process the  request and issue the final letters and certificates via an online web-based fulfillment process </p>
                    <p><strong>My Role</strong>: <i >​Developing UI components in HTML and CSS along with jQuery</i>  </p>
                </div>
            </div>
        </div>
    </Layout>
)