import React from 'react'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <div class="container shadow m-3 p-3 ">
            <h1 className="display-4 text-warning">Contact</h1>
            <p className="pl-3 text-primary">heena@heena.me</p>
            <p className="pl-3"> <strong>Phone</strong>: <span >9490955950</span></p>
            <p className="pl-3"> <strong>Email</strong>:<span>shaikheena579@gmail.com</span></p>
            <button type="button" className="btn btn-primary btn-lg ">Download latest CV</button>
        </div>
    </Layout>
    
)


//{experience.map((value, index) => <workExperience key={index} exp={value} />)}
//const workExperience = (props) => {
    const exp = props.experience;
    return <div className="p-3">
        <div className="mb-5">
            <p className="mb-0 company-name">{exp.company}</p>
            <p className="mb-0 ">{exp.designation}</p>
            <ul className="text-secondary">
                <li>{exp.responsibilities[0]} </li>
                <li>{exp.responsibilities[1]}</li>
                <li>{exp.responsibilities[2]}</li>
            </ul>
        </div>
    </div>
}