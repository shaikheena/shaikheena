import React from 'react'

var summary = [
    "Having 2.6 years of IT Experience as a Front End Web Developer in developing Software Application using Html5, Css3 , Bootstrap, Javascript, jQuery, ReactJS in the field of Web Technology and Client side applications.",
    "Excellent skills in developing websites , Strong knowledge on developing web  ui",
    "Strong knowledge in HTML5, CSS3,  JavaScript, jQuery Bootstrap 4.x and knowledge on ReactJS.",
    "Quick learner and ability to grasp later Technologies.",
    "Good team player with good Communication skills with strong attitude towards learning new technologies"
]

export default () => (
    <div>
        <h3 className="text-warning">Career Summary</h3>
        <ul>
            {summary.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>

    </div>
)