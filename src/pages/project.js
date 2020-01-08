import React from 'react'
import Layout from '../components/layout'
export default () => (
    <Layout>
        <div className="container">
            <h3 className="mt-3 text-warning">Recent Projects</h3>
            <div className="row p-2">
                <div className="col-md-3 mt-3 ">
                    <img className="project-logo" src="https://www.playat.in/images/playatIcon.png" />
                </div>
                <div className="col-md-9 mt-3 ">
                    <p className="mb-0 font-weight-bold">PlayAt (Sports Ground/Court Booking APP)  </p>
                    <p className="mb-0 project-text">PlayAt is a ground booking Mobile App for Sports enthusiasts around Hyderabad, Developed
                        by Turpy Mobile Apps Pvt Ltd. PlayAt shows you nearby sports facilities and makes an instant
                         booking of available playing slots. Users will get the notifications of the events happening
                 at the  Sports Arena </p>
                    <p><strong>My Role</strong>: <i>​Developing web UI and integrating into ReactJs Application</i>  </p>
                </div>
                <div className="row p-2">
                    <div className="col-md-3 mt-3">
                        <img className="project-logo" src="https://lvr2.ibts.org/assets/images/lvr_logo.png" />
                    </div>
                    <div className="col-md-9 mt-3">
                        <p className="mb-0 font-weight-bold"> Label Verification Request System </p>
                        <p className="mb-0 project-text">The LVR system being built for IBTS allows for users to put in requests for Data Plates and/or  Label Verification for manufactured homes. The product has an intuitive, web-based interface for  external users to put in the request. The product also allows IBTS internal
                        staff to process the  request and issue the final letters and certificates via an online web-based fulfillment process </p>
                        <p><strong>My Role</strong>: <i >​Developing UI components in HTML and CSS along with jQuery</i>  </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)