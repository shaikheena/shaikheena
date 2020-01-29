import React from 'react'
import Layout from '../components/layout'

var projects = [
    {
        img: "https://www.playat.in/images/playatIcon.png",
        title: "PlayAt (Sports Ground/Court Booking APP)",
        description: `PlayAt is a ground booking Mobile App for Sports enthusiasts around Hyderabad, Developedby Turpy Mobile Apps Pvt Ltd.PlayAt shows you nearby sports facilities and makes an instant booking of available playing slots.Users will get the notifications of the events happening at the  Sports Arena`,
        role: "​Developing web UI and integrating into ReactJs Application"
    },
    {
        img: "https://lvr2.ibts.org/assets/images/lvr_logo.png",
        title: "Label Verification Request System",
        description: `The LVR system being built for IBTS allows for users to put in requests for Data Plates and/or  Label Verification for manufactured homes. The product has an intuitive, web-based interface for  external users to put in the request. The product also allows IBTS internal
        staff to process the  request and issue the final letters and certificates via an online web-based fulfillment process`,
        role: "​Developing UI components in HTML and CSS along with jQuery"
    }
]

export default (props) => (
    <Layout>
        <div className="container">
            <h3 className="mt-3 text-warning">Recent Projects</h3>
            {projects.map((value, index) => <ProjectView key={index} project={value} />)}

        </div>
    </Layout>
)


const ProjectView = (props) => {
    const project = props.project;
    return <div className="row mt-3">
        <div className="col-md-2  ">
            <img className="project-logo" src={project.img} />
        </div>
        <div className="col-md-10 ">
            <p className="mb-0 font-weight-bold">{project.title}</p>
            <p className="mb-0 project-text">{project.description}</p>
            <p><strong>My Role</strong>: <i>​{project.role}</i>  </p>
        </div>
    </div>
}