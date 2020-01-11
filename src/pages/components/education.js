import React from 'react'

var education = [
    {
        institute: "Vignan's Nirula Institute of Technology and  Science for Womens - JNTU-K (April 2014)",
        course: "B.Tech in ECE"
    },
    {
        institute: "Sri Chaitanya Jr. College - Guntur (March 2010)",
        course: "Intermediate ( MPC )"
    },
    {
        institute: "Blooms Public High School - Guntur (March 2008)",
        course: "SSC"
    },
]

export default () => (
    <div>
        <h3 className="text-warning">Education</h3>
        <div className="pl-2">
            {education.map((value, index) => <Detail key={index} inst={value} />)}
        </div>
    </div>
)

const Detail = (props) => {
    const value = props.inst;
    return <div className="mb-3">
        <p className="mb-0 font-weight-bold">{value.institute}</p>
        <p className="mb-0 text-secondary">{value.course}</p>
    </div>
}