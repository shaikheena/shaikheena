import React from "react"
import Layout from '../components/layout'

export default () => (
    <Layout>
    <div>
        <h3 className="experience-title text-warning">Employment Experience </h3>
        <div className="p-3">
        <div className="mb-5">
            <p className="mb-0 company-name">Turpy Mobile Apps Pvt. Ltd, HYD (June 2017–  Present)</p>
            <p className="mb-0 ">Frontend Developer</p>
            <ul className="text-secondary">
                <li>Design, build, and maintain efficient, reusable, and reliable Frontend code with technologies of  HTML, CSS, jQuery, and ReactJS.  </li>
                <li>Work with the server-side developers for Implementing UI integration</li>
                <li>Skills/Concepts – HTML, CSS, Bootstrap and JavaScript.</li>
            </ul>
        </div>
        <div>
            <p className="mb-0 company-name">Zakboys (Internship)</p>
            <p className="mb-0 ">Web Designer</p>
            <ul className="text-secondary">
                <li>Created Websites for Local business.</li>
                <li>Main languages and technologies used: HTML, CSS, Bootstrap, jQuery</li>
            </ul>
        </div>
        </div>
    </div>
    </Layout>
)