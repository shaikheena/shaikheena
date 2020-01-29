import React from "react"
import Layout from '../components/layout'

var experience = [
    {
        company: "Turpy Mobile Apps Pvt. Ltd, HYD (June 2017–  Present)",
        designation: "Frontend Developer",
        responsibilities: [
            "Design, build, and maintain efficient, reusable, and reliable Frontend code with technologies of  HTML, CSS, jQuery, and ReactJS.",
            "Work with the server-side developers for Implementing UI integration",
            "Skills/Concepts – HTML, CSS, Bootstrap and JavaScript."
        ]
    },
    {
        company: "Zakboys (Internship)",
        designation: "Web Designer",
        responsibilities: [
            "Created Websites for Local business.",
            "Main languages and technologies used: HTML, CSS, Bootstrap, jQuery",
        ]
    }
]

export default () => (
    <Layout>
        <div>
            <h3 className="experience-title text-warning">Employment Experience </h3>
            <div className="p-3">
                {experience.map((value, index) => <Experience key={index} exp={value} />)}
                {/* Experience({key: index, exp: value}) */}
            </div>
        </div>
    </Layout>
)

const Experience = (props) => {
    const value = props.exp;
    return <div className="mb-5">
        <p className="mb-0 company-name">{value.company}</p>
        <p className="mb-0 ">{value.designation}</p>
        <ul className="text-secondary">
            {value.responsibilities.map((v, idx) => <li key={idx}>{v}</li>)}
        </ul>
    </div>

}